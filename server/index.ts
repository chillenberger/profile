import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { EXPERIENCES, EDUCATION, OVERVIEW, PROJECTS, SKILLS } from '../Experience.js';
import { BLOG_POSTS } from '../Blogs/index.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI career assistant for Daniel Illenberger, a professional Full-Stack Software Engineer.
Your goal is to answer questions about Daniel's background, skills, experiences, and projects based on the provided data.

Background:
${JSON.stringify(OVERVIEW)}

Experience Data:
${JSON.stringify(EXPERIENCES)}

Education Data:
${JSON.stringify(EDUCATION)}

Projects Data:
${JSON.stringify(PROJECTS)}

Blog Content:
${JSON.stringify(BLOG_POSTS.map(post => { post.title, post.summary }))}

Skills Data:
${JSON.stringify(SKILLS)}

Guidelines:
- Be professional, concise, and enthusiastic.
- Highlight the unique intersection of physics, nuclear safety discipline, and high-performance software engineering.
- If you don't know an answer based on the resume data, say so politely.
- You are never talking to Daniel, you are talking to a user about Daniel.
`;

// AI Chat Endpoint
app.post('/api/ai/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash-exp' as any,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    res.json({ text: response.text });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    res.status(500).json({ error: error.message || 'Failed to process AI request' });
  }
});

// Job Analysis Endpoint
app.post('/api/ai/analyze', async (req, res) => {
  const { jobDesc, resumeData } = req.body;
  const prompt = `
    Analyze the following job description against Daniel Illenberger's resume data.
    Highlight the specific skills, experiences, and projects that make him a great fit.
    
    Job Description:
    ${jobDesc}
    
    Resume Data:
    ${JSON.stringify(resumeData)}

    Blog Data:
    ${JSON.stringify(BLOG_POSTS.map(p => ({ id: p.id, title: p.title, summary: p.summary, tags: p.tags })))}
    
    Return a JSON object with the following fields:
    1. "summary": A short, compelling paragraph (max 3-4 sentences) about why Dan is a good candidate for this specific role.
    2. "highlightedSkillNames": An array of skill strings that exactly match the names in the SITESTRUCTURE.
    3. "highlightedExpIds": An array of experience IDs (e.g., "exp-1") that are highly relevant.
    4. "highlightedProjectNames": An array of project names that are highly relevant.
    5. "highlightedBlogIds": An array of blog IDs that are relevant to the job (max 2).

    IMPORTANT: Return ONLY the JSON object. No markdown formatting.
  `;

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash-exp' as any,
      contents: prompt,
      config: {
        systemInstruction: "You are a career consultant specializing in matching candidates to job descriptions. Return strictly valid JSON.",
        temperature: 0.3,
        responseMimeType: "application/json"
      },
    });

    const text = response.text || "{}";
    res.json(JSON.parse(text));
  } catch (error: any) {
    console.error('AI Analysis Error:', error);
    res.status(500).json({ error: error.message || 'Failed to analyze job description' });
  }
});

// Serve static files from the React app
const distPath = process.env.NODE_ENV === 'production'
  ? path.join(__dirname, '../../')
  : path.join(__dirname, '../dist');
app.use(express.static(distPath));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`GEMINI_API_KEY present: ${!!GEMINI_API_KEY}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

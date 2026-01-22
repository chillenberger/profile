export async function askGeminiAboutDaniel(userMessage: string) {
  try {
    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Raw Server Error Response:', errorText);
      try {
        const errorData = JSON.parse(errorText);
        throw new Error(errorData.error || `Server Error ${response.status}: ${errorText}`);
      } catch (parseError) {
        // If JSON parse fails, throw the raw text (it might be HTML from Nginx/Cloud Run)
        throw new Error(`Server Error ${response.status}: ${errorText}`);
      }
    }

    const data = await response.json();
    return data.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Proxy Error:", error);
    return "I am currently having trouble connecting to my AI core. Please check Daniel's resume below!";
  }
}

export interface AnalysisResults {
  summary: string;
  highlightedSkillNames: string[];
  highlightedExpIds: string[];
  highlightedProjectNames: string[];
  highlightedBlogIds: string[];
}

export async function analyzeJobDescription(jobDesc: string, resumeData: any): Promise<AnalysisResults> {
  try {
    const response = await fetch('/api/ai/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDesc, resumeData }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Raw Server Error Response:', errorText);
      try {
        const errorData = JSON.parse(errorText);
        throw new Error(errorData.error || `Server Error ${response.status}: ${errorText}`);
      } catch (parseError) {
        throw new Error(`Server Error ${response.status}: ${errorText}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error("Analysis Proxy Error:", error);
    return {
      summary: "I encountered an error analyzing the job description. However, based on my general profile, I have strong experience in Full-Stack development and AI implementation.",
      highlightedSkillNames: [],
      highlightedExpIds: [],
      highlightedProjectNames: [],
      highlightedBlogIds: []
    };
  }
}

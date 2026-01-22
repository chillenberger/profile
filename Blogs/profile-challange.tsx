export const ProfileChallenge = {
  id: 'gemini-profile-challenge',
  title: 'Gemini Profile Challenge',
  date: 'January 22, 2026',
  summary: 'Constructing a reactive, dystopian portfolio using Google\'s Antigravity and Gemini. A deep dive into "vibe coding", AI-driven personalization, and the modern React stack.',
  tags: ['Gemini', 'Hackathon', 'Vibe Coding', 'AI Tools'],
  readTime: '4 min read',
  content: (
    <div className="space-y-6 text-slate-300 leading-relaxed">
      <p>
        I wrote this profile for the Gemini Profile Challenge. It is intended to show some angle of who I am. I present the facts of my software engineering career through text with a fun futuristic theme. With the design, I allegorize my view of technology as an exciting futuristic city to be explored while still showing its dark and dreary corners, attractive but mysterious signs, and the distant mega-structure buildings that hold so much potential.
      </p>
      <p>
        I added a customization feature that highlights parts of the page relevant to a user-posted job description as a glimpse of my view of what websites can be: a highly curated experience specific to each user.
      </p>
      <p>
        More specifically, I am a full-stack developer who hones his product sense and coding skills by working with a diverse collection of startups. I have always appreciated the art and creativity associated with UX/UI, and enjoy any opportunity I get to marry efficient backend with beautiful design. Though I have sufficiently delivered complex front ends, designing them has never been my strength.
      </p>
      <p>
        Like most coders, I am currently trying to grasp the quickly changing software engineering job market. Conforming my skills to new AI tools has been a joy, and working on this project as a pure "vibe coding" exercise has brought me much insight.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">How I Built It</h3>
      <p>
        I built this site using Google Antigravity Text Editor with Gemini. I focused on a fast and simple stack and implemented the backend only for API key protection. This stack is designed to toe the line between simplicity and performance.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Tech Stack Overview</h3>

      <h4 className="text-lg font-bold text-neon-blue mt-4 mb-2">Frontend</h4>
      <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
        <li><strong>Framework:</strong> React 19</li>
        <li><strong>Language:</strong> TypeScript 5.8</li>
        <li><strong>Build Tool:</strong> Vite 6 (Fast HMR and bundling)</li>
        <li><strong>Styling:</strong> Tailwind CSS 3.4 (Utility-first CSS)</li>
        <li><strong>Routing:</strong> React Router 7</li>
      </ul>

      <h4 className="text-lg font-bold text-neon-blue mt-4 mb-2">Backend</h4>
      <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
        <li><strong>Server:</strong> Node.js & Express 5.2</li>
        <li><strong>API:</strong> REST endpoints for AI chat and analysis</li>
        <li><strong>AI Integration:</strong> Google Generative AI SDK</li>
        <li><strong>Model:</strong> gemini-2.0-flash-exp</li>
        <li><strong>Features:</strong> Interactive generic chat bot, Resume & Job Description analyzer</li>
      </ul>

      <h4 className="text-lg font-bold text-neon-blue mt-4 mb-2">DevOps & Testing</h4>
      <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
        <li><strong>Containerization:</strong> Docker</li>
        <li><strong>CI/CD:</strong> Google Cloud Build</li>
      </ul>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">What I'm Most Proud Of</h3>
      <p>
        I take pride in what I believe to be a nice use of dark space over complex, intricate images to give the feel of a busy dystopian future while avoiding the chaos of using complex background images. This design is both revealing of some aspect of myself and allegorical to the rapidly shifting and unpredictable world AI propels us toward.
      </p>
      <p>
        I felt the design needed some interactivity flair, so I added a customization input which allows users to curate the site according to a job description. When the user inputs a job description, I produce a short paragraph derived from my work experience and highlight relevant parts of my site that attention should be paid to.
      </p>
      <p>
        As of now, the feature highlights applicable sections of my profile based on a job description. This feature could be taken further; alas, there is only so much time one can contribute.
      </p>
    </div>
  )
};
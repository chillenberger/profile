export const TextEditor = {
  id: 'text-editors-arent-just-for-coders',
  title: 'Text Editors Aren\'t Just for Coders',
  date: 'January 12, 2026',
  summary: 'Wading into the pool of text editors for non-coders.',
  tags: ['Text Editors', 'AI', 'Electron', 'TypeScript', 'Tailwind', 'OpenAI API', 'SQL'],
  readTime: '8 min read',
  content: (
    <div className="space-y-6 text-slate-300 leading-relaxed">
      <h3 className="text-xl font-bold text-white mt-8 mb-4">Beyond Code: Why Documents Need a Real Text Editor</h3>
      <p>
        As a coder, I am passionate about my text editors—Cursor, Antigravity, VS Code, Vim; I have tried many. I spend most of my day in a world of folders and documents containing millions of lines of fine detail. The tools built to navigate this world bring speed and efficiency to my engineering life in a way I long for in other intellectual pursuits.
      </p>
      <p>
        Text editors are not just for code. Documents deserve the same speed, control, and AI‑assisted context developers expect from their tools.
      </p>
      <p>
        Data is living and relational, and the notes we take, the documents we write, and the AI interactions we have are a part of that data. However, most people still open one document at a time, edit, and move on. The more technically savvy among us use an Obsidian‑like system, maybe even downloading a plugin to connect a favorite AI. This still falls short of the power experienced in a coding text editor—with full semantic search, broad context available when needed, AI read/write/delete on allowed files, and agent workflows.
      </p>
      <p>
        On the other side are chat‑bot user interfaces. Unfortunately, most people interact with some of the most capable software in the world through a chat window similar to the way they message a friend. Direct messages are not the right method to interact with a system that can produce thousands of lines of complex knowledge per second, where a single exchange can contain enough information to study for a full day. Many interactions produce knowledge assets worth saving in an organized way. Downloading, editing, and re‑uploading these assets is a pain. The UI needs tools to work with whatever asset is produced, so users can understand and hone it. Additionally, copying and pasting context continuously—or cloning documents to the cloud just to discuss them—is cumbersome and introduces version errors.
      </p>
      <p>
        There are many ways people try to bridge the gap. One can hack a code editor through agents and prompting to push it toward non‑coding work. One can set up an MCP server. Or one can mirror everything into a cloud environment with AI features. These solutions are hacky, complex, or inadequate for most users.
      </p>
      <p>
        The right solution is a collaborative text editor built for drafting, revising, and organizing in plain text.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Where current products fall short</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Chat‑first tools separate thinking from assets.</strong> Infinite scroll makes decisions hard to revisit, attachments require download–edit–upload loops, and you keep copying and pasting context. When you need broad context, you hit limits or hacks.</li>
        <li><strong>Code editors bend the wrong way for documents.</strong> They are powerful but configured for projects, build steps, and developer workflows. For most writers, that means clutter, plugins, and cognitive load before words.</li>
        <li><strong>Cloud doc suites blur scope and add lock‑in.</strong> You must move files into one system, assistants may scan more than you intend, and it is hard to limit the collaborator to exactly the folders you choose.</li>
        <li><strong>Plugin mazes increase friction.</strong> Desktop chat plus MCP stacks promise everything, then drown you in permissions, setup, and unclear boundaries.</li>
      </ul>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">What a document‑first editor should do</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Center the work on files and folders, not a chat log.</strong> Conversations revolve around assets you own.</li>
        <li><strong>Keep everything in plain‑text markdown,</strong> with clean structure and easy export to styled PDFs when needed.</li>
        <li><strong>Provide context from across your allowed trees,</strong> not only the open note, and make those boundaries explicit.</li>
        <li><strong>Offer search that thinks:</strong> semantic, fast, and incremental.</li>
        <li><strong>Maintain shared awareness:</strong> track client state and actions so your AI partner understands what is happening.</li>
      </ul>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">How DocWeave answers this</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Collaboration in the document:</strong> Draft, revise, and restructure side by side with an intelligent, AI‑powered partner that works inside your files.</li>
        <li><strong>Context across folders:</strong> Pulls relevant notes and references from the trees you allow—no more manual copy‑paste.</li>
        <li><strong>Plain‑text control:</strong> Markdown by default, then export to styled PDFs using templates when you are ready.</li>
        <li><strong>Transparent scope:</strong> You pick the folders, and the collaborator stays within them.</li>
        <li><strong>Search that thinks:</strong> Semantic search across documents, with fast, incremental updates.</li>
      </ul>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Examples (video‑ready)</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Resume and cover letter pipeline:</strong> Open your job‑search folder, select your resume and target role, then ask for a one‑page cover letter tailored to the company. DocWeave pulls highlights from your resume, aligns them to the job description, drafts a focused letter, and leaves inline notes where it needs specifics. You edit a few lines and export a styled PDF.
        </li>
        <li>
          <strong>Medical discussion template:</strong> Use a structured note to discuss a case, ask questions about meaning, fill in key fields, evaluate options, summarize, and save. Choose specialty‑specific agents to guide the flow while keeping everything in your files.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Why a text editor (not a chat, and not a code IDE)</h3>
      <p>
        A chat is a conversation log, not a workspace. It hides structure, scatters assets, and buries decisions. A code IDE is a power tool, but its abstractions add weight for writers who do not need terminals, compilers, or build systems. A document‑first editor gives you the same focus and speed developers enjoy—without the extra scaffolding.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">What DocWeave is not (by design)</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Not a generic chat box with context duct‑taped on.</li>
        <li>Not a walled‑garden doc suite that requires every file in the cloud.</li>
        <li>Not a complex plugin maze. The core experience is simple, visible, and controllable.</li>
      </ul>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Availability</h3>
      <p>
        DocWeave is available today on GitHub. You can explore the code, follow progress, and try it locally.
      </p>
      <p>
        Repository: <a href="https://github.com/chillenberger/text-editor-dt" className="text-blue-400 hover:underline">https://github.com/chillenberger/text-editor-dt</a>
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Call to action</h3>
      <p>
        If you want the focus of an editor, the control of plain text, and an AI partner that respects your files, try DocWeave and help shape what comes next.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4">Closing takeaway</h3>
      <p>
        Bring files together, write better together. DocWeave turns scattered notes into coherent documents while keeping you in control.
      </p>
    </div>
  )
};
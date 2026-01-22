export const NuclearSafety = {
  id: 'nuclear-safety-software',
  title: 'From Nuclear Safety to Software Reliability',
  date: 'January 22, 2024',
  summary: 'How my experience directing nuclear safety tests in the Navy shaped my philosophy on building mission-critical software systems.',
  tags: ['Career', 'Engineering', 'Navy'],
  readTime: '6 min read',
  content: (
    <div className="space-y-6 text-slate-300 leading-relaxed">
      <p>
        In a nuclear power plant, "move fast and break things" isn't just bad advice—it's catastrophic. Every action is proceduralized, every anomaly investigated. Transitioning to software engineering, I was surprised by how often speed was prioritized over stability.
      </p>
      <h3 className="text-xl font-bold text-white mt-8 mb-4">The Checklist Manifesto</h3>
      <p>
        One concept I brought with me is the rigorous use of checklists. Not just for deployment, but for code review and incident response.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Verbatim compliance:</strong> Follow the procedure exactly as written.</li>
        <li><strong>Questioning attitude:</strong> Stop if something doesn't look right.</li>
        <li><strong>Forceful backup:</strong> Speak up if a colleague is making a mistake.</li>
      </ul>
      <p>
        Applying these principles to CI/CD pipelines has saved my teams from countless production outages. It turns out, reliability is a feature, not just a byproduct.
      </p>
    </div>
  )
}
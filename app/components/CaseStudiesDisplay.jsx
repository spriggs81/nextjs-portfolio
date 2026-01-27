const CaseStudiesDisplay = ({ data }) => {
  return (
    <div className="space-y-16">
      {data.map((caseStudy) => (
        <article
          key={caseStudy.id}
          className="bg-gray-100 p-8 rounded-lg shadow-md"
        >
          {/* Header */}
          <header className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {caseStudy.title}
            </h2>
            <p className="text-gray-600">
              {caseStudy.role} @ {caseStudy.company}
            </p>
          </header>

          {/* Environment */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Environment</h3>
            <ul className="list-disc list-outside pl-6 text-gray-700 space-y-1">
              {caseStudy.environment?.runtime && (
                <li><strong>Runtime:</strong> {caseStudy.environment.runtime.join(", ")}</li>
              )}
              {caseStudy.environment?.hosting && (
                <li><strong>Hosting:</strong> {caseStudy.environment.hosting}</li>
              )}
              {caseStudy.environment?.systemConstraints && (
                <li>
                  <strong>Constraints:</strong>{" "}
                  {caseStudy.environment.systemConstraints.join(", ")}
                </li>
              )}
            </ul>
          </section>

          {/* Problem */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Problem</h3>
            <p className="text-gray-700 mb-3">
              {caseStudy.problem.summary}
            </p>
            {caseStudy.problem?.userImpact && (
              <>
                <h4 className='text-xs font-semibold mt-3 text-gray-500 uppercase tracking-wide'>Client / User Impact:</h4>
                <ul className="list-disc list-outside pl-6 text-gray-700 space-y-1">
                  {caseStudy.problem.userImpact.map((impact, index) => (
                    <li key={caseStudy.id + '-' + impact}>{impact}</li>
                  ))}
                </ul>
              </>
            )}

            {caseStudy.problem?.timing && (
              <>
                <h4 className='text-xs font-semibold mt-3 text-gray-500 uppercase tracking-wide'>Timing:</h4>
                <ul className="mt-1 text-sm text-gray-600 list-disc list-outside pl-6">
                  {caseStudy.problem.timing.frequency && (
                    <li>Frequency: {caseStudy.problem.timing.frequency}</li>
                  )}
                  {caseStudy.problem.timing.window && (
                    <li>Time Window: {caseStudy.problem.timing.window}</li>
                  )}
                  {caseStudy.problem.timing.duration && (
                    <li>Duration: {caseStudy.problem.timing.duration}</li>
                  )}
                </ul>
              </>
            )}
          </section>

          {/* Prior Investigation */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Prior Investigation</h3>
            <p className="text-gray-700 mb-2">
              Multiple teams investigated the issue with no resolution:
            </p>
            <ul className="list-disc list-outside pl-6 text-gray-700 space-y-1">
              {caseStudy.priorInvestigation?.teamsInvolved?.map((team, index) => (
                <li key={caseStudy.id + '-' + team}>{team}</li>
              ))}
            </ul>
          </section>

          {/* Key Insight */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Key Insight</h3>
            <p className="text-gray-700 mb-2">
              <strong>Incorrect assumption:</strong>{" "}
              {caseStudy.insight.incorrectAssumption}
            </p>
            <p className="text-gray-700">
              <strong>Actual behavior:</strong>{" "}
              {caseStudy.insight.actualBehavior}
            </p>
          </section>

          {/* Resolution */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Resolution</h3>
            <ul className="list-disc list-outside pl-6 text-gray-700 space-y-1">
              {caseStudy.resolution?.pm2Setting && (
                <li>
                  Updated PM2 setting{" "}
                  <code className="bg-gray-200 px-1 rounded">
                    {caseStudy.resolution.pm2Setting.key}
                  </code>{" "}
                  to {caseStudy.resolution.pm2Setting.value}ms
                </li>
              )}
              <li>{caseStudy.resolution.whyItWorked}</li>
              <li>
                Code changes required:{" "}
                {caseStudy.resolution.codeChangesRequired ? "Yes" : "No"}
              </li>
            </ul>
          </section>

          {/* Outcome */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Outcome</h3>
            <p className="text-gray-700 mb-1">
              {caseStudy.outcome.immediateResult}
            </p>
            <p className="text-gray-700">
              {caseStudy.outcome.longTermImpact}
            </p>
          </section>

          {/* Skills */}
          <footer>
            <h3 className="text-lg font-semibold mb-2">Skills Demonstrated</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.skillsDemonstrated?.map((skill, index) => (
                <span
                  key={caseStudy.id + '-' + skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default CaseStudiesDisplay;

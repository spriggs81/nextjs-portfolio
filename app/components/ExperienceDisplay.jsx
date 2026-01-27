const ExperienceDisplay = ({data}) => {
    return (
        <div className="space-y-8">
            {data.map((exp) => (
              <div key={exp.company + '-' + exp.dates} className="bg-gray-100 p-8 rounded-lg shadow-md">
                <div>
                  <h2 className="text-2xl font-bold">{exp.company}</h2>
                  <p className="text-lg text-gray-600">{exp.title}</p>
                  <p className="text-sm text-gray-500">{exp.dates} | {exp.location}</p>
                </div>
                <div className="mt-6 space-y-4">
                  <ul className="list-disc list-outside pl-6 space-y-2">
                    {exp.details.map((detail, index) => (
                      <li key={index} className="text-gray-700">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
    )
}

export default ExperienceDisplay
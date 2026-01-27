const HomeCard = ({content}) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.map(entry => {
                return(
                <div key={entry.title} className="bg-white p-8 rounded-lg shadow-md">
                    <div className="text-4xl mb-4 inline-block">{entry.image}</div>
                    <h3 className="text-2xl font-semibold mb-2">{entry.title}</h3>
                    <p className="text-gray-600">{entry.body}</p>
                </div>
                )
            })}
        </div>
    )
}

export default HomeCard
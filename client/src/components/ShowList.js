import React from "react"

const ShowList = ({shows}) => {

    const upcomingShows = shows.map((show) => {
        return (
            <ul>
                <li
                    className="callout"
                    key={show.id}
                >
                    <h1>
                        {show.title}
                    </h1>
                    <h3>
                        {show.date}
                    </h3>
                </li>
            </ul>
        )
    })
    return(
        <div>
            {upcomingShows}
        </div>
    )
}

export default ShowList
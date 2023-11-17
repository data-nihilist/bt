import React from 'react'

const WelcomePage = ({user}) => {

    let welcomeHeader;
    if(user === null)
    {
        welcomeHeader = "Welcome!";
    }
    else
    {
        welcomeHeader = `Hey there!`;
    }

    return (
        <div className="container card">
            <h1 className="card-title">{welcomeHeader}</h1>
        </div>
    )
}

export default WelcomePage
import React from "react";

const StatAggregate = ({ yearStats }) => {
    return (
        <div className="year">
            <h2>{yearStats.year}</h2>
            <h3>Character</h3>
            <div>
                <h4>Days of Activity</h4>
                <p>{yearStats.character.days_of_activity}</p>
            </div>
        </div>
    )
};

export {
    StatAggregate
};

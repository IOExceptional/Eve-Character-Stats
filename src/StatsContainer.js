import React from "react";
import { connect } from "react-redux";

import { esiSelectors } from "./ESI/data";
import { StatAggregate } from "./Stats/StatAggregate";
import { statsSelectors } from "./Stats/data";

const StatsContainer = ({ characterName, stats }) => {
    return (
        <div>
            <h1>{characterName}</h1>
            {stats.map((yearStats, index) => <StatAggregate key={yearStats.year} yearStats={yearStats} />)}
        </div>
    );
}

const mapStateToProps = state => ({
    characterName: esiSelectors.characterName(state),
    stats: statsSelectors.aggregate(state)
})

const connected = connect(mapStateToProps)(StatsContainer);

export {
    connected as StatsContainer
};

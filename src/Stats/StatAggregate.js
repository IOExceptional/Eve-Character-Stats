import React from "react";

import { StatCategory } from "./StatCategory";
import { StatSummary } from "./StatSummary";

import "./StatAggregate.css";

const StatAggregate = ({ yearStats }) => {
    return (
        <div className="year">
            <h2>{yearStats.year}</h2>
            <StatSummary stats={yearStats} />
            <StatCategory name="Character" properties={yearStats.character} />
            <StatCategory name="Combat" properties={yearStats.combat} />
            <StatCategory name="Industry" properties={yearStats.industry} />
            <StatCategory name="ISK" properties={yearStats.isk} />
            <StatCategory name="Market" properties={yearStats.market} />
            <StatCategory name="Mining" properties={yearStats.mining} />
            <StatCategory name="Module" properties={yearStats.module} />
            <StatCategory name="PvE" properties={yearStats.pve} />
            <StatCategory name="Social" properties={yearStats.social} />
            <StatCategory name="Travel" properties={yearStats.travel} />
        </div>
    );
};

export {
    StatAggregate
};

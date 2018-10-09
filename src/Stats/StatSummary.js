import React from "react";
import { Doughnut }  from "react-chartjs";

import "./StatSummary.css";

const createPieSlice = (value, label, color) => ({
    value: 0 + (!value ? 0 : value),
    label: label,
    color: color
})


const DeathsBySpace = ({ stats }) => {
    const hs = stats.combat.deaths_high_sec;
    const ls = stats.combat.deaths_low_sec;
    const ns = stats.combat.deaths_null_sec;
    const wh = stats.combat.deaths_wormhole;

    return (
        <div className="stat-item col-xs-3">
            <Doughnut data={[
                createPieSlice(hs, "High Sec", "#32d54e"),
                createPieSlice(ls, "Low Sec", "#e7a940"),
                createPieSlice(ns, "Null Sec", "#bb1010"),
                createPieSlice(wh, "Wormholes", "#000000")
            ]} />
            <p>Deaths</p>
        </div>
    );
};

const KillsBySpace = ({ stats }) => {
    const hs = stats.combat.kills_high_sec;
    const ls = stats.combat.kills_low_sec;
    const ns = stats.combat.kills_null_sec;
    const wh = stats.combat.kills_wormhole;

    return (
        <div className="stat-item col-xs-3">
            <Doughnut data={[
                createPieSlice(hs, "High Sec", "#32d54e"),
                createPieSlice(ls, "Low Sec", "#e7a940"),
                createPieSlice(ns, "Null Sec", "#bb1010"),
                createPieSlice(wh, "Wormholes", "#000000")
            ]} />
            <p>Kills</p>
        </div>
    );
};

const Activity = ({ stats }) => {
    //Yes I know it's not accurate
    const daysInYear = 365;
    const daysActive = stats.character.days_of_activity;
    const daysInactive = daysInYear - daysActive;
    
    return (
        <div className="stat-item col-xs-3">
            <Doughnut data={[
                createPieSlice(daysActive, "Days Active", "#32d54e"),
                createPieSlice(daysInactive, "Days Inactive", "#bb1010"),
            ]} />
            <p>Activity</p>
        </div>
    );
};

const StatSummary = ({ stats }) => {
    
    return (
        <div className="stat-summary container-fluid">
            <h3>Summary</h3>
            <div className="stat-summary-items row">
                <Activity stats={stats} />
                <KillsBySpace stats={stats} />
                <DeathsBySpace stats={stats} />
            </div>
        </div>
    );
}

export {
    StatSummary
};

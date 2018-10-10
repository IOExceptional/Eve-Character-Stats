import React from "react";
import { Doughnut }  from "react-chartjs";

import "./StatSummary.css";

const createPieSlice = (value, label, color) => ({
    value: 0 + (!value ? 0 : value),
    label: label,
    color: color
});

const TcsDoughnut = (props) => (
    <Doughnut {...props} options={{
        responsive: true
    }} />
)


const DeathsBySpace = ({ stats }) => {
    const hs = stats.combat.deaths_high_sec;
    const ls = stats.combat.deaths_low_sec;
    const ns = stats.combat.deaths_null_sec;
    const wh = stats.combat.deaths_wormhole;

    const anyDeaths = (!hs ? 0 : hs) +
                    (!ls ? 0 : ls) +
                    (!ns ? 0 : ns) +
                    (!wh ? 0 : wh) !== 0;

    return (
        <div className="stat-item col-sm-3">
            {(anyDeaths && 
                <TcsDoughnut 
                    data={[
                        createPieSlice(hs, "High Sec", "#32d54e"),
                        createPieSlice(ls, "Low Sec", "#e7a940"),
                        createPieSlice(ns, "Null Sec", "#bb1010"),
                        createPieSlice(wh, "Wormholes", "#000000")
                    ]} />
            ) || (
                <h1>0</h1>
            )}
            <p>Deaths</p>
        </div>
    );
};

const KillsBySpace = ({ stats }) => {
    const hs = stats.combat.kills_high_sec;
    const ls = stats.combat.kills_low_sec;
    const ns = stats.combat.kills_null_sec;
    const wh = stats.combat.kills_wormhole;

    const anyKills = (!hs ? 0 : hs) +
                    (!ls ? 0 : ls) +
                    (!ns ? 0 : ns) +
                    (!wh ? 0 : wh) !== 0;


    return (
        <div className="stat-item col-sm-3">
            {(anyKills && 
                <TcsDoughnut 
                    data={[
                        createPieSlice(hs, "High Sec", "#32d54e"),
                        createPieSlice(ls, "Low Sec", "#e7a940"),
                        createPieSlice(ns, "Null Sec", "#bb1010"),
                        createPieSlice(wh, "Wormholes", "#000000")
                    ]} />
            ) || (
                <h1>0</h1>
            )}
            <p>Kills</p>
        </div>
    );
};

const Kdr = ({ stats }) => {
    const killHs = stats.combat.kills_high_sec;
    const killLs = stats.combat.kills_low_sec;
    const killNs = stats.combat.kills_null_sec;
    const killWh = stats.combat.kills_wormhole;

    const totalKills = (!killHs ? 0 : killHs) +
                    (!killLs ? 0 : killLs) +
                    (!killNs ? 0 : killNs) +
                    (!killWh ? 0 : killWh);

    const hs = stats.combat.deaths_high_sec;
    const ls = stats.combat.deaths_low_sec;
    const ns = stats.combat.deaths_null_sec;
    const wh = stats.combat.deaths_wormhole;

    const totalDeaths = (!hs ? 0 : hs) +
                    (!ls ? 0 : ls) +
                    (!ns ? 0 : ns) +
                    (!wh ? 0 : wh);

    
    const total = totalKills/totalDeaths;

    return (
        <div className="stat-item col-sm-3">
            <h1>{!total ? 0 : total}</h1>
            <p>KDR</p>
        </div>
    );
};

const Kda = ({ stats }) => {
    const killHs = stats.combat.kills_high_sec;
    const killLs = stats.combat.kills_low_sec;
    const killNs = stats.combat.kills_null_sec;
    const killWh = stats.combat.kills_wormhole;
    const killAssists = stats.combat.kills_assists;

    const totalKills = (!killHs ? 0 : killHs) +
                    (!killLs ? 0 : killLs) +
                    (!killNs ? 0 : killNs) +
                    (!killWh ? 0 : killWh) + 
                    (!killAssists ? 0 : killAssists);

    const hs = stats.combat.deaths_high_sec;
    const ls = stats.combat.deaths_low_sec;
    const ns = stats.combat.deaths_null_sec;
    const wh = stats.combat.deaths_wormhole;

    const totalDeaths = (!hs ? 0 : hs) +
                    (!ls ? 0 : ls) +
                    (!ns ? 0 : ns) +
                    (!wh ? 0 : wh);

    const total = totalKills/totalDeaths;

    return (
        <div className="stat-item col-sm-3">
            <h1>{!total ? 0 : total}</h1>
            <p>KDA</p>
        </div>
    );
};

const Activity = ({ stats }) => {
    //Yes I know it's not accurate
    const daysInYear = 365;
    const daysActive = stats.character.days_of_activity;
    const daysInactive = daysInYear - daysActive;
    
    return (
        <div className="stat-item col-sm-3">
            <div className="chart-holder">
                <TcsDoughnut data={[
                    createPieSlice(daysActive, "Days Active", "#32d54e"),
                    createPieSlice(daysInactive, "Days Inactive", "#bb1010"),
                ]} />
            </div>
            <p>Days of Activity</p>
        </div>
    );
};


const IskFlow = ({ stats }) => {
    return (
        <div className="stat-item col-sm-3">
            <TcsDoughnut data={[
                createPieSlice(stats.isk.in, "In", "#32d54e"),
                createPieSlice(Math.abs(stats.isk.out), "Out", "#bb1010"),
            ]} />
            <p>ISK In:Out</p>
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
                <IskFlow stats={stats} />
                <Kdr stats={stats} />
                <Kda stats={stats} />
            </div>
        </div>
    );
}

export {
    StatSummary
};

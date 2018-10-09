import React from "react";

import "./StatItem.css";

const StatItem = ({ item, value }) => {
    const title = item.replace(/_/g, " ");

    return (
        <div className="stat-item col-xs-3 col-md-2 col-lg-1">
            <h4>{value}</h4>
            <p>{title}</p>
        </div>
    );
}

export {
    StatItem
};

import React from "react";

import { StatItem } from "./StatItem";

import "./StatCategory.css";

const StatCategory = ({ name, properties }) => {
    if(!properties) { 
        return null;
    }

    const propertyNames = Object.getOwnPropertyNames(properties);


    return (
        <div className="stat-category container-fluid">
            <h3>{name}</h3>
            <div className="stat-category-items row">
                {propertyNames.map(itemName => <StatItem key={itemName} item={itemName} value={properties[itemName]} />)}
            </div>
        </div>
    );
}

export {
    StatCategory
};

import React from "react";
import cx from "classnames";

import { StatItem } from "./StatItem";

import "./StatCategory.css";

class StatCategory extends React.Component {
    state = {
        expanded: false
    }

    onClick() {
        this.setState({expanded: !this.state.expanded});
    }
        
    render() {
        const { name, properties } = this.props;

        if(!properties) { 
            return null;
        }

        const propertyNames = Object.getOwnPropertyNames(properties);

        return (
            <div className="stat-category container-fluid">
                <h3 className="stat-category-title" onClick={() => this.onClick()}>{name} <span className="click-instruction">Click to {(this.state.expanded && <span>hide</span>) || (<span>expand</span>)} </span></h3>
                <div className={cx({
                        "stat-category-items": true,
                        "row": true,
                        hidden: !this.state.expanded
                    })}>
                    {propertyNames.map(itemName => <StatItem key={itemName} item={itemName} value={properties[itemName]} />)}
                </div>
            </div>
        );
    }
}

export {
    StatCategory
};

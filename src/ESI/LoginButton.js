import React from "react";
import {connect} from "react-redux";
import { esiActions } from "./data";

const loginButton = ({ getToken }) =>(
    <div>
        <button type="button" className="btn btn-success" onClick={getToken}>Get Character</button>
    </div>
);

const mapDispatchToProps = {
    getToken: esiActions.getToken
};

const connected = connect(undefined, mapDispatchToProps)(loginButton);

export {
    connected as LoginButton
};

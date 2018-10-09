import React from "react";
import {connect} from "react-redux";
import { esiActions } from "./data";

const loginButton = ({ getToken }) =>(
    <div>
        <button onClick={getToken}>Login</button>
    </div>
);

const mapDispatchToProps = {
    getToken: esiActions.getToken
};

const connected = connect(undefined, mapDispatchToProps)(loginButton);

export {
    connected as LoginButton
};

import React from "react";
import { connect } from "react-redux";

import { esiActions, esiSelectors } from "./data";
import App from "../App";

const AppContainer = ({ setToken, token, characterId }) => {
    if(window.location.hash) {
        const parts = window.location.hash.substr(1).split("=");
        const token = parts[1].split("&")[0];

        setToken(token);
    }

    return (
        <div>
            <App token={token} characterId={characterId} />
        </div>
    )
};

const mapStateToProps = state => ({
    token: esiSelectors.token,
    characterId: esiSelectors.characterId
});

const mapDispatchToProps = dispatch => ({
    setToken: token => dispatch(esiActions.setToken(token))
});

const connected = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export {
    connected as AppContainer
};
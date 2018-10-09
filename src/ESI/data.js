import { all, put, select, takeEvery } from "redux-saga/effects";
import { combineReducers } from "redux";
import axios from "axios";

import { logonUrl, verifyUrl } from "./Constants";
import { statsActions } from "../Stats/data";

//Consts
const TOKEN_GET = "tcs:TOKEN_GET";
const TOKEN_SET = "tcs:TOKEN_SET";
const CHAR_SET = "tcs:CHAR_SET";

//Actions
const esiActions = (function() {
    const getToken = () => ({
        type: TOKEN_GET
    });
    
    const setToken = token => ({
        type: TOKEN_SET,
        payload: token
    });

    const setCharacter = (charId, charName) => ({
        type: CHAR_SET,
        payload: {
            id: charId,
            name: charName
        }
    });

    return {
        getToken,
        setToken,
        setCharacter
    };
})();


//Reducers
const esiReducer = (function() {
    const token = (state = "", action) => {
        if (action.type === TOKEN_SET) {
            return action.payload;
        }

        return state;
    };

    const characterId = (state = 0, action) => {
        if (action.type === CHAR_SET) {
            return action.payload.id;
        }

        return state;
    };

    const characterName = (state = "Test player, please ignore", action) => {
        if (action.type === CHAR_SET) {
            return action.payload.name;
        }

        return state;
    }

    return combineReducers({
        token,
        characterId,
        characterName
    });
})();

//Selectors
const esiSelectors = (function() {
    const base = state => state.esi;
    const token = state => base(state).token;
    const characterId = state => base(state).characterId;
    const characterName = state => base(state).characterName;

    return {
        token,
        characterId,
        characterName
    };
})();

//Sagas
function GetToken() {
    window.location = logonUrl;
}

function* GetCharacter() {
    const token = yield select(esiSelectors.token);

    const response = yield axios.get(verifyUrl, {
        method: "get",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json, text/javascript"
        }
    });
    
    const characterId = response.data.CharacterID;
    const characterName = response.data.CharacterName;
    
    yield put(esiActions.setCharacter(characterId, characterName));
    yield put(statsActions.getStats());
}

function* EsiSaga() {
    yield all([
        takeEvery(TOKEN_GET, GetToken),
        takeEvery(TOKEN_SET, GetCharacter)
    ]);
}

export {
    esiReducer,
    esiActions,
    esiSelectors,
    EsiSaga
};

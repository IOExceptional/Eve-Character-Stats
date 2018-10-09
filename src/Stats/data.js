import axios from "axios";
import { put, select, takeEvery } from "redux-saga/effects";
import { combineReducers } from "redux";

import { characterStatsUrl } from "../ESI/Constants";
import { esiSelectors } from "../ESI/data";

//Consts
const STATS_GET = "tcs:STATS_GET";
const STATS_SET = "tcs:STATS_SET";

//Reducers
const statsReducer = (function() {
    const aggregate = (state = [], action) => {
        if (action.type === STATS_SET) {
            return action.payload;
        }

        return state;
    };

    return combineReducers({
        aggregate
    });
})();

//Actions
const statsActions = (function() {
    const getStats = () => ({
        type: STATS_GET
    });

    const setStats = (stats) => ({
        type: STATS_SET,
        payload: stats
    });

    return {
        getStats,
        setStats
    };
})();

//Selectors
const statsSelectors = (function() {
    const base = state => state.stats;
    const aggregate = state => base(state).aggregate;

    return {
        aggregate
    };
})();

//Sagas
function* StatsSaga() {
    yield takeEvery(STATS_GET, GetStats);
}

function* GetStats() {
    const charId = yield select(esiSelectors.characterId);
    const token = yield select(esiSelectors.token);

    const charUrl = characterStatsUrl.replace("{character_id}", charId);

    const response = yield axios.get(charUrl, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    if(response.status === 200) {
        console.log(response.data);
        yield put(statsActions.setStats(response.data));
    }
};

export {
    statsReducer,
    statsActions,
    statsSelectors,
    StatsSaga
}

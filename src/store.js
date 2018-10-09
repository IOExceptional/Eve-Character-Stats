import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { esiReducer, EsiSaga } from "./ESI/data";
import { statsReducer, StatsSaga } from "./Stats/data";

const reducers = combineReducers({
    esi: esiReducer,
    stats: statsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
    yield all([
        EsiSaga(),
        StatsSaga()
    ]);
}

sagaMiddleware.run(rootSaga);

export {
    store
};

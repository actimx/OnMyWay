import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// Reducers
import reducers from "../reducers";
// Sagas
import sagas from "../sagas";

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducers, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(sagas)
    }
};
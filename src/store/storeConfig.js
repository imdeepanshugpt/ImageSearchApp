import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                applyMiddleware(sagaMiddleware),
                window.__REDUX_DEVTOOLS_EXTENSION__(),
            )
            : applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
export default configureStore;

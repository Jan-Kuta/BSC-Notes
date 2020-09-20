import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';

import notesReducer from './notes/notes.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const { routerMiddleware, createReduxHistory, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    reduxTravelling: true,
});

const rootReducer = combineReducers({
    notes: notesReducer,
    router: routerReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(routerMiddleware)
    )
);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof rootReducer>

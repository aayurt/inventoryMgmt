import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

const store = createStore(RootReducer, compose(applyMiddleware(ReduxThunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

persistStore(store);

export default store;

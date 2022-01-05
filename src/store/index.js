import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import userManagement from '../reducers/userManagement';

const rootReducer = combineReducers({
	userManagement,
});
const persistConfig = {
	key: 'root',
	storage,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk)),
);
export const persister = persistStore(store);

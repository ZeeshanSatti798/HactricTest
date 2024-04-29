import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { taskBasedProjectApi } from './storeApis';
import ProgressReducer from './ProgressReducer';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
    blacklist: [taskBasedProjectApi.reducerPath],
};
const appReducer = combineReducers({
    ProgressReducer,
    [taskBasedProjectApi.reducerPath]: taskBasedProjectApi.reducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false,
        }).concat(taskBasedProjectApi.middleware),
})

export const persistor = persistStore(store);
setupListeners(store.dispatch)
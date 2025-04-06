// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
// import taskReducer from './taskSlice'

// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import { thunk } from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
// };


// const rootReducer = configureStore({
//   reducer: {
//     counter: counterReducer,
//     tasks: taskReducer,
//   }
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// });

// export const persistor = persistStore(store);


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import taskReducer from './taskSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
};


const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
       
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

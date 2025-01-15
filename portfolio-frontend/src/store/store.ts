import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import contactReducer from "./contactSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        contact: contactReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
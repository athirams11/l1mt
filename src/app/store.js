import { configureStore } from "@reduxjs/toolkit";
import countries from "../services/countries";

export const store = configureStore({
    reducer: {
        countries
    }
});

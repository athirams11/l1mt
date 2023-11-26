import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status: "idle",
};

const URL = 'https://restcountries.com/v2/all?fields=name,region,flag';

export const getCountries = createAsyncThunk(
    "auditLog/getCountries",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.get(URL);
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const getCountriesSlice = createSlice({
    name: "getCountries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCountries.pending, (state) => {
                const prevStates = state;
                prevStates.status = "loading";
            })
            .addCase(getCountries.rejected, (state) => {
                const prevStates = state;
                prevStates.status = "failed";
            })
            .addCase(getCountries.fulfilled, (state, { payload }) => {
                const prevStates = state;
                prevStates.data = payload;
                prevStates.status = "idle";
            })
    },
});

export default getCountriesSlice.reducer;

export const countries = (state) => state.countries;
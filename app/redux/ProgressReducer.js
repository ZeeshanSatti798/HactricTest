import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'ProgressReducer',
    initialState: { progress: false, },
    reducers: {
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
    },
});

export const { setProgress } = slice.actions;

export const selectedIsLoading = (state) => state.ProgressReducer.progress;

export default slice.reducer;
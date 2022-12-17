import { createSlice } from '@reduxjs/toolkit';

export const kittenSlice = createSlice({
    name: 'kitten',
    initialState: {
        data: null,
        isLoading: false,
        themeDark: true
    },
    reducers: {
        getKittens: (state, { payload }) => {
            state.data = payload;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
        setThemeDark: (state) => {
            state.themeDark = true;
        },
        setThemeLight: (state) => {
            state.themeDark = false;
        },
    }
});


export const { getKittens, setLoading, setThemeDark, setThemeLight } = kittenSlice.actions;
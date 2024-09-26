import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        isDarkMode: false,
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        },

    }
})

export const {setDarkMode} = appSlice.actions;

export default appSlice.reducer;

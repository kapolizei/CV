import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice.js'

export default configureStore({
    reducer: {
        appSlice: appSlice,
    }
})
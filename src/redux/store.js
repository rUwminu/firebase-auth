import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/authSlice" // Import your slice(s)

const store = configureStore({
	reducer: {
		auth: authReducer,
		// Add more slices here if needed
	},
})

export default store

// counterSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	username: "",
	token: "",
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		userLogin: (state, action) => {
			const { username, token } = action.payload

			state.username = username
			state.token = token
		},
		userLogout: (state) => {
			state.username = ""
			state.token = ""
		},
	},
})

export const { userLogin, userLogout } = authSlice.actions

export default authSlice.reducer

import React, { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { userLogout } from "../redux/features/authSlice"

const PageWrapper = () => {
	const { token } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [isLoginPage, setIsLoginPage] = useState(false)

	const handleCheckUserAlreadyLogin = () => {
		if (token) {
			if (isLoginPage) {
				setIsLoginPage(false)
			}
		}

		if (!token) {
			navigate("/login")

			if (!isLoginPage) {
				setIsLoginPage(true)
			}

			// Make sure to clearup other data
			dispatch(userLogout())
		}
	}

	useEffect(() => {
		handleCheckUserAlreadyLogin()

		return () => null
	}, [])

	return (
		<div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
			<div style={{ position: "sticky", top: 0, left: 0, width: "100%" }}>
				This is Header
				{isLoginPage ? <span>Login</span> : null}
			</div>

			<Outlet />
		</div>
	)
}

export default PageWrapper

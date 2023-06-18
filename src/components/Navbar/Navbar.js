import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { userLogout } from "../../redux/features/authSlice"

const navList = [
	{
		isPrivate: false,
		path: "/",
		label: "Home",
	},
	{
		isPrivate: false,
		path: "/about",
		label: "About",
	},
]

const Navbar = () => {
	const style = {
		navWrapper: {
			position: "sticky",
			top: 0,
			left: 0,
			width: "100%",
			padding: "0 1.5rem",
		},
		navContainer: {
			display: "flex",
			alignItems: "center",
			width: "100%",
			maxWidth: "1600px",
			margin: "0 auto",
			padding: "1rem 0",
		},
		navItemWrapper: {
			display: "flex",
			alignItems: "center",
			justifyContent: "end",
			gap: "1rem",
			width: "100%",
		},
		navItem: {
			padding: "0.45rem 1rem",
			borderRadius: "25px",
			transition: "all 0.3s ease-in-out",
			textDecoration: "none",
			cursor: "pointer",
		},
	}

	const dispatch = useDispatch()
	const authDetail = useSelector((state) => state.auth)

	const [currSelectedPage, setCurrSelectedPage] = useState("")

	return (
		<div style={style.navWrapper}>
			<div style={style.navContainer}>
				<div style={{ fontSize: "28px", fontWeight: "bold" }}>Logo</div>

				<div style={style.navItemWrapper}>
					{navList.map((x, idx) => {
						const { isPrivate, path, label } = x

						const isNavActive =
							currSelectedPage === label ? true : false

						return (
							<NavLink
								key={idx}
								style={{
									...style.navItem,
									color: isNavActive ? "white" : "black",
									backgroundColor: isNavActive
										? "purple"
										: "",
								}}
								className={`${
									!isNavActive ? "nav-normal" : ""
								}`}
								to={path}
								onClick={() => {
									//navigate(path)
									setCurrSelectedPage(label)
								}}
							>
								{label}
							</NavLink>
						)
					})}

					<AccountSetting
						dispatch={dispatch}
						authDetail={authDetail}
						handleClearSelectedNav={() => setCurrSelectedPage("")}
					/>
				</div>
			</div>
		</div>
	)
}

const AccountSetting = ({
	dispatch = () => null,
	authDetail = {
		isAuth: false,
		username: "",
	},
	handleClearSelectedNav = () => null,
}) => {
	const style = {
		btnContainer: {
			display: "flex",
			alignItems: "center",
			gap: "1rem",
		},
		btnWrapper: {
			padding: "0.65rem 1.5rem",
			color: "white",
			borderRadius: "5px",
			cursor: "pointer",
		},
		userWrapper: {
			display: "flex",
			alignItems: "center",
			cursor: "pointer",
		},
	}

	const navigate = useNavigate()

	const handleOnClickLogout = () => {
		dispatch(userLogout())
	}

	return (
		<div style={style.btnContainer}>
			{!authDetail.isAuth ? (
				<>
					<div
						style={{
							...style.btnWrapper,
							backgroundColor: "purple",
						}}
						onClick={() => {
							navigate("/login")
							handleClearSelectedNav()
						}}
					>
						Login
					</div>

					<div
						style={{
							...style.btnWrapper,
							backgroundColor: "gray",
						}}
						onClick={() => {
							navigate("/login?isRegister=true")
							handleClearSelectedNav()
						}}
					>
						Register
					</div>
				</>
			) : (
				<div style={style.userWrapper}>
					<div
						style={{
							width: "3.5rem",
							height: "3.5rem",
							backgroundColor: "gray",
							borderRadius: "100%",
						}}
					/>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<span style={{ fontWeight: "bold" }}>
							{authDetail.username}
						</span>
						<span
							style={{ fontSize: "14px" }}
							onClick={handleOnClickLogout}
						>
							Logout
						</span>
					</div>
				</div>
			)}
		</div>
	)
}

export default Navbar

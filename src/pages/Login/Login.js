import React, { useMemo, useState, useEffect } from "react"

import "./login.css"

// import images
import AiLegendPng from "../../assets/images/login_legend.png"
import ViewPng from "../../assets/images/view_pass.png"
import ClosePng from "../../assets/images/close_view_pass.png"

const defaultStyle = {
	pageWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100vw",
		height: "100vh",
		overflow: "hidden",
	},
	cardContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "end",
		width: "80%",
		height: "80%",
		maxWidth: "70rem",
		maxHeight: "50rem",
		background: `linear-gradient(
			130deg,
			purple 0%,
			red 43.5%,
			yellow 100%
		)`,
	},
	cardWrapper: {
		flexBasis: "57%",
		width: "100%",
		height: "100%",
		backgroundColor: "white",
		borderTopLeftRadius: "20px",
		borderBottomLeftRadius: "20px",
		boxShadow: "0px 0px 12px -1px rgba(0,0,0,0.2)",
	},
}

const Login = () => {
	const [isRegister, setIsRegister] = useState(false)

	return (
		<div style={defaultStyle.pageWrapper}>
			<div style={defaultStyle.cardContainer} className="container-card">
				<LegendCard />

				<div style={defaultStyle.cardWrapper} className="detail-card">
					<RegisterCard />
				</div>
			</div>
		</div>
	)
}

const LegendCard = () => {
	const style = {
		cardLegend: {
			flexBasis: "43%",
			width: "100%",
			height: "100%",
			padding: "4.5rem 2rem",
			zIndex: 10,
		},
		legendImgContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%",
		},
		legengImgWrapper: {
			width: "100%",
			maxWidth: "100%",
			aspectRatio: "1/1",
			overflow: "visible",
		},
	}

	return (
		<div style={style.cardLegend} className="legend-card">
			<h1 style={{ color: "white" }}>
				Ai assistant for your daily finance.
			</h1>

			<div style={style.legendImgContainer}>
				<div style={style.legengImgWrapper}>
					<img src={AiLegendPng} style={{ width: "130%" }} />
				</div>
			</div>
		</div>
	)
}

const LoginCard = () => {
	const [dataDetail, setDataDetail] = useState({
		username: "",
		password: "",
		fullname: "",
	})

	return <div></div>
}

const RegisterCard = () => {
	const style = {
		cardDetail: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			height: "100%",
			padding: "4.5rem 2rem",
		},
		fieldContainer: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			paddingTop: "2.5rem",
		},
	}

	const [dataDetail, setDataDetail] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
	})
	const [errArr, setErrArr] = useState([])

	const handleSubmitRegister = () => {
		let isValid = validateDetail()

		if (!isValid) return
	}

	const getIsInputFieldError = (key = "") => {
		if (!key) return false

		let find = errArr.find((x) => x == key)

		if (find) return true

		if (!find) return false
	}

	const validateDetail = () => {
		let isValid = true

		return isValid
	}

	return (
		<div style={style.cardDetail} className="detail-card">
			<h1>Create Account</h1>

			<div style={style.fieldContainer}>
				<div className="field-row field-row-1">
					<InputField
						inputType="text"
						placeholder="First Name"
						value={dataDetail.firstName}
						isErrorField={getIsInputFieldError("firstName")}
						handleOnChange={(value) => {
							setDataDetail((prev) => {
								return {
									...prev,
									firstName: value,
								}
							})
						}}
						wrapperStyle={{}}
					/>

					<InputField
						inputType="text"
						placeholder="Last Name"
						value={dataDetail.lastName}
						isErrorField={getIsInputFieldError("lastName")}
						handleOnChange={(value) => {
							setDataDetail((prev) => {
								return {
									...prev,
									lastName: value,
								}
							})
						}}
						wrapperStyle={{}}
					/>
				</div>

				<div className="field-row field-row-2">
					<InputField
						inputType="text"
						placeholder="Username"
						value={dataDetail.username}
						isErrorField={getIsInputFieldError("username")}
						handleOnChange={(value) => {
							setDataDetail((prev) => {
								return {
									...prev,
									username: value,
								}
							})
						}}
						wrapperStyle={{}}
					/>
				</div>

				<div className="field-row field-row-3">
					<InputField
						inputType="password"
						placeholder="Password"
						value={dataDetail.password}
						isErrorField={getIsInputFieldError("password")}
						handleOnChange={(value) => {
							setDataDetail((prev) => {
								return {
									...prev,
									password: value,
								}
							})
						}}
						wrapperStyle={{}}
					/>
				</div>

				<div className="field-row field-row-4">
					<SubmitButton />
				</div>
			</div>
		</div>
	)
}

const InputField = React.memo(
	({
		inputType = "",
		value = "",
		placeholder = "",
		isErrorField = false,
		wrapperStyle = {},
		handleOnChange = () => {},
	}) => {
		const style = {
			inputWrapper: {
				position: "relative",
				width: "100%",
				padding:
					inputType == "password"
						? "0.65rem 2.5rem 0.65rem 13px"
						: "0.65rem 13px",
				outline: "1px solid black",
				borderRadius: "5px",
				...wrapperStyle,
			},
			placeholderWrapper: {
				position: "absolute",
				left: "8px",
				fontSize: "16px",
				padding: "0 5px",
				backgroundColor: "white",
				transition: "all 0.3s ease-in-out",
			},
			norPlaceholder: {
				top: "50%",
				transform: "translateY(-50%)",
			},
			focusPlaceholder: {
				top: "0",
				transform: "translateY(-50%)",
				fontSize: "13px",
			},
			viewBtn: {
				position: "absolute",
				top: "50%",
				right: "0",
				width: "1.25rem",
				height: "1.25rem",
				margin: "0 0.5rem",
				transform: "translateY(-50%)",
				cursor: "pointer",
			},
		}

		const [isFocus, setIsFocus] = useState(false)
		const [isShowPassword, setIsShowPassword] = useState(false)

		useEffect(() => {
			if (value && !isFocus) {
				setIsFocus(true)
			}

			return () => null
		}, [value])

		const getInputFocusOrNotStyle = () => {
			return isFocus ? style.focusPlaceholder : style.norPlaceholder
		}

		return (
			<div style={style.inputWrapper}>
				<div
					style={{
						...style.placeholderWrapper,
						...getInputFocusOrNotStyle(),
					}}
				>
					{placeholder}
				</div>

				<input
					type={
						inputType
							? inputType == "password"
								? isShowPassword
									? "text"
									: "password"
								: inputType
							: "text"
					}
					value={value}
					onFocus={() => {
						if (!isFocus) {
							setIsFocus(true)
						}
					}}
					onBlur={() => {
						if (!value && isFocus) {
							setIsFocus(false)
						}
					}}
					onChange={(e) => handleOnChange(e.target.value)}
					style={{
						width: "100%",
						height: "100%",
						fontSize: "16px",
						outline: "none",
						border: "none",
					}}
				/>

				{inputType == "password" && isFocus ? (
					<div
						style={style.viewBtn}
						onClick={() => setIsShowPassword((prev) => !prev)}
					>
						<img
							src={isShowPassword ? ViewPng : ClosePng}
							style={{ width: "100%", height: "100%" }}
						/>
					</div>
				) : null}
			</div>
		)
	}
)

const SubmitButton = React.memo(
	({ label = "", handleOnClick = () => null }) => {
		return
	}
)

export default Login

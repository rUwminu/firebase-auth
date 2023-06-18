import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom"
import { useSelector } from "react-redux"

import RootLayout from "./pages/RootLayout"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Account from "./pages/Account/Account"

// Main css
import "./index.css"

function App() {
	const { isAuth } = useSelector((state) => state.auth)

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />

				<Route path="/login" element={<Login />} />

				<Route path="/account" element={<Account />} />
			</Route>
		)
	)

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

const ErrorPage = () => {
	return <div>Error Page</div>
}

export default App

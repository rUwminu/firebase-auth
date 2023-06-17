import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

import PageWrapper from "./pages/PageWrapper"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"

// Main css
import "./index.css"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<PageWrapper />}>
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Route>
		)
	)

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App

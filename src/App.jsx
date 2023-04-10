import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "./pages/Home";

export default function App() {

	const router = createBrowserRouter(createRoutesFromElements(
		<Route element={<Navbar />}>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Home />} />
		</Route>
	));

	return (
		<RouterProvider router={router} />
	)
}
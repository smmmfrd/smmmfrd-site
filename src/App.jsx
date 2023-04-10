import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Navbar from "../components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Projects";

export default function App() {

	const router = createBrowserRouter(createRoutesFromElements(
		<Route element={<Navbar />}>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Project />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
		</Route>
	));

	return (
		<RouterProvider router={router} />
	)
}
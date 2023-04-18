import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom";
import NavButton from "./NavButton";

export default function Navbar() {
	const location = useLocation();
	useEffect(() => {
		setOpenNav(false);
	}, [location.pathname]);

	const [openNav, setOpenNav] = useState(false);
	// This needs to be set on user preference.
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		document.querySelector('html').setAttribute('data-theme', darkMode ? 'night' : 'winter');
	}, [darkMode]);

	return (
		<>
			<nav className={`overflow-hidden
				${openNav ? "min-w-fit basis-1/3" : "basis-0"} transition-all duration-300
				sm:basis-1/4 sm:pr-0 sm:relative sm:overflow-visible`}>

				<div className="absolute top-2 left-2 flex gap-2 items-center
					sm:sticky sm:top-8 sm:left-0 sm:flex-row-reverse">
					{/* Open/Close Button */}
					<button className="btn btn-circle btn-ghost sm:hidden" value={openNav} onClick={() => setOpenNav(prev => !prev)}>
						{
							!openNav ?
								// Hamburger
								<svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg> :
								// Close
								<svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
						}
					</button>

					<h1 className="text-primary font-bold pb-0.5">smmmfrd.zone</h1>

					{/* Dark Mode Switcher from - https://www.freecodecamp.org/news/how-to-build-a-dark-mode-switcher-with-tailwind-css-and-flowbite/ */}
					<button
						className="btn btn-square btn-ghost text-sm p-2.5"
						onClick={() => setDarkMode(prev => !prev)}
					>
						<svg className={`w-5 h-5 fill-primary ${darkMode ? "" : "hidden"}`}
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
							></path>
						</svg>
						<svg className={`w-5 h-5 fill-primary ${darkMode ? "hidden" : ""}`}
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							></path>
						</svg>
					</button>
				</div>

				<ul className={`[&>*]:text-2xl flex flex-col gap-6 mt-8 pl-11
					sm:text-right sm:mt-0
					sm:sticky sm:top-1/3 sm:justify-center`}>
					<NavButton title={"Home"} dest={"/"} />
					<NavButton title={"Projects"} dest={"/projects"} />
					<NavButton title={"About Me"} dest={"/about"} />
					<NavButton title={"Contact"} dest={"/contact"} />
				</ul>
			</nav>
			<main className={`h-full mt-8 flex flex-col sm:justify-center sm:mt-0
				${openNav ? "ml-8" : "basis-full"} transition-all duration-300
				sm:basis-3/4 sm:mt-0 sm:pt-2`}>

				<Outlet />

			</main>
		</>
	)
}
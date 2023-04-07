import { useState } from "react"

export default function App() {
	const [openNav, setOpenNav] = useState(false);

	return (
		<>
			<nav className={`sm:flex-1 transition-transform duration-500 ${openNav ? "pr-4 w-min" : "w-0"} h-full flex flex-col sm:pr-0 sm:justify-center overflow-hidden`}>
				<div className="absolute top-2 left-2 flex gap-2 items-center">
					{/* Open/Close Button */}
					<label className="btn btn-circle btn-ghost swap swap-rotate">
						{/* this hidden checkbox controls the state */}
						<input type="checkbox" onClick={() => setOpenNav(prev => !prev)}/>

						{/* hamburger icon */}
						<svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

						{/* close icon */}
						<svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

					</label>
					<h1 className="text-primary">smmmfrd.zone</h1>
				</div>

				<ul className={`[&>*]:text-3xl flex flex-col gap-2
					mt-4 pl-8 transition-all duration-500	${openNav ? "opacity-100" : "opacity-0"}
					sm:text-right sm:mt-0 sm:relative sm:opacity-100`}>
					<li className="flex flex-row-reverse sm:flex-row justify-end items-center gap-3">
						Home
						<span className="inline-block w-2 h-9 bg-base-content"></span>
					</li>
					<li>Projects</li>
					<li>Blog</li>
					<li>About Me</li>
					<li>Contact</li>
				</ul>
			</nav>
			<main className="flex-1 h-full mt-8 flex flex-col sm:justify-center sm:mt-0">
				<h1 className="text-4xl mb-4">Page Title</h1>
				<p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio repellat rem a cupiditate officiis ut molestias nesciunt. Ipsam eveniet sit vero nemo dicta deleniti eum ab, explicabo voluptatum dolores.</p>
			</main>
		</>
	)
}
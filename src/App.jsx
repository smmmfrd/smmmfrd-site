import { useState } from "react"

export default function App() {
	const [openNav, setOpenNav] = useState(false);

	return (
		<>
			<nav className={`h-full flex flex-col overflow-hidden
				${openNav ? "basis-1/3" : "basis-0"} transition-all duration-300
				sm:basis-1/2 sm:pr-0 sm:justify-center`}>

				<div className="absolute top-2 left-2 flex gap-2 items-center
					sm:top-4 sm:left-4">
					{/* Open/Close Button */}
					<label className="sm:hidden btn btn-circle btn-ghost swap swap-rotate">
						{/* this hidden checkbox controls the state */}
						<input type="checkbox" onClick={() => setOpenNav(prev => !prev)} />

						{/* hamburger icon */}
						<svg className="swap-off fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

						{/* close icon */}
						<svg className="swap-on fill-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

					</label>

					<h1 className="text-primary font-bold pb-0.5">smmmfrd.zone</h1>
				</div>

				<ul className={`[&>*]:text-3xl flex flex-col gap-6
					mt-8 pl-8
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
			<main className={`h-full mt-8 flex flex-col sm:justify-center sm:mt-0
				${openNav ? "basis-2/3 ml-8" : "basis-full"} transition-all duration-300
				sm:basis-1/2 sm:mt-0`}>
				<h2 className="text-4xl font-bold my-4">Page Title</h2>
				<p className="text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio repellat rem a cupiditate officiis ut molestias nesciunt. Ipsam eveniet sit vero nemo dicta deleniti eum ab, explicabo voluptatum dolores.</p>
				
				<h3 className="text-2xl font-bold my-2">Section Title</h3>
				<p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio repellat rem a cupiditate officiis ut molestias nesciunt. Ipsam eveniet sit vero nemo dicta deleniti eum ab, explicabo voluptatum dolores.</p>
				
				<h3 className="text-2xl font-bold my-2">Section Title</h3>
				<p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio repellat rem a cupiditate officiis ut molestias nesciunt. Ipsam eveniet sit vero nemo dicta deleniti eum ab, explicabo voluptatum dolores.</p>
				
				<h3 className="text-2xl font-bold my-2">Section Title</h3>
				<p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio repellat rem a cupiditate officiis ut molestias nesciunt. Ipsam eveniet sit vero nemo dicta deleniti eum ab, explicabo voluptatum dolores.</p>
				
				<h3 className="text-2xl font-bold my-2">Section Title</h3>
				<p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio repellat rem a cupiditate officiis ut molestias nesciunt. Ipsam eveniet sit vero nemo dicta deleniti eum ab, explicabo voluptatum dolores.</p>
				
				<h3 className="text-2xl font-bold my-2">Section Title</h3>
				<p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio repellat rem a cupiditate officiis ut molestias nesciunt. Ipsam eveniet sit vero nemo dicta deleniti eum ab, explicabo voluptatum dolores.</p>
				
			</main>
		</>
	)
}
export default function App() {
	return (
		<>
			<nav className="sm:flex-1 h-full flex flex-col justify-center">
				<svg className="sm:hidden absolute top-4 left-4 stroke-primary cursor-pointer"
					xmlns="http://www.w3.org/2000/svg" width="27.329" height="17" viewBox="0 0 27.329 17">
					<g id="menu" transform="translate(-415.671 -19)">
						<line id="Line_1" data-name="Line 1" x1="24.329" transform="translate(417.171 34.5)" fill="none" stroke-linecap="round" stroke-width="3" />
						<line id="Line_2" data-name="Line 2" x1="24.329" transform="translate(417.171 27.5)" fill="none" stroke-linecap="round" stroke-width="3" />
						<line id="Line_3" data-name="Line 3" x1="24.329" transform="translate(417.171 20.5)" fill="none" stroke-linecap="round" stroke-width="3" />
					</g>
				</svg>

				<ul className="text-right [&>*]:text-3xl
					hidden sm:block ">
					<li>Home</li>
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
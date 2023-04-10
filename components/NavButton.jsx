import { NavLink } from "react-router-dom";

export default function ({ title, dest }) {

	// Take out gap-3 and w-2
	return (
		<li>
			<NavLink to={dest}
				className={({ isActive }) => `flex flex-row-reverse sm:flex-row justify-end items-center 
				${isActive ? "gap-3 [&>span]:w-2" : ""}`}>
				{title}
				<span className="inline-block h-9 bg-base-content transition-all"></span>
			</NavLink>
		</li>
	)
}
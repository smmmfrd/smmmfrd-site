import { NavLink } from "react-router-dom";

export default function ({ title, dest }) {

	return (
		<li>
			<NavLink to={dest}
				className={({ isActive }) => `flex flex-row-reverse sm:flex-row justify-end items-center
				${isActive && "nav-active"}`}>
				{title}
			</NavLink>
		</li>
	)
}
import { NavLink } from "react-router-dom";

export default function ({ title, dest }) {

	return (
		<li>
			<NavLink to={dest}
				className={({ isActive }) => `flex items-center justify-start sm:justify-end sm:pr-3
				${isActive && "nav-active"}`}>
				{title}
			</NavLink>
		</li>
	)
}
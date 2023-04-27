import React from "react";
import s from "./index.module.scss";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import classnames from 'classnames';

const Lvl = ({ id, active, className, ...props }) => {
	const navigate = useNavigate();
	const { id: userId } = useSelector((state) => state.progress.exactUser);

	const handleNavigation = () => {
		if (active) navigate(`/tree/${userId}/${id}`);
		else toast.warn("You have no access to this level");
	};
	
	return (
		<button
			className={classnames([
				className,
				{
					[s.root]: active,
					[s.root + " " + s.noAccess]: !active
				}
			])}
			onClick={handleNavigation}
			{...props}
			
		>
			{id} lvl
		</button>
	);
};

export default Lvl;

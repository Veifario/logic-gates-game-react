import React from "react";
import s from "./index.module.scss";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Lvl = ({ id, active }) => {
	const navigate = useNavigate();
	const { id: userId } = useSelector((state) => state.progress.exactUser);

	const handleNavigation = () => {
		if (active) navigate(`/tree/${userId}/${id}`);
		else toast.warn("You have no access to this level");
	};
	return (
		<button
			className={active ? s.root : s.root + " " + s.noAccess}
			onClick={handleNavigation}
		>
			{id} lvl
		</button>
	);
};

export default Lvl;

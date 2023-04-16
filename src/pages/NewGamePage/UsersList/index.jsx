import React from "react";
import s from "./index.module.scss";
import { useSelector } from "react-redux";
import Users from "../Users";

const UsersList = () => {
	const users = useSelector((state) => state.user.usersInfo);

	const displayUsers = () =>
		users.map((user) => {
			<Users
				key={user.id}
				userName={user.userName}
				userSurname={user.userSurname}
				score={user.score}
			/>;
		});

	return <div className={s.root}>{displayUsers()}</div>;
};

export default UsersList;

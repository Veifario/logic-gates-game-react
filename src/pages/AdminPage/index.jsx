import React from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import Interactive from "./Interactive";

const AdminPage = () => {
	return (
		<div className={s.root}>
			<Interactive />
			<div className={s.buttons}>
				<Link className={s.link} to="/continue">
					Продолжить
				</Link>
				<Link className={s.link} to="/newgame">
					Новая игра
				</Link>
				<Link className={s.link} to="/load">
					Загрузить
				</Link>
				<Link className={s.link} to="/params">
					Параметры
				</Link>
				<Link className={s.link} to="/credits">
					Об авторах
				</Link>
			</div>
		</div>
	);
};

export default AdminPage;

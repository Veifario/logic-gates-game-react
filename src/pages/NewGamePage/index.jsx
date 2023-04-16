import React from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import icon1 from "../../assets/font-play.png";
import icon2 from "../../assets/plus-sign.png";
import UsersList from "./UsersList";

const NewGamePage = () => {
	return (
		<div className={s.root}>
			<div className={s.bac}>
				<div className={s.top_content}>
					<div className={s.link_card}>
						<Link className={s.link} to="/">
							!open
						</Link>
					</div>
					<div className={s.title}>
						<img src={icon1} alt="" />
						<h1> Выберите ячейку записи</h1>
					</div>
				</div>
				<div className={s.addDisplay}>
					<div className={s.addContent}>
						<button className={s.add_btn}>
							<img src={icon2} alt="" /> Новая ячейка записи
						</button>
					</div>
					<div className={s.userDisplay}>
						<UsersList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewGamePage;

import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import Interactive from "./Interactive";
import { getProgress } from "../../api/getRequest";

const HomePage = () => {
	const [latestProgressId, setLatestProgressId] = useState("");

	const getLatestProgress = async () => {
		const data = await getProgress();
		let latestDate = "";
		data.forEach((e) => {
			if (e.date > latestDate) latestDate = e.date;
		});
		const latestProgress = data.find((e) => e.date === latestDate);
		setLatestProgressId(latestProgress.id);
	};

	useEffect(() => {
		getLatestProgress();
	}, []);

	return (
		<div className={s.root}>
			<Interactive />
			<div className={s.buttons}>
				<Link className={s.link} to={`/tree/${latestProgressId}`}>
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

export default HomePage;

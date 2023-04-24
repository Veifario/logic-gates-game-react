import React from "react";
import s from "./index.module.scss";
import img1 from "../../assets/credits/1.jpg";
import img2 from "../../assets/credits/2.jpg";
import img3 from "../../assets/credits/3.jpg";
import img4 from "../../assets/credits/4.jpg";


const CreditsPage = () => {
	return (
		<div className={s.root}>
			<div className={s.container}>
				<div className={s.slider}>
					<h2>Создатели:</h2>
					<div className={s.double}>
						<div>
							<p>Рафиев Алишер (Logic maker)</p>
							<p>Отабеков Асад (User maker)</p>
							<p>Рахмонов Бекзод (Big dick programmer)</p>
							<p>Губайдуллин Тимур (Credits maker)</p>
							<p>Ильнур(Генератор презентации)</p>
						</div>
						<div>
							<p>Сухроб (just exist)</p>
							<p>Камиль (Background maker)</p>
							<p>Файзиев Аброр (Game desighner)</p>
							<p>Шухрат (Game field)</p>
						</div>
					</div>
					<img className={s.center_img} src={img1} alt="" />
					<h2>Тимлид:</h2>
					<p className={s.center}>Отабеков Асад</p>
					<p className={s.center}>
						(подсадил всю группу на чипсы за время работы над проектом)
					</p>

					<h2>Трушный тимлид:</h2>
					<p className={s.center}>Рафиев Алишер</p>
					<h2>Пидараз:</h2>
					<p className={s.center}>Рахмонов Бекзод</p>
					<div className={s.double}>
						<img className={s.square} src={img2} alt="" />
						<img className={s.square} src={img3} alt="" />
					</div>
					<div className={s.triple}>
						<div>
							<h2>Похуизм наших коллег </h2>
							<h2>на проект(в %):</h2>
							<p>Сухроб(100%)</p>
							<p>Тимур(60%)</p>
							<p>Кама(50%)</p>
							<p>Шухрат(80%)</p>
							<p>Ильнур(100%)</p>
						</div>
						<div>
							<h2>Заебались больше</h2>
							<h2> всех:</h2>
							<p>Рафиев Алишер</p>
							<p>Рафиев Алишер</p>
							<p>Рафиев Алишер</p>
						</div>
						<div>
							<h2>Отдохнули от души:</h2>
							<p>Сухроб</p>
							<p>Ильнур</p>
						</div>
					</div>
					<div className={s.margin}>
						<h2>Командная работа и усердство.</h2>
						<h2> Кровью и потом мы делали эту игры.</h2>
						<h2> Вложив в нее всю душу</h2>
					</div>
					<img className={s.center_img} src={img4} alt="" />
					<h2>Что употребляли разработчики:</h2>
					<div className={s.double2}>
						<div>
							<p>Мега чипсы биг(4 пачки)</p>
							<p>Мега чипсы мини(7 пачек)</p>
							<p>Ашки(2)</p>
						</div>
						<div>
							<p>Сигареты Winston(12 пачек)</p>
							<p>Coca-Cola(8 литров)</p>
							<p>Icos(1)</p>
						</div>
					</div>
					<h2>Без матов и выгорания у наших разрабочитков</h2>
					<h2>не обошлось</h2>
					<p className={s.center}>
						Но песни Алишера нас успокаивали и создавали спокойную атмосферу
					</p>
					<p className={s.center}>для работы</p>
				</div>
			</div>
			
		</div>
	);
};

export default CreditsPage;

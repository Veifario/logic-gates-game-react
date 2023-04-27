import React from "react";
import s from "./index.module.scss";

const Monitor = ({monitorText}) => {
	return (
		<div className={s.root}>
			<div className={s.inner}>
				<div className={s.body}>
					<div style={{ color: monitorText }} className={s.info}>
						привет! давайте мы расскажем немного об этой игре. <br />
						Наша игра представляет собой симулятор, который будет полезен
						любителям программирования и тем, кто только начинает свой путь в
						этой среде. Вам предстоит изучить непростую науку и внедрить ее в
						жизнь, чтобы обеспечить благополучное существование своему герою.
						Нажимай на кнопку "Играть", и приступай покорять мир кодинга, удачи)
					</div>
				</div>
				<div className={s.holder1}></div>
				<div className={s.holder2}></div>
			</div>
		</div>
	);
};

export default Monitor;

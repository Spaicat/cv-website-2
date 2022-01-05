import styles from "../../styles/Square.module.scss";
import SquareItem from "./SquareItem";
import QuarterCircle from "../../media/icon/QuarterCircle";

export default function SquareContainer(props) {
	return (
		<div className={styles.square}>
			<div className={styles.square__title}>
				<h3>{props.title}</h3>
			</div>
			<div className={styles.square__list}>
				{props.content.map((data, key) => {
					return (<SquareItem key={key} {...data} />)
				})}
			</div>
		</div>
	);
}
import styles from "../../styles/GridDisplay.module.scss";
import GridDisplayItem from "./GridDisplayItem";

export default function GridDisplayContainer(props) {
	return (
		<div className={styles.container}>
			{props.content.map((data, key) =>
				<GridDisplayItem {...data} key={key} />
			)}
		</div>
	);
}
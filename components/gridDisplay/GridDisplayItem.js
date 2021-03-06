import styles from "../../styles/GridDisplay.module.scss";
import useModal from "../../hooks/useModal";
import GridDisplayModal from "./GridDisplayModal";

export default function GridDisplayItem(props) {
	const [isShowing, toggle] = useModal();

	return (
		<>
			<a className={styles.item} onClick={toggle}>
				<div className={styles.image}>
					<img alt={props.alt} src={`images/projects/${props.id}/${props.image}`} />
				</div>
				<div className={styles.header}>
					<div className={styles.title}>
						<h3>{props.title}</h3>
						<h4>{props.date}</h4>
					</div>
					<div className={styles.technologies}>
						{props.technologies.map((data, key) => {
							return <div key={key} className={styles.technologies__item}>{data}</div>
						})}
					</div>
				</div>
			</a>
			<GridDisplayModal isShowing={isShowing} hide={toggle} {...props} />
		</>
	);
}
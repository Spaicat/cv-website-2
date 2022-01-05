import styles from "../../styles/Timeline.module.scss";

export default function TimelineItem(props) {
	return (
		<div className={styles.timeline__item}>
			<span className={styles.time}>{props.date}</span>
			<div className={styles.content}>
				<div className={styles.title}>
					<h3>{props.title}</h3>
					<h4>{props.subtitle}</h4>
				</div>
				{props.image && <img alt={props.image.alt} src={"images/timeline/" + props.image.src} />}
			</div>
		</div>
	);
}
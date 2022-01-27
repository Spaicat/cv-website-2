import { useRef } from "react";
import styles from "../../styles/Timeline.module.scss";

export default function TimelineItem(props) {
	const ref = useRef(null);

	const getHeight = () => {
		let height = 0;
		if (props.activeId === props.id)
			height = ref.current.scrollHeight;

		return {
			maxHeight: `${height}px`
		};
	};

	return (
		<div className={`${styles.timeline__item} ${props.activeId === props.id ? styles.active : ""}`}>
			<span className={styles.time}>{props.date}</span>
			<div className={styles.content}>
				<div className={styles.header} onClick={() => props.setActive(props.id)}>
					<div className={styles.title}>
						<h3>{props.title}</h3>
						<h4>{props.subtitle}</h4>
					</div>
					{props.image && <img alt={props.image.alt} src={"images/timeline/" + props.image.src} />}
				</div>
				<div className={styles.details} style={getHeight()} ref={ref}>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
}
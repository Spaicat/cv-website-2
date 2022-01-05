import styles from "../../styles/Timeline.module.scss";
import TimelineItem from "./TimelineItem";

export default function TimelineContainer(props) {
	return (
		<div className={styles.timeline}>
			{props.content.map((data, key) =>
				<TimelineItem key={key} {...data} />
			)}
		</div>
	);
}
import { useState } from "react";
import styles from "../../styles/Timeline.module.scss";
import TimelineItem from "./TimelineItem";

export default function TimelineContainer(props) {
	const [activeId, setActiveId] = useState();
	const collapse = (id) => {
		if (id === activeId)
			setActiveId(null);
		else
			setActiveId(id);
	};


	return (
		<div className={styles.timeline}>
			{props.content.map((data, key) =>
				<TimelineItem key={key} id={key} setActive={collapse} {...data} activeId={activeId} setActiveId={setActiveId}/>
			)}
		</div>
	);
}
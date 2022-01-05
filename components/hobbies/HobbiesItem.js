import styles from "../../styles/Hobbies.module.scss";

export default function HobbiesItem(props) {
	return (
		<div className={styles.item}>
			<div className={styles.header}>
				<img src={"./images/hobbies/" + props.figure} alt="hobby" />
				<h4 className={styles.title}>{props.title}</h4>
			</div>
			<p className={styles.text}>{props.text}</p>
		</div>
	);
}
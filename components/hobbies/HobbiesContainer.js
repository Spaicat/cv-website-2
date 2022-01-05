import styles from "../../styles/Hobbies.module.scss";
import HobbiesItem from "./HobbiesItem";

export default function HobbiesContainer(props) {
	return (
		<div className={styles.container}>
			{props.content.map((data, key) => {
				return (<HobbiesItem key={key} {...data} />)
			})}
		</div>
	);
}
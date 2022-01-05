import styles from "../../styles/Square.module.scss";

export default function SquareItem(props) {
	const getImages = () => {
		let imagesComponents = null;
		if (props.images != null) {
			imagesComponents = props.images.map((data, key) => {
				return (<img key={key} alt={data.alt} src={"images/" + data.src} />)
			});
		}
		return imagesComponents;
	};

	return (
		<div className={styles.square__item}>
			<div className={styles.img}>
				{getImages()}
			</div>
			<h4 className={styles.title}>{props.title}</h4>
			<p>{props.text}</p>
		</div>
	);
}
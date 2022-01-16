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
			<div className={styles.header}>
				<div className={styles.img}>
					{getImages()}
				</div>
				<h4 className={styles.title}>{props.title}</h4>
			</div>
			<p>{props.text}</p>
			{props.technologies.length != 0 &&
				<ul className={styles.details}>
					{props.technologies.map((data, key) => {
						return (
							<li key={key} className={styles.details__item}>
								{data.image && 
									<div className={styles.img}>
										<img alt={data.image.alt} src={"images/" + data.image.src} />
									</div>
								}
								<h5>{data.title}</h5>
							</li>
						)
					})}
				</ul>
			}
		</div>
	);
}
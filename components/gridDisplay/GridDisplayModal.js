import { createPortal } from "react-dom";
import styles from "../../styles/Modal.module.scss";

export default function GridDisplayModal({ isShowing, hide, ...props }) {
	const getNbPeople = () => {
		return "Projet " + ((props.nbGroup > 1) ? `de ${props.nbGroup} personnes` : "personnel");
	}

	return isShowing 
	? createPortal(
		<>
			<div className={styles.modal} onClick={hide}>
				<div className={styles.modal__wrapper} onClick={event => event.stopPropagation()}>
					<div className={styles.modal__header}>
						<h4>{props.title}</h4>
						<button
							type="button"
							className={styles.closeBtn}
							onClick={hide}
						>
							<span>&times;</span>
						</button>
					</div>
					<div className={styles.modal__image}>
						<img alt={props.alt} src={`images/projects/${props.id}/${props.image}`} />
					</div>
					<div className={styles.modal__body}>
						<div className={styles.content}>
							<p>{props.text}</p>
						</div>
						<div className={styles.details}>
							{props.linkSeeProject && (
								<a className={styles.button} href={props.linkSeeProject} target="_blank">Voir le projet</a>
							)}
							<p className={styles.details__title}>Taille du projet :</p>
							<p className={styles.small}>{getNbPeople()}</p>
							<p className={styles.details__title}>Technologies :</p>
							<ul className={styles.technologies}>
								{props.technologies.map((data, key) => {
									return <li key={key} className={styles.technologies__item}>{data}</li>
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>,
		document.body
	)
	: null;
}
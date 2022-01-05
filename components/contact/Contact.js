import { useEffect } from 'react';
import styles from "../../styles/Contact.module.scss";
import PinIcon from "../../media/icon/PinIcon";
import PhoneIcon from "../../media/icon/PhoneIcon";
import MailIcon from "../../media/icon/MailIcon";


export default function Sidebar(props) {
	const handleMessage = (event) => {
		event.preventDefault();
		console.log("Salut");
	};

	return (
		<div className={styles.container}>
			<div className={styles.coord}>
				<h4>Coordonnées</h4>
				<ul>
					<li><PinIcon /> 69340</li>
					<li><PhoneIcon /> 07 69 46 14 45</li>
					<li><MailIcon /> trembleau.thibault@gmail.com</li>
				</ul>
			</div>
			<form onSubmit={handleMessage} className={styles.form}>
				<div className={`${styles.field} ${styles.half}`}>
					<label for="name">Nom</label>
					<input type="text" id="name" name="name" autoComplete="name" /*required*/ />
				</div>

				<div className={`${styles.field} ${styles.half}`}>
					<label for="email">Email</label>
					<input type="email" id="email" name="email" autoComplete="email" /*required*/ />
				</div>

				<div className={styles.field}>
					<label for="subject">Objet</label>
					<input type="text" id="subject" name="subject" autoComplete="name" /*required*/ />
				</div>

				<div className={styles.field}>
					<label for="message">Message</label>
					<textarea type="textarea" id="message" name="message" onkeyup="textAreaAdjust(this)" /*required*/></textarea>
				</div>

				<div className={styles.field}>
					<p style={styles.error}></p>
					<p style={styles.success}></p>
				</div>

				<button className={styles.submit}>Envoyer</button>
			</form>
		</div>
	);
}
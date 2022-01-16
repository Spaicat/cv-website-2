import { useState } from 'react';
import styles from "../../styles/Contact.module.scss";
import stylesLayout from "../../styles/Layout.module.scss";
import PinIcon from "../../media/icon/PinIcon";
import PhoneIcon from "../../media/icon/PhoneIcon";
import MailIcon from "../../media/icon/MailIcon";


export default function Sidebar(props) {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	  
	const handleMessage = async (event) => {
		event.preventDefault();
		const res = await fetch("api/contact", {
			method: "POST",
			body: JSON.stringify(formState)
		});
		const result = await res.json();
		console.log(result);
	};

	return (
		<div className={styles.container}>
			<div className={styles.coord}>
				<h4>Coordonnées</h4>
				<ul>
					<li><PinIcon /> Francheville - 69340</li>
					<li><PhoneIcon /> <a href="tel:33769461445" className={stylesLayout.link}>+33 7 69 46 14 45</a></li>
					<li><MailIcon /> <a href="mailto:trembleau.thibault@gmail.com" className={stylesLayout.link}>trembleau.thibault@gmail.com</a></li>
				</ul>
			</div>
			<form onSubmit={handleMessage} className={styles.form}>
				<div className={`${styles.field} ${styles.half}`}>
					<label htmlFor="name">Nom</label>
					<input
						type="text" 
						id="name" 
						name="name" 
						autoComplete="name" 
						/*required*/
						value={formState.name}
						onChange={(e) =>
							setFormState({ ...formState, name: e.target.value })
						}
					/>
				</div>

				<div className={`${styles.field} ${styles.half}`}>
					<label htmlFor="email">Email</label>
					<input 
						type="email" 
						id="email" 
						name="email" 
						autoComplete="email" 
						/*required*/
						value={formState.email}
						onChange={(e) =>
							setFormState({ ...formState, email: e.target.value })
						}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="subject">Objet</label>
					<input 
						type="text" 
						id="subject" 
						name="subject" 
						autoComplete="name" 
						/*required*/
						value={formState.subject}
						onChange={(e) =>
							setFormState({ ...formState, subject: e.target.value })
						}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="message">Message</label>
					<textarea 
						type="textarea"
						id="message"
						name="message"
						/*required*/
						value={formState.message}
						onChange={(e) =>
							setFormState({ ...formState, message: e.target.value })
						}
					>
					</textarea>
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
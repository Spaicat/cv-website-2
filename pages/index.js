import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Layout.module.scss";
import CalendarIcon from "../media/icon/CalendarIcon";
import HomeIcon from "../media/icon/HomeIcon";
import CarIcon from "../media/icon/CarIcon";
import MailIcon from "../media/icon/MailIcon";
import PhoneIcon from "../media/icon/PhoneIcon";
import SquareContainer from "../components/squareContent/SquareContainer";
import skillsContent from "../data/skillsContent";
import TimelineContainer from "../components/timeline/TimelineContainer";
import educationContent from "../data/educationContent";
import GridDisplayContainer from "../components/gridDisplay/GridDisplayContainer";
import projectContent from "../data/projectContent";
import HobbiesContainer from "../components/hobbies/HobbiesContainer";
import hobbiesContent from "../data/hobbiesContent";
import Contact from "../components/contact/Contact";

export default function Home() {
	let getAge = () => {
		let today = new Date();
		let birthDate = new Date("2000-09-18");
		let age = today.getFullYear() - birthDate.getFullYear();
		let month = today.getMonth() - birthDate.getMonth();
		if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
			age--;
		return age;
	}

	return (
		<Layout>
			<section className={`${styles.section} ${styles.home}`} id="home">
				<div className={styles.section__container}>
					<div className={styles.home__container}>
						<div className={styles.boxLeft}>
							<h1 className={styles.home__title}>Thibault <br /> Trembleau</h1>
							<h2 className={styles.home__subtitle}>Etudiant en informatique</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ipsum libero. Nullam id augue vitae velit egestas tincidunt ac eleifend justo. Fusce vel suscipit sem.</p>
						</div>
						<div className={styles.boxRight}>
						</div>
					</div>
				</div>
				<a className={styles.mouse} href="#profile"></a>
			</section>
			<section className={`${styles.section} ${styles.profile}`} id="profile">
				<div className={styles.section__container}>
					<div className={styles.profile__container}>
						<div className={styles.boxLeft}>
							<Image src={"/images/forme.svg"} width={1480} height={1776} />
						</div>
						<div className={styles.boxRight}>
							<div className={styles.infoBox}>
								<h2>Informations</h2>
								<ul className={styles.profile__list}>
									<li>
										<CalendarIcon /><span>{getAge()} ans</span>
									</li>
									<li>
										<HomeIcon /><span>Francheville - 69340</span>
									</li>
									<li>
										<CarIcon /><span>Permis B</span>
									</li>
									<li>
										<PhoneIcon /><span>Telephone : 07 69 46 14 45</span>
									</li>
									<li>
										<MailIcon /><span>Email : trembleau.thibault@gmail.com</span>
									</li>
								</ul>
							</div>
							<div className={styles.aboutBox}>
								<h2>A propos</h2>
								<p className={styles.description}>
									Je suis un étudiant en informatique et j'ai des compétences assez polyvalentes. Je suis <strong>passionné</strong> et <strong>motivé</strong> par mon travail tout en étant quelqu'un de <strong>persévérant</strong>. Depuis le collège, je m'intéresse justement au domaine de l'informatique et espère y travailler dans un futur proche. Je pense effectivement que l'informatique est un domaine essentiel dans notre développement et je veux ainsi y participer activement.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.section} id="skills">
				<div className={styles.section__container}>
					<h2>Compétences</h2>
					{skillsContent.map((data, key) => {
						return (<SquareContainer key={key} title={data.title} content={data.content} />)
					})}
				</div>
			</section>
			<section className={styles.section} id="project">
				<div className={styles.section__container}>
					<h2>Formation / Expérience</h2>
					<TimelineContainer content={educationContent} />
				</div>
			</section>
			<section className={styles.section} id="education">
				<div className={styles.section__container}>
					<h2>Projets professionnel et scolaire</h2>
					<GridDisplayContainer content={projectContent} />
				</div>
			</section>
			<section className={styles.section} id="hobbies">
				<div className={styles.section__container}>
					<h2>Centres d'intérêt</h2>
					<HobbiesContainer content={hobbiesContent} />
				</div>
			</section>
			<section className={styles.section} id="contact">
				<div className={styles.section__container}>
					<h2>Contacts</h2>
					<Contact />
				</div>
			</section>
		</Layout>
	)
}

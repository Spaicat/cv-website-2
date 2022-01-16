import { useEffect } from 'react';
import Link from "next/link";
import SidebarLink from "./SidebarLink";
import styles from "../../styles/Header.module.scss";
import HomeIcon from "../../media/icon/HomeIcon";
import ProfileIcon from "../../media/icon/UserIcon";
import SkillsIcon from "../../media/icon/ToolsIcon";
import ProjectsIcon from "../../media/icon/ScreenIcon";
import EducationIcon from "../../media/icon/GraduationIcon";
import HobbiesIcon from "../../media/icon/BrushIcon";
import DownloadIcon from "../../media/icon/DownloadIcon";
import MenuIcon from "../../media/icon/MenuIcon";
import ContactIcon from "../../media/icon/EmailIcon";


export default function Sidebar(props) {
	let handleHamburger = (event) => {
		event.preventDefault();
		let menuGlobal = document.getElementById("sidebar");
		let hamburger = document.getElementById("hamburger-menu");
		if (menuGlobal.classList.contains("menu-global-show")) {
			menuGlobal.classList.remove("menu-global-show");

			// Animation
			hamburger.classList.remove("hamburger-active");
		}
		else {
			menuGlobal.classList.add("menu-global-show");

			// Animation
			hamburger.classList.add("hamburger-active");
		}
	}

	let getPosY = (elt) => {
		return window.scrollY + elt.getBoundingClientRect().top
	}

	useEffect(() => {
		let handleScroll = () => {
			let scrollPos = window.scrollY;
			let eltList = Array.from(document.querySelectorAll(`.${styles.menu} .${styles.element} a`));
			eltList.forEach((elt) => {
				let refElt = document.querySelector(elt.getAttribute("href"));
				if (getPosY(refElt) - 250 <= scrollPos && getPosY(refElt) + refElt.clientHeight > scrollPos) {
					if (!elt.classList.contains(styles.active)) {
						eltList.forEach((elt) => elt.classList.remove(styles.active));
						elt.classList.add(styles.active);
					}
				}
				else {
					elt.classList.remove(styles.active);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={styles.sidebar}>
			<div className={styles.sidebar__container}>
				<a className={styles.hamburger} href="#" onClick={handleHamburger}>
					<MenuIcon />
				</a>
				<Link href="/">
					<a className={styles.logo}>
						<span>tT</span>
					</a>
				</Link>
				<nav className={styles.menu}>
					<SidebarLink link="#home" icon={<HomeIcon />} text="Accueil" />
					<SidebarLink link="#profile" icon={<ProfileIcon />} text="Profil" />
					<SidebarLink link="#skills" icon={<SkillsIcon />} text="Compétences" />
					<SidebarLink link="#education" icon={<EducationIcon />} text="Formation" />
					<SidebarLink link="#project" icon={<ProjectsIcon />} text="Projets" />
					<SidebarLink link="#hobbies" icon={<HobbiesIcon />} text="Centres d'intérêt" />
					<SidebarLink link="#contact" icon={<ContactIcon />} text="Contact" />
				</nav>
				<li className={`${styles.element} ${styles.bottom}`}>
					<a href="/download/CV_Thibault_Trembleau.pdf" target="_blank" download>
						<DownloadIcon />
						<span>Télécharger CV</span>
					</a>
				</li>
			</div>
		</header>
	);
}
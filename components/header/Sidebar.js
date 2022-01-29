import { useEffect, useState } from 'react';
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
import ContactIcon from "../../media/icon/EmailIcon";
import MenuIcon from "../../media/icon/MenuIcon";
import CloseIcon from "../../media/icon/CloseIcon";


export default function Sidebar(props) {
	const [headerOpen, setHeaderOpen] = useState(false);

	let handleHamburger = () => {
		setHeaderOpen(!headerOpen);
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
		<header className={`${styles.sidebar} ${headerOpen ? styles.showMenu : ""}`}>
			<div className={styles.sidebar__container}>
				<button className={styles.hamburger} onClick={handleHamburger}>
					{headerOpen ? <CloseIcon /> : <MenuIcon />}
				</button>
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
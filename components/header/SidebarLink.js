import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Header.module.scss";


export default function SidebarLink(props) {
	const router = useRouter();
	
	return (
		<li className={`${styles.element}`}>
			<a className={styles.link} href={props.link}>
				{props.icon}
				<span>{props.text}</span>
			</a>
		</li>
	);
}
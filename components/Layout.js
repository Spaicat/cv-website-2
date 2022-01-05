import Head from "next/head";
import Sidebar from "./header/Sidebar";
import styles from "../styles/Layout.module.scss";

function Layout({ children, title = "Thibault Trembleau" }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Ceci est mon site pour me connaitre un peu plus" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Sidebar />

			<main className={styles.main}>
				{children}
			</main>
		</div>
	);
}

export default Layout;

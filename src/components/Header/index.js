import styles from './header.module.css'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Header() {
    return (
        <div className={styles.header}>
            <GoChevronLeft className={styles.icon} />
            <h1>RibahDev /</h1>
            <GoChevronRight className={styles.icon} />
        </div>
    )
}
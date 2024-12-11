import styles from './header.module.css'
import { GoChevronLeft } from "react-icons/go";

export default function Header() {
    return (
        <div className={styles.header}>
            <h2>RibahDev</h2>
            <GoChevronLeft />

        </div>

    )
}
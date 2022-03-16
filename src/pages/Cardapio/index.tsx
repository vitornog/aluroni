import styles from "./cardapio.module.scss";
import {ReactComponent as Logo} from "assets/img/logo.svg"

export default function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
                <Logo />
                Aluroni
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do Código e da Massa!
                </div>
            </header>
        </main>
    )
}
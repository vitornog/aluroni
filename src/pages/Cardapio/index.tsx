import styles from "./cardapio.module.scss";
import {ReactComponent as Logo} from "assets/img/logo.svg"
import Buscador from "./Buscador";
import { useState } from "react";

export default function Cardapio(){
    
    const [busca, setBusca] = useState("");

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
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
            </section>
        </main>
    )
}
import react, {useContext} from "react";
import {LanguageContext} from "../../language/index.js";
import 'animate.css'
import styles from './index.module.less'

const Card = () => {
    const language = useContext(LanguageContext)
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.big}>{language.banner.bigTitle}</div>
            <div className={styles.small}>{language.banner.smallTitle}</div>
            <div className={styles.btn}>{language.banner.btn}</div>

        </div>
    )
}

export default Card
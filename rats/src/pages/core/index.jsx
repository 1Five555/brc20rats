import react, {useContext} from "react";
import {LanguageContext} from "../../language/index.js";
import styles from './index.module.less'

const Core = () => {
    const language = useContext(LanguageContext)
    return (
        <div className={styles.coreWrapper}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <div className={styles.contentWrapper}>
                    <div className={styles.small}>{language.core.small}</div>
                    <div className={styles.big}>{language.core.big}</div>
                    <div className={styles.content}>{language.core.content}</div>
                </div>
            </div>
        </div>
    )
}

export default Core
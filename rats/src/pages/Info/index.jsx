import react, {useContext} from "react";
import {LanguageContext} from "../../language/index.js";
import 'animate.css'
import styles from './index.module.less'
const Info = () => {
    const language = useContext(LanguageContext)
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.left}>
                <div className={styles.contentWrapper}>
                    <div className={styles.small}>{language.info.btc.small}</div>
                    <div className={styles.big}>{language.info.btc.big}</div>
                    <div className={styles.content}>{language.info.btc.content}</div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.small}>{language.info.rats.small}</div>
                    <div className={styles.big}>{language.info.rats.big}</div>
                    <div className={styles.content}>{language.info.rats.content}</div>
                </div>
            </div>
            <div className={styles.right}>
                <div>
                    <div className={styles.img} />
                </div>

            </div>
        </div>
    )
}
export default Info
import react,{useContext} from "react";
import {LanguageContext} from "../../language/index.js";
import styles from './index.module.less'

function Index() {
    const language=useContext(LanguageContext)
    return (
        <>
            <div className={styles.titleWrapper}>
                <div className={styles.logo}>
                    <div className={styles.img}></div>
                    <div className={styles.text}>Rats</div>
                </div>
                {
                    language.menu.map((name)=>{
                        return <div key={name} className={styles.link}>{name}</div>
                    })
                }
                {/*<div className={styles.link}>2</div>*/}
                {/*<div className={styles.link}>3</div>*/}
            </div>

        </>
    )
}

export default Index
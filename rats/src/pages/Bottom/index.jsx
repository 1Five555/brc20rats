
import react, {useContext} from "react";
import {LanguageContext} from "../../language/index.js";
import styles  from './index.module.less'
const Bottom = () => {
    const language = useContext(LanguageContext)
    const openLink =  (url)=>{
        window.open(url)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}></div>
            <div className={styles.square}>
                {
                    language.joinUs.map((item,idx)=>{
                        return  <div key={idx} className={styles.content}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.btn} onClick={()=>{openLink(item.url)}}>
                                {item.name}
                            </div>
                        </div>
                    })
                }
                {/*<div className={styles.content}>*/}
                {/*    <div className={styles.title}>加入Rats</div>*/}
                {/*    <div className={styles.btn}>*/}
                {/*        加入我们电报*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.content}>*/}
                {/*    <div className={styles.title}>加入Rats</div>*/}
                {/*    <div className={styles.btn}>*/}
                {/*        加入我们电报*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
 export default Bottom
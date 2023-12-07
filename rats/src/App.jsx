import './App.less'
import Head from "./pages/Head/index.jsx";
import Card from './pages/Card'
import styles from "./pages/Head/index.module.less";
import React, {useState, useEffect} from "react";

import {language, LanguageContext} from "./language/index.js";
import Info from "./pages/Info/index.jsx";
import Core from "./pages/core/index.jsx";
import CoinSwiper from "./pages/CoinSwiper/index.jsx";


function App() {
    const [lang, setLang] = useState('zh')
    useEffect(() => {
        console.log(lang)
    }, [lang])
    return (
        <>
            <div>
                <LanguageContext.Provider value={language[lang]}>

                    <Head></Head>
                    <div className={styles.languageWrapper}>
                        <div className={styles.language} onClick={() => {
                            lang === 'zh' ? setLang('en') : setLang('zh')
                        }}>{
                            lang === 'zh' ? 'English' : '中文'
                        }
                        </div>
                    </div>

                    <Card />
                    <Info />
                    <Core />
                    <CoinSwiper />
                </LanguageContext.Provider>
            </div>

        </>
    )
}

export default App

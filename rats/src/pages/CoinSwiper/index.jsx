import react, {useContext} from "react";
import {LanguageContext} from "../../language/index.js";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import {exchanges} from "./help.js";
// Import Swiper styles
import 'swiper/css';
import styles from './index.module.less'
import SwiperCard from "../../components/SwiperCard/index.jsx";

const CoinSwiper = () => {
    const language = useContext(LanguageContext)
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.big}>{language.coinSwiper.title}</div>
                <div className={styles.small}>{language.coinSwiper.content}</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.title}>{language.coinSwiper.name}</div>
                <div className={styles.swiper}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        direction="horizontal"
                        autoplay={{
                            delay: 1000,
                            stopOnLastSlide: false,
                            disableOnInteraction: false
                        }}
                        loop
                        effect="slide"  // 使用 "slide" 效果
                        speed={1000}    // 设置滑动速度，单位为毫秒
                        pagination={false}
                    >{
                        exchanges.map(item => {
                            return <SwiperSlide key={item.name}>
                                <SwiperCard icon={item.icon} name={item.name} back={item.back}/>
                            </SwiperSlide>
                        })
                    }
                        {/*<SwiperSlide>*/}
                        {/*    <SwiperCard />*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <SwiperCard />*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <SwiperCard />*/}
                        {/*</SwiperSlide>*/}
                        {/*<SwiperSlide>*/}
                        {/*    <SwiperCard />*/}
                        {/*</SwiperSlide>*/}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CoinSwiper
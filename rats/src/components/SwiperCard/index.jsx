import styles from './index.module.less'

const SwiperCard = ({icon, name, back}) => {
    const logoStyle = {
        backgroundImage: `url(${icon})`
    }
    const backStyle = {
        backgroundImage: `url(${back})`
    }
    return (
        <div className={styles.wrapper} style={backStyle}>
            <div className={styles.logo} style={logoStyle}></div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}
export default SwiperCard
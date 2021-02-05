import preloader from "../../../assets/images/loader.svg";
import style from "../../Users/Users.module.css";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt='' className={style.preloaderImg}/>
        </div>
    )
}

export default Preloader
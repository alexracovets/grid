import GridMap from "../Components/GridMap/GridMap";
import SideSection from "../Components/SideSection/SideSection";

import s from './Home.module.scss';
function Home() {

    return (
        <div className={s.home_wrapper}>
            <GridMap />
            <SideSection />
        </div>
    )
}

export default Home;
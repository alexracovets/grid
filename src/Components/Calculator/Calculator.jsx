
import useStoreGrid from "../../store/useStoreGrid";

import s from './Calculator.module.scss';
function Calculator() {
    const activeGrids = useStoreGrid(state => state.activeGrids);

    console.log(activeGrids)
    return (
        <div className={s.calculator}>
            <h3>Розрахунок вартості</h3>
        </div>
    )
}

export default Calculator

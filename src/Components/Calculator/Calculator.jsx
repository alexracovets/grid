
import { useEffect, useState } from "react";
import useStoreGrid from "../../store/useStoreGrid";

import s from './Calculator.module.scss';
function Calculator() {
    const activeGrids = useStoreGrid(state => state.activeGrids);
    const [price, setPrice] = useState(0);
    const [isFirst, setIsFirst] = useState(0);
    const [isSecond, setIsSecond] = useState(0);
    const [isThird, setIsThird] = useState(0);
    const [isFourd, setIsFourd] = useState(0);
    useEffect(() => {
        let newPrice = 0;
        let firstCount = 0;
        let secondCount = 0;
        let thirdCount = 0;
        let fourdCount = 0;
        activeGrids.map((grid) => {
            if (grid.section === 0) {
                newPrice += 100;
                firstCount++;
            } else if (grid.section === 1) {
                newPrice += 200;
                secondCount++;
            } else if (grid.section === 2) {
                newPrice += 300;
                thirdCount++;
            } else if (grid.section === 3) {
                newPrice += 500;
                fourdCount++;
            }
        })
        setPrice(newPrice);
        setIsFirst(firstCount)
        setIsSecond(secondCount)
        setIsThird(thirdCount)
        setIsFourd(fourdCount)
    }, [activeGrids])
    return (
        <div className={s.calculator}>
            <h3 className={s.name} >Розрахунок вартості:</h3>
            <div className={s.price}>{price}{' $'}</div>
            <h3 className={s.name} >Обрані Комірки:</h3>
            {isFirst ? <div className={s.grid_select}>Зелена комірка : {isFirst}</div> : null}
            {isSecond ? <div className={s.grid_select}>Жовта комірка : {isSecond}</div> : null}
            {isThird ? <div className={s.grid_select}>Червона комірка : {isThird}</div> : null}
            {isFourd ? <div className={s.grid_select}>Фіолетова комірка : {isFourd}</div> : null}
        </div>
    )
}

export default Calculator

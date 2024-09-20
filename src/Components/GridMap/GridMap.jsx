import { useEffect, useState } from 'react';

// import ChangeGridSystem from './ChangeGridSystem/ChangeGridSystem';
import GridItem from './GridItem/GridItem';

import s from './GridMap.module.scss';
function GridMap() {
    const [cells, setCells] = useState([]);
    const vertical = 35;
    const horisont = 46;

    // useEffect(() => {
    //     const savedCells = JSON.parse(localStorage.getItem('gridCells'));
    //     if (savedCells) {
    //         setCells(savedCells);
    //     } else {
    //         const initialCells = [];
    //         for (let i = vertical - 1; i >= 0; i--) {
    //             for (let j = 0; j < horisont; j++) {
    //                 initialCells.push({
    //                     x: j,
    //                     y: i,
    //                     price: 0,
    //                     color: '#ffffff',
    //                     isAvailable: true,
    //                     isSelected: false,
    //                     isClosed: false,
    //                 });
    //             }
    //         }
    //         setCells(initialCells);
    //     }
    // }, [vertical, horisont]);

    // // Функція для збереження комірок в LocalStorage
    // const saveCellsToStorage = (updatedCells) => {
    //     localStorage.setItem('gridCells', JSON.stringify(updatedCells));
    // };

    // // Обробник кліку по комірці для зміни ціни
    // const handleCellClick = (index) => {
    //     const updatedCells = cells.map((cell, i) =>
    //         i === index ? { ...cell, price: cell.price + 10 } : cell // Додаємо 10 до ціни для прикладу
    //     );
    //     setCells(updatedCells);
    //     saveCellsToStorage(updatedCells);
    // };

    useEffect(() => {
        fetch('/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                setCells(json);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    const changeGrid = (item) => {
        const index = cells.findIndex(cell => cell.x === item.x && cell.y === item.y);
        if (index !== -1) {
            const updatedCells = [...cells];
            if (updatedCells[index].isSelected) {
                updatedCells[index] = { ...updatedCells[index], isSelected: false };
            } else {
                updatedCells[index] = { ...updatedCells[index], isSelected: true };
            }
            setCells(updatedCells);
        }
    }
   
    return (
        <>
            <div className={s.grid_wrapper}>
                <div className={s.mask}>
                    <img src='./img/grid_mask/mask.png' />
                    <ul className={s.grids}>
                        {cells.map((grid, idx) => {
                            return (
                                <GridItem
                                    key={idx}
                                    width={`${100 / horisont}%`}
                                    height={`${100 / vertical}%`}
                                    click={changeGrid}
                                    grid={grid}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* <ChangeGridSystem cells={cells} /> */}
        </>
    )
}

export default GridMap;

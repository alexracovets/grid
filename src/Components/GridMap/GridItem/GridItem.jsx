import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useStoreGrid from "../../../store/useStoreGrid";

import s from '../GridMap.module.scss';
const GridItem = memo(({ height, width, click, grid }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [gridSection] = useState(grid.section === 0 ? s.first : grid.section === 1 ? s.second : grid.section === 2 ? s.third : grid.section === 3 ? s.fourd : s.transparent);
    const setActiveGrids = useStoreGrid(state => state.setActiveGrids);

    const clickHandler = () => {
        click(grid);
        setActiveGrids(grid);
    }

    useEffect(() => {
        setIsSelected(grid.isSelected);
    }, [grid])

    return (
        <li
            className={` 
            ${gridSection} 
            ${isSelected ? `${s.grid} ${s.active}` : s.grid}`}
            style={{ height, width }}
            onClick={clickHandler}
        >
        </li>
    );
});

GridItem.displayName = 'GridItem';

GridItem.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    click: PropTypes.func,
    grid: PropTypes.object
};

export default GridItem;

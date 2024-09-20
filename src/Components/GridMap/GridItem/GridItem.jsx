import { memo } from 'react';
import PropTypes from 'prop-types';

import s from '../GridMap.module.scss';

const GridItem = memo(({ height, width, click, grid }) => {
    return (
        <li
            className={` 
            ${grid.section === 0
                    ? s.first
                    : grid.section === 1
                        ? s.second
                        : grid.section === 2
                            ? s.third
                            : grid.section === 3
                                ? s.fourd
                                : s.transparent
                } 
            ${grid.isSelected ? `${s.grid} ${s.active}` : s.grid}`}
            style={{ height, width }}
            onClick={() => click(grid)}
        >
            {/* {`${grid.x} ${grid.y}`} */}
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

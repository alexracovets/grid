import PropTypes from 'prop-types';

function ChangeGridSystem({ cells }) {

    const logCellsToConsole = () => {
        console.log(JSON.stringify(cells, null, 2));
    };

    return (
        <button onClick={logCellsToConsole}>Вивести комірки в консоль</button>
    )
}

ChangeGridSystem.propTypes = {
    cells: PropTypes.array
};

export default ChangeGridSystem;

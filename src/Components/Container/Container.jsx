import PropTypes from 'prop-types';

import s from './Container.module.scss';
function Container({ children }) {

    return (
        <div className={s.container}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node
};

export default Container;

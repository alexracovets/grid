import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import s from './Header.module.scss';
function Header() {

    return (
        <header className={s.header}>
            <Container>
                <ul>
                    <li><Link to="/"> Мапа проекту</Link></li>
                    <li><Link to="/"> Про проект </Link></li>
                    <li><Link to="/"> Подарунки </Link></li>
                    <li><Link to="/"> О нас </Link></li>
                </ul>
            </Container>
        </header>
    )
}

export default Header;

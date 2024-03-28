import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import "./style.scss";
import MenuIcon from '../../assets/menu.png';

type HeaderProps = {
    title?: string,
    paragraph?: string
}

export const Header: FunctionComponent<HeaderProps> = ({ title, paragraph }) => {
    const [menuStatus, setMenuStatus] = React.useState(true);

    return (
        <section className='Header__wrapper'>
            <p className='H--title'>Schedules</p>
            {menuStatus ?
                <div className='H__menu' onClick={() => setMenuStatus(!menuStatus)}>
                    <img src={MenuIcon} />
                </div>
                :
                <div className='H__menu--search'>
                    <span>Search</span>
                    <span onClick={() => setMenuStatus(!menuStatus)}>X</span>
                </div>
            }

        </section>
    )
}
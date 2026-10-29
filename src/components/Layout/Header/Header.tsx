import TopNav from '../TopNav/TopNav';
import { useLocation } from 'react-router-dom';
import innerHeroData from '../../../data/innerHeroData';
import Nav from '../Nav/Nav';
import HomeHero from '../HomeHero/HomeHero';
import InnerPageHero from '../InnerPageHero/InnerPageHero';
import navItems from '../../../data/navItems';
import './Header.css'

const Header = () => {
    const { pathname } = useLocation();
    const currentHero = innerHeroData[pathname];
    return (
        <>
            <header>
                <TopNav />
                <Nav logo="/assets/img/Logo.png" navItems={navItems} />
                {pathname === "/" ? (
                    <HomeHero />
                ) : currentHero ? (
                    <InnerPageHero data={currentHero} />
                ) : null}
            </header>
        </>
    )
}

export default Header

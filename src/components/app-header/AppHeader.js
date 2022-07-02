import { Component } from "react";

import searchIcon from "../../resources/icons/search.svg";
import heartIcon from "../../resources/icons/heart.svg";
import packageIcon from "../../resources/icons/package.svg";
import profileIcon from "../../resources/icons/profile.svg";
import logoImg     from "../../resources/img/logoImg.png"; 
import "./appHeaders.scss";


class AppHeader extends Component {
    state = {
        isActiveHamburger: false,
        isActiveMenu: false, 
        zIndex: false
    }

    switchHamburger = () => {
        this.setState({
            isActiveHamburger: !this.state.isActiveHamburger,
            isActiveMenu: !this.state.isActiveMenu, 
            zIndex: !this.state.zIndex,
        });
    }
    
    setAsideRef = elem => {
        this.refAside =  elem;

    }

    hiddenMenu = (e) => {
      

        if(e.target !== this.refAside) {
            this.setState({
                isActiveHamburger: false, 
                isActiveMenu: false,
                zIndex: false
            })
        }
    }
    

  

    render() {
        const {isActiveHamburger, isActiveMenu, zIndex} = this.state;
        return (
            <header className="header">
                <div className="container">
                    <div className="header__menu">
                        <div className={`hamburger ${(isActiveHamburger) ? 'hamburger_active' : ""}`} 
                            onClick={this.switchHamburger} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="header__icons">
                            <div className="header__icons_search">
                                <img src={searchIcon} alt="searchIcon" />
                                <form className="header__icons_form">
                                    <input type="search" name="search" className="header__icons_form_searchInput" placeholder="Поиск" />
                                </form>

                            </div>

                            <div className="header__icons_otherIcons">
                                <img src={profileIcon} alt="profileIcon" />
                                <img src={heartIcon} alt="heartIcon" />
                                <img src={packageIcon} alt="packageIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="overlay" onClick={this.hiddenMenu} style={{"zIndex": (zIndex) ? 200 : -1}}>

                        <div className={`header__aside ${isActiveMenu ? 'header__aside_active' : ""}`} ref={(e) => this.setAsideRef(e)}>
                            <div className="header__aside_menu">
                                <div className="header__aside_img">
                                    <img src={logoImg} alt="logo img" />
                                </div>

                                <nav className="header__aside_nav">
                                    <ul className="header__aside_list">
                                        <li onClick={this.switchHamburger} ><a href="#fomen">Женщинам </a></li>
                                        <li onClick={this.switchHamburger} ><a href="#man">Мужчинам</a></li>
                                        <li onClick={this.switchHamburger} ><a href="#kids">Детям </a></li>
                                        <li onClick={this.switchHamburger} ><a href="#a">Обувь </a></li>
                                        <li onClick={this.switchHamburger} ><a href="#a">Аксессуары </a></li>
                                        <li onClick={this.switchHamburger} ><a href="#a">Большие размеры </a></li>
                                        <li onClick={this.switchHamburger} ><a href="#a">Дополнительно </a></li>
                                        <li onClick={this.switchHamburger} ><a href="#a">Акции </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}



export default AppHeader;
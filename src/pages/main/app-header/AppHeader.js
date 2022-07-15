import { Component } from "react";
import Fade from "react-reveal/Fade";
import searchIcon from "../../../resources/icons/search.svg";
import heartIcon from "../../../resources/icons/heart.svg";
import packageIcon from "../../../resources/icons/package.svg";
import profileIcon from "../../../resources/icons/profile.svg";
import logoImg from "../../../resources/img/logoImg.png";
import "./appHeaders.scss";

class AppHeader extends Component {
  state = {
    isActiveHamburger: false,
    isActiveMenu: false,
    zIndex: false,
    isSubHeaderActive1: false,
    isSubHeaderActive2: false,
    isSubHeaderActive3: false,
    isSubHeaderActive4: false,
    isSubHeaderActive5: false,
    isSubHeaderActive6: false,
    isSubHeaderActive7: false,
    isSubHeaderActive8: false,
  };

  switchHamburger = () => {
    this.setState({
      isActiveHamburger: !this.state.isActiveHamburger,
      isActiveMenu: !this.state.isActiveMenu,
      zIndex: !this.state.zIndex,
    });
  };

  setAsideRef = (elem) => {
    this.refAside = elem;
  };

  hiddenMenuOverlay = (e) => {
    if (e.target === this.refAside) {
      this.setState({
        isActiveHamburger: false,
        isActiveMenu: false,
        zIndex: false,
        isSubHeaderActive1: false,
        isSubHeaderActive2: false,
        isSubHeaderActive3: false,
        isSubHeaderActive4: false,
        isSubHeaderActive5: false,
        isSubHeaderActive6: false,
        isSubHeaderActive7: false,
        isSubHeaderActive8: false,
      });
    }
  };

  hiddenMenu = () => {
    this.setState({
      isActiveHamburger: false,
      isActiveMenu: false,
      zIndex: false,
      isSubHeaderActive1: false,
      isSubHeaderActive2: false,
      isSubHeaderActive3: false,
      isSubHeaderActive4: false,
      isSubHeaderActive5: false,
      isSubHeaderActive6: false,
      isSubHeaderActive7: false,
      isSubHeaderActive8: false,
    });
  };

  showSubHeader1 = () => {
    this.setState({
      isSubHeaderActive1: !this.state.isSubHeaderActive1,
      isSubHeaderActive2: false,
      isSubHeaderActive3: false,
      isSubHeaderActive4: false,
      isSubHeaderActive5: false,
      isSubHeaderActive6: false,
      isSubHeaderActive7: false,
      isSubHeaderActive8: false,
    });
  };
  showSubHeader2 = () => {
    this.setState({
      isSubHeaderActive2: !this.state.isSubHeaderActive2,
      isSubHeaderActive1: false,
      isSubHeaderActive3: false,
      isSubHeaderActive4: false,
      isSubHeaderActive5: false,
      isSubHeaderActive6: false,
      isSubHeaderActive7: false,
      isSubHeaderActive8: false,
    });
  };
  showSubHeader3 = () => {
    this.setState({
      isSubHeaderActive3: !this.state.isSubHeaderActive3,
    });
  };
  showSubHeader4 = () => {
    this.setState({
      isSubHeaderActive4: !this.state.isSubHeaderActive4,
    });
  };
  showSubHeader5 = () => {
    this.setState({
      isSubHeaderActive5: !this.state.isSubHeaderActive5,
    });
  };
  showSubHeader6 = () => {
    this.setState({
      isSubHeaderActive6: !this.state.isSubHeaderActive6,
    });
  };
  showSubHeader7 = () => {
    this.setState({
      isSubHeaderActive7: !this.state.isSubHeaderActive7,
    });
  };
  showSubHeader8 = () => {
    this.setState({
      isSubHeaderActive8: !this.state.isSubHeaderActive8,
    });
  };

  render() {
    const {
      isActiveHamburger,
      isActiveMenu,
      zIndex,
      isSubHeaderActive1,
      isSubHeaderActive2,
      isSubHeaderActive3,
      isSubHeaderActive4,
      isSubHeaderActive5,
      isSubHeaderActive6,
      isSubHeaderActive7,
      isSubHeaderActive8,
    } = this.state;
    return (
      <header className="header">
        <div className="container">
          <div className="header__menu">
            <div
              className={`hamburger ${
                isActiveHamburger ? "hamburger_active" : ""
              }`}
              onClick={this.switchHamburger}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="header__icons">
              <div className="header__icons_search">
                <img src={searchIcon} alt="searchIcon" />
                <form className="header__icons_form">
                  <input
                    type="search"
                    name="search"
                    className="header__icons_form_searchInput"
                    placeholder="Поиск"
                  />
                </form>
              </div>

              <div className="header__icons_otherIcons">
                <img src={profileIcon} alt="profileIcon" />
                <img src={heartIcon} alt="heartIcon" />
                <img src={packageIcon} alt="packageIcon" />
              </div>
            </div>
          </div>
          <div
            className="overlay"
            onClick={this.hiddenMenuOverlay}
            ref={(e) => this.setAsideRef(e)}
            style={{ zIndex: zIndex ? 200 : -1 }}
          >
            <div
              className={`header__aside ${
                isActiveMenu ? "header__aside_active" : ""
              }`}
            >
              <div className="header__aside_menu">
                <div className="header__aside_img">
                  <img src={logoImg} alt="logo img" />
                </div>

                {/**
                 * @param {TODO--show hide subMenu}
                 */}
                <nav className="header__aside_nav">
                  <ul className="header__aside_list">
                    <li>
                      <a
                        onClick={this.showSubHeader1}
                        href="#fomen"
                        className={`link ${
                          isSubHeaderActive1 ? "tagAHover" : null
                        }`}
                      >
                        Женщинам
                      </a>
                      <ul
                        className={`header__aside-hiddenMenu_list ${
                          isSubHeaderActive1 ? "active" : null
                        }`}
                      >
                        <Fade left opposite when={isSubHeaderActive1}>
                          <li onClick={this.hiddenMenu}>
                            <a href="#a">Майки</a>
                          </li>
                          <li>
                            <a href="#a">Костюмы</a>
                          </li>
                          <li>
                            <a href="#a">Брюки</a>
                          </li>
                          <li>
                            <a href="#a">Джинсы</a>
                          </li>
                          <li>
                            <a href="#a">Юбки</a>
                          </li>
                          <li>
                            <a href="#a">Шорты</a>
                          </li>
                          <li>
                            <a href="#a">Свитшоты, худи</a>
                          </li>
                          <li>
                            <a href="#a">Блузки и рубашки</a>
                          </li>
                          <li>
                            <a href="#a">Пиджаки и жакеты</a>
                          </li>
                          <li>
                            <a href="#a">Платья и сарафаны</a>
                          </li>
                          <li>
                            <a href="#a">Верхняя одежда</a>
                          </li>
                        </Fade>
                      </ul>
                    </li>
                    <li>
                      <a
                        onClick={this.showSubHeader2}
                        href="#man"
                        className={`link ${
                          isSubHeaderActive2 ? "tagAHover" : null
                        }`}
                      >
                        Мужчинам
                      </a>
                      <ul
                        className={`header__aside-hiddenMenu_list ${
                          isSubHeaderActive2 ? "active" : null
                        }`}
                      >
                        <Fade left opposite when={isSubHeaderActive2}>
                          <li onClick={this.hiddenMenu}>
                            <a href="#a">Майки</a>
                          </li>
                          <li>
                            <a href="#a">Костюмы</a>
                          </li>
                          <li>
                            <a href="#a">Брюки</a>
                          </li>
                          <li>
                            <a href="#a">Джинсы</a>
                          </li>

                          <li>
                            <a href="#a">Шорты</a>
                          </li>
                          <li>
                            <a href="#a">Свитшоты, худи</a>
                          </li>

                          <li>
                            <a href="#a">Пиджаки и жакеты</a>
                          </li>

                          <li>
                            <a href="#a">Верхняя одежда</a>
                          </li>
                        </Fade>
                      </ul>
                    </li>
                    <li>
                      <a href="#kids">Детям </a>
                    </li>
                    <li>
                      <a href="#a">Обувь </a>
                    </li>
                    <li>
                      <a href="#a">Аксессуары </a>
                    </li>
                    <li>
                      <a href="#a">Большие размеры </a>
                    </li>
                    <li>
                      <a href="#a">Дополнительно </a>
                    </li>
                    <li>
                      <a href="#a">Акции </a>
                    </li>
                  </ul>
                </nav>
                <div className="header__aside-hiddenMenu">
                  <nav className="header__aside-hiddenMenu_nav"></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;

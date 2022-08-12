import { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade"
import AppSignIn from "../../ModalWindows/SignIn/AppSignIn";
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
    signUp: false,
    signIn: false,
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

    });
  };

  showSubHeader1 = () => {
    this.setState({
      isSubHeaderActive1: !this.state.isSubHeaderActive1,
      isSubHeaderActive2: false,
      isSubHeaderActive3: false,
      isSubHeaderActive4: false,

    });
  };
  showSubHeader2 = () => {
    this.setState({
      isSubHeaderActive2: !this.state.isSubHeaderActive2,
      isSubHeaderActive1: false,
      isSubHeaderActive3: false,
      isSubHeaderActive4: false,

    });
  };
  showSubHeader3 = () => {
    this.setState({
      isSubHeaderActive3: !this.state.isSubHeaderActive3,
      isSubHeaderActive2: false,
      isSubHeaderActive1: false,
      isSubHeaderActive4: false,

    });
  };
  showSubHeader4 = () => {
    this.setState({
      isSubHeaderActive4: !this.state.isSubHeaderActive4,
      isSubHeaderActive2: false,
      isSubHeaderActive3: false,
      isSubHeaderActive1: false,

    });
  };

  signUpModel = () => {
    this.setState(({ signUp }) => ({
      signUp: !signUp,
    }))
  }

  signInModalShow = () => {
    this.setState(({ signIn }) => ({
      signIn: true,
    }));
  }

  signInModalHide = () => {
    this.setState({
      signIn: false,
    })
  }

  render() {
    const {
      isActiveHamburger,
      isActiveMenu,
      zIndex,
      isSubHeaderActive1,
      isSubHeaderActive2,
      isSubHeaderActive3,
      isSubHeaderActive4,
      signUp,
      signIn
    } = this.state;
    return (
      <>

        <AppSignIn signInModalHide={this.signInModalHide} singIn={signIn} />

        <header className="header">
          <div className="container">
            <div className="header__menu">
              <div
                className={`hamburger ${isActiveHamburger ? "hamburger_active" : ""
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
                  <img src={profileIcon} alt="profileIcon" onClick={this.signUpModel} />
                  <img src={heartIcon} alt="heartIcon" />
                  <img src={packageIcon} alt="packageIcon" />
                  <Fade left opposite when={signUp}>
                    <div className="header__icons-signIn" style={{ "display": `${signUp ? "block" : "none"}` }}>
                      <div className="header__icons-signIn__profile">
                        <div className="defaultCircleSigIn"></div>

                        <button className="btn btn-signIn" onClick={this.signInModalShow}>
                          Войти
                        </button>
                      </div>

                      <div className="header__icons-signIn__other">
                        <img src={packageIcon} alt="package icon" />

                        <div className="header__icons-signIn__text">
                          Корзина
                        </div>
                      </div>

                      <div className="header__icons-signIn__other" style={{ "borderBottom": "none" }}>
                        <img src={heartIcon} alt="package icon" />

                        <div className="header__icons-signIn__text">
                          Избранное
                        </div>
                      </div>
                    </div>
                  </Fade>
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
                className={`header__aside ${isActiveMenu ? "header__aside_active" : ""
                  }`}
              >
                <div className="header__aside_menu">
                  <div className="header__aside_img">
                    <img src={logoImg} alt="logo img" />
                  </div>

                  <nav className="header__aside_nav">
                    <ul className="header__aside_list">
                      <li>
                        <a
                          onClick={this.showSubHeader1}
                          href="#fomen"
                          className={`link ${isSubHeaderActive1 ? "tagAHover" : null
                            }`}
                        >
                          Женщинам
                        </a>
                        <ul
                          className={`header__aside-hiddenMenu_list ${isSubHeaderActive1 ? "active" : null
                            }`}
                        >
                          <Fade left opposite when={isSubHeaderActive1}>
                            <li onClick={this.hiddenMenu}>
                              <Link to="/filter/womensTShirt">Майки</Link>
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
                          className={`link ${isSubHeaderActive2 ? "tagAHover" : null
                            }`}
                        >
                          Мужчинам
                        </a>
                        <ul
                          className={`header__aside-hiddenMenu_list ${isSubHeaderActive2 ? "active" : null
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
                        <a
                          href="#kids"
                          onClick={this.showSubHeader3}
                          className={`link ${isSubHeaderActive3 ? "tagAHover" : null
                            }`}
                        >
                          Детям{" "}
                        </a>
                        <ul
                          className={`header__aside-hiddenMenu_list ${isSubHeaderActive3 ? "active" : null
                            }`}
                        >
                          <Fade left opposite when={isSubHeaderActive3}>
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
                              <a href="#a">Верхняя одежда</a>
                            </li>
                          </Fade>
                        </ul>
                      </li>
                      <li>
                        <a
                          href="#a"
                          onClick={this.showSubHeader4}
                          className={`link ${isSubHeaderActive4 ? "tagAHover" : null
                            }`}
                        >
                          Обувь{" "}
                        </a>
                        <ul
                          className={`header__aside-hiddenMenu_list ${isSubHeaderActive4 ? "active" : null
                            }`}
                        >
                          <Fade left opposite when={isSubHeaderActive4}>
                            <li onClick={this.hiddenMenu}>
                              <a href="#a">Кроссовки</a>
                            </li>
                            <li>
                              <a href="#a">Туфли</a>
                            </li>
                            <li>
                              <a href="#a">Кеды</a>
                            </li>
                          </Fade>
                        </ul>
                      </li>
                      <li>
                        <a href="#a">Аксессуары </a>
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
        <div className="header_bottom">
          <div className="header_bottom-icons">
            <div className="header_bottom-iconBlock">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4101 12.0068L12.9935 1.59012C12.8634 1.46078 12.6874 1.38818 12.5039 1.38818C12.3204 1.38818 12.1444 1.46078 12.0143 1.59012L1.59765 12.0068C1.48388 12.1396 1.42443 12.3105 1.43118 12.4853C1.43793 12.6601 1.51039 12.8259 1.63406 12.9495C1.75774 13.0732 1.92353 13.1457 2.09831 13.1524C2.27308 13.1592 2.44397 13.0997 2.57681 12.986L12.5004 3.06235L22.424 12.9929C22.5569 13.1067 22.7278 13.1661 22.9025 13.1594C23.0773 13.1526 23.2431 13.0802 23.3668 12.9565C23.4905 12.8328 23.5629 12.667 23.5697 12.4922C23.5764 12.3175 23.517 12.1466 23.4032 12.0137L23.4101 12.0068Z" fill="#FFFDF5" />
                <path d="M19.4448 22.2224H15.9725V15.2779H9.0281V22.2224H5.55588V12.5002L4.16699 13.8891V22.2224C4.16699 22.5907 4.31332 22.944 4.57379 23.2045C4.83426 23.4649 5.18752 23.6113 5.55588 23.6113H10.417V16.6668H14.5837V23.6113H19.4448C19.8131 23.6113 20.1664 23.4649 20.4269 23.2045C20.6873 22.944 20.8337 22.5907 20.8337 22.2224V13.7224L19.4448 12.3335V22.2224Z" fill="#FFFDF5" />
              </svg>

            </div>

            <div className="header_bottom-iconBlock">
              <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 20.5209C11.3465 20.5204 11.1976 20.4691 11.0763 20.3751C7.21523 17.3751 4.5555 14.7917 2.69439 12.2431C0.319393 8.98616 -0.222274 5.97922 1.08328 3.30561C2.01384 1.39589 4.68745 -0.166614 7.81245 0.743108C9.30241 1.17348 10.6024 2.09643 11.5 3.36116C12.3975 2.09643 13.6975 1.17348 15.1874 0.743108C18.3055 -0.152725 20.9861 1.39589 21.9166 3.30561C23.2222 5.97922 22.6805 8.98616 20.3055 12.2431C18.4444 14.7917 15.7847 17.3751 11.9236 20.3751C11.8023 20.4691 11.6534 20.5204 11.5 20.5209ZM6.03467 1.87505C5.2911 1.84611 4.55368 2.02022 3.90158 2.3787C3.24947 2.73717 2.70731 3.26647 2.33328 3.90977C1.25689 6.11811 1.743 8.57644 3.81939 11.4167C6.02604 14.263 8.60996 16.7955 11.5 18.9445C14.3895 16.7976 16.9734 14.2674 19.1805 11.4237C21.2638 8.57644 21.743 6.11811 20.6666 3.91672C19.9722 2.52783 17.8888 1.42366 15.5694 2.07644C14.8257 2.29623 14.1362 2.6693 13.5454 3.17163C12.9545 3.67396 12.4754 4.29443 12.1388 4.99311C12.0865 5.12048 11.9975 5.22942 11.8831 5.30608C11.7688 5.38275 11.6342 5.42369 11.4965 5.42369C11.3588 5.42369 11.2242 5.38275 11.1098 5.30608C10.9954 5.22942 10.9064 5.12048 10.8541 4.99311C10.5201 4.29268 10.0418 3.67077 9.45057 3.16812C8.85936 2.66548 8.1686 2.29345 7.42356 2.07644C6.97215 1.94533 6.50473 1.87755 6.03467 1.87505Z" fill="#FFFDF5" />
              </svg>
            </div>

            <div className="header_bottom-iconBlock">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4998 11.8056C13.4612 11.8056 14.4011 11.5205 15.2005 10.9864C15.9999 10.4522 16.6229 9.69301 16.9909 8.80475C17.3588 7.9165 17.4551 6.9391 17.2675 5.99613C17.0799 5.05317 16.6169 4.187 15.9371 3.50716C15.2573 2.82732 14.3911 2.36435 13.4481 2.17678C12.5052 1.98921 11.5278 2.08548 10.6395 2.45341C9.75126 2.82133 8.99206 3.44439 8.45792 4.2438C7.92377 5.0432 7.63867 5.98305 7.63867 6.94449C7.63867 8.23373 8.15082 9.47018 9.06246 10.3818C9.97409 11.2934 11.2105 11.8056 12.4998 11.8056ZM12.4998 3.47227C13.1865 3.47227 13.8578 3.67591 14.4288 4.05744C14.9999 4.43897 15.4449 4.98126 15.7077 5.61573C15.9705 6.25019 16.0393 6.94834 15.9053 7.62188C15.7713 8.29543 15.4406 8.91412 14.955 9.39972C14.4694 9.88532 13.8507 10.216 13.1772 10.35C12.5036 10.484 11.8055 10.4152 11.171 10.1524C10.5366 9.8896 9.99427 9.44456 9.61274 8.87355C9.2312 8.30255 9.02756 7.63123 9.02756 6.94449C9.02756 6.0236 9.39338 5.14042 10.0446 4.48926C10.6957 3.83809 11.5789 3.47227 12.4998 3.47227Z" fill="#FFFDF5" />
                <path d="M21.1592 16.9236C20.0455 15.7465 18.7035 14.8089 17.2151 14.1681C15.7268 13.5274 14.1234 13.1969 12.5029 13.1969C10.8825 13.1969 9.27911 13.5274 7.79075 14.1681C6.30239 14.8089 4.96036 15.7465 3.84668 16.9236C3.60523 17.1815 3.47113 17.5217 3.47168 17.8749V21.5277C3.47168 21.8961 3.61801 22.2493 3.87848 22.5098C4.13894 22.7703 4.49221 22.9166 4.86057 22.9166H20.1383C20.5067 22.9166 20.86 22.7703 21.1204 22.5098C21.3809 22.2493 21.5272 21.8961 21.5272 21.5277V17.8749C21.5297 17.5226 21.3981 17.1825 21.1592 16.9236ZM20.1383 21.5277H4.86057V17.868C5.84476 16.8317 7.02952 16.0064 8.34276 15.4425C9.65601 14.8786 11.0703 14.5878 12.4995 14.5878C13.9287 14.5878 15.3429 14.8786 16.6562 15.4425C17.9694 16.0064 19.1542 16.8317 20.1383 17.868V21.5277Z" fill="#FFFDF5" />
              </svg>
            </div>


            <div className="header_bottom-iconBlock">
              <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3617 7.33331V5.28469C15.3617 4.64632 15.2359 4.01421 14.9916 3.42443C14.7473 2.83465 14.3893 2.29877 13.9379 1.84737C13.4865 1.39597 12.9506 1.03791 12.3608 0.793614C11.771 0.54932 11.1389 0.423584 10.5005 0.423584C9.86217 0.423584 9.23005 0.54932 8.64027 0.793614C8.0505 1.03791 7.51461 1.39597 7.06322 1.84737C6.61182 2.29877 6.25375 2.83465 6.00946 3.42443C5.76517 4.01421 5.63943 4.64632 5.63943 5.28469V10.1458C5.63943 10.33 5.7126 10.5066 5.84283 10.6369C5.97306 10.7671 6.1497 10.8403 6.33388 10.8403C6.51805 10.8403 6.69469 10.7671 6.82492 10.6369C6.95515 10.5066 7.02832 10.33 7.02832 10.1458V8.72219H12.5839V7.33331H7.02832V5.28469C7.02832 4.3638 7.39414 3.48063 8.04531 2.82946C8.69648 2.1783 9.57965 1.81247 10.5005 1.81247C11.4214 1.81247 12.3046 2.1783 12.9558 2.82946C13.6069 3.48063 13.9728 4.3638 13.9728 5.28469V10.1111C13.9728 10.2953 14.0459 10.4719 14.1762 10.6021C14.3064 10.7324 14.483 10.8055 14.6672 10.8055C14.8514 10.8055 15.028 10.7324 15.1583 10.6021C15.2885 10.4719 15.3617 10.2953 15.3617 10.1111V8.72219H18.8339V21.2222H2.16721V8.72219H4.25054V7.33331H0.77832V21.2847C0.77832 21.6365 0.918064 21.9738 1.16681 22.2226C1.41556 22.4713 1.75293 22.6111 2.10471 22.6111H18.8964C19.2482 22.6111 19.5855 22.4713 19.8343 22.2226C20.083 21.9738 20.2228 21.6365 20.2228 21.2847V7.33331H15.3617Z" fill="#FFFDF5" />
              </svg>


            </div>

            <div className="header_bottom-iconBlock">
              <div
                className={`hamburger ${isActiveHamburger ? "hamburger_active" : ""
                  }`}
                onClick={this.switchHamburger}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default AppHeader;

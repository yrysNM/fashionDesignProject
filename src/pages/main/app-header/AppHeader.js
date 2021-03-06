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
    signUp: false,
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

  render() {
    const {
      isActiveHamburger,
      isActiveMenu,
      zIndex,
      isSubHeaderActive1,
      isSubHeaderActive2,
      isSubHeaderActive3,
      isSubHeaderActive4,
      signUp
    } = this.state;
    return (
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
                    placeholder="??????????"
                  />
                </form>
              </div>

              <div className="header__icons_otherIcons">
                <img src={profileIcon} alt="profileIcon" onClick={this.signUpModel} />
                <img src={heartIcon} alt="heartIcon" />
                <img src={packageIcon} alt="packageIcon" />
                <Fade left opposite when={signUp}>
                  <div className="header__icons-signIn">
                    <div className="header__icons-signIn__profile">
                      <div className="defaultCircleSigIn"></div>

                      <button className="btn btn-signIn">
                        ??????????
                      </button>
                    </div>

                    <div className="header__icons-signIn__other">
                      <img src={packageIcon} alt="package icon" />

                      <div className="header__icons-signIn__text">
                        ??????????????
                      </div>
                    </div>

                    <div className="header__icons-signIn__other" style={{ "borderBottom": "none" }}>
                      <img src={heartIcon} alt="package icon" />

                      <div className="header__icons-signIn__text">
                        ??????????????????
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
                        ????????????????
                      </a>
                      <ul
                        className={`header__aside-hiddenMenu_list ${isSubHeaderActive1 ? "active" : null
                          }`}
                      >
                        <Fade left opposite when={isSubHeaderActive1}>
                          <li onClick={this.hiddenMenu}>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">????????????</a>
                          </li>
                          <li>
                            <a href="#a">????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">????????????????, ????????</a>
                          </li>
                          <li>
                            <a href="#a">???????????? ?? ??????????????</a>
                          </li>
                          <li>
                            <a href="#a">?????????????? ?? ????????????</a>
                          </li>
                          <li>
                            <a href="#a">???????????? ?? ????????????????</a>
                          </li>
                          <li>
                            <a href="#a">?????????????? ????????????</a>
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
                        ????????????????
                      </a>
                      <ul
                        className={`header__aside-hiddenMenu_list ${isSubHeaderActive2 ? "active" : null
                          }`}
                      >
                        <Fade left opposite when={isSubHeaderActive2}>
                          <li onClick={this.hiddenMenu}>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">????????????</a>
                          </li>

                          <li>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">????????????????, ????????</a>
                          </li>

                          <li>
                            <a href="#a">?????????????? ?? ????????????</a>
                          </li>

                          <li>
                            <a href="#a">?????????????? ????????????</a>
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
                        ??????????{" "}
                      </a>
                      <ul
                        className={`header__aside-hiddenMenu_list ${isSubHeaderActive3 ? "active" : null
                          }`}
                      >
                        <Fade left opposite when={isSubHeaderActive3}>
                          <li onClick={this.hiddenMenu}>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">????????????</a>
                          </li>

                          <li>
                            <a href="#a">??????????</a>
                          </li>

                          <li>
                            <a href="#a">?????????????? ????????????</a>
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
                        ??????????{" "}
                      </a>
                      <ul
                        className={`header__aside-hiddenMenu_list ${isSubHeaderActive4 ? "active" : null
                          }`}
                      >
                        <Fade left opposite when={isSubHeaderActive4}>
                          <li onClick={this.hiddenMenu}>
                            <a href="#a">??????????????????</a>
                          </li>
                          <li>
                            <a href="#a">??????????</a>
                          </li>
                          <li>
                            <a href="#a">????????</a>
                          </li>
                        </Fade>
                      </ul>
                    </li>
                    <li>
                      <a href="#a">???????????????????? </a>
                    </li>
                    <li>
                      <a href="#a">?????????????????????????? </a>
                    </li>
                    <li>
                      <a href="#a">?????????? </a>
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

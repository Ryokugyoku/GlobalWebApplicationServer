import React, { Component } from 'react';
// 作ったローカライズを出力するためのライブラリ
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';
import { withTranslation } from "react-i18next";
export class NavMenu extends Component {

  static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }
  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }
    render() {
        const { t, i18n } = this.props;
        console.log(i18n);
        return (
          <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
              <NavbarBrand tag={Link} to="/">GlobalWebApplicationServer</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">{t('Login')}</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                  </NavItem>
                  <LoginMenu>
                  </LoginMenu>
                </ul>
              </Collapse>
          </Navbar>
      </header>
    );
  }
}
//withTranslationはデフォルトでtranslationの名前空間をとってくるため、第一引数の（）は空白でも大丈夫
export default withTranslation()(NavMenu); 
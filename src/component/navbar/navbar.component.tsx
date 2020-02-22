import * as React from "react";
import { ReactNode } from "react";
import { NavLink, Switch, BrowserRouter } from "react-router-dom";

import "../../styles/main.scss";

import { AppComponent } from "../appComponent/appComponent.component";

export class Navbar extends AppComponent {
  public render(): ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          <nav className="nav">
            <NavLink to="/" exact className="nav-link" activeClassName="active">Index</NavLink>
            <NavLink to="/page2" exact className="nav-link" activeClassName="active">Page2</NavLink>
          </nav>
        </Switch>
      </BrowserRouter>
    );
  }
}

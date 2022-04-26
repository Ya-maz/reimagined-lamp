import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Nav, NavItem, NavLink} from "reactstrap";

import "./../styles/loginFormTabs.scss";
import { LoginFormTabPanels } from "./LoginFormTabPanel";

export const LoginFormTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const {t} = useTranslation();
  return (
    <div>
      <Nav tabs justified className="nav-custom nav-tabs">
        <NavItem
          className={`${activeTab == 1 ? "activeTab" : ""} nav-item-custom`}
        >
          <NavLink
            className="nav-link-custom"
            onClick={setActiveTab.bind(null, 1)}
          >
            {t("form.tab-phone")}
          </NavLink>
        </NavItem>
        <NavItem
          className={`${activeTab == 2 ? "activeTab" : ""} nav-item-custom`}
        >
          <NavLink
            className="nav-link-custom"
            onClick={setActiveTab.bind(null, 2)}
          >
            {t("form.tab-ID")}
          </NavLink>
        </NavItem>
      </Nav>
      <LoginFormTabPanels activeTab={activeTab} />
    </div>
  );
};

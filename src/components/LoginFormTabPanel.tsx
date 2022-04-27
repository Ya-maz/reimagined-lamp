import React from "react";
import {TabContent, TabPane} from "reactstrap";
import {TabPanelContentPhone} from "./TabPanelContentPhone";

interface ILoginFormTabPanelsProps {
  activeTab: number;
}

export const LoginFormTabPanels = ({activeTab}: ILoginFormTabPanelsProps) => {
  return (
    <TabContent activeTab={activeTab} className="">
      <TabPane tabId={1}>
        <TabPanelContentPhone />
      </TabPane>

      <TabPane tabId={2}>Tab 2 Content</TabPane>
    </TabContent>
  );
};

import React from "react";
import { TabContent, TabPane } from "reactstrap";

interface ILoginFormTabPanelsProps { 
  activeTab:number
}

export const LoginFormTabPanels = ({ activeTab }:ILoginFormTabPanelsProps) => {
  return (
    <TabContent activeTab={activeTab} className="mt-3">
      <TabPane tabId={1}>
        
      </TabPane>





      <TabPane tabId={2}>Tab 2 Content</TabPane>
    </TabContent>
  );
};

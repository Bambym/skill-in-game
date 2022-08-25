import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { TabsRoutes } from "./tabsConfig";
import "../../css/search.css"

const Search = ({uid}) => {
  console.log(uid)
  const [activeTab, setActiveTab] = useState("0");
  return (
    
      <div className="bgSearch">
        <div className="searchContent">
          <Nav tabs>
            {TabsRoutes.map((tab, index) => {
              return (
                <NavItem>
                  <NavLink
                    className={activeTab === index.toString() ? "active" : ""}
                    onClick={() => setActiveTab(`${index}`)}
                    uid={uid}

                    
                  >
                    <div className="itemNav" style={{cursor:"pointer"}}><img src={tab.icon}/> {tab.tabTitle}</div>
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>

          <TabContent activeTab={activeTab}>
            {TabsRoutes.map((tab, index) => {
              return <TabPane tabId={"" + index}>{tab.component}</TabPane>;
            })}
          </TabContent>
        </div>
      </div>
    
  );
};

export default Search;

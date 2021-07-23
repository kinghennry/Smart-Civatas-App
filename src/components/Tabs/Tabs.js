import React, { useState } from "react";
import CenterInfo from "../Center/CenterInfo";
import tabs from "../../data/tabs/tabs";
import "./tabs.css";

const Tabs = () => {
  const [tables, setTables] = useState(tabs);
  const [value, setValue] = useState(0);
  const { id, index, button, lists } = tabs[value];
  //   check out the rest api countries project for the dynamic rendering of this list
  return (
    <section
      style={{ background: "rgb(248, 250, 255)", padding: "50px 0 100px " }}
    >
      <div className="container">
        <CenterInfo text="Membership Plans" />
        <div
          className="tabs"
          style={{
            background: "rgb(255, 255, 255)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div className="tabs__btn">
            {tabs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`tab__btn ${
                    index === value && "tabs__btn-active"
                  }`}
                >
                  {item.button}
                </button>
              );
            })}
          </div>

          <ul>
            {lists.map((single, key) => (
              <li style={{ paddingBottom: "22px", fontSize: "14px" }}>
                {single.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tabs;

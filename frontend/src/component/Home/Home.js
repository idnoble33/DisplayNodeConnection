import React from "react";
import GetNodeTitles from "../../container/GetNode/GetNode";
import NodeInfoData from "../../container/NodeInfoData/NodeInfoData";

import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.nodes}>
      <div>
        <GetNodeTitles />
      </div>
      <NodeInfoData />
    </div>
  );
}
export default Home;

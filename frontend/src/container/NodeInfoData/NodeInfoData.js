import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./NodeInfoData.module.css";

class NodeInfoData extends Component {
  renderNodesInfo = (nodeInfo) =>
    nodeInfo &&
    nodeInfo.getNodeInfoData &&
    nodeInfo.getNodeInfoData instanceof Array
      ? nodeInfo.getNodeInfoData.map((nodeI) => {
          return (
            <li key={nodeI.id}>
              <ul>
                {nodeI.content.map((c, index) => {
                  return (
                    <li key={index}>
                      {c.type === "image" ? (
                        <img src={c.url} alt="type" width="175" />
                      ) : (
                        c.body
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })
      : null;
  render() {
    let nodeInfo = this.props.node;
    return (
      <div className={classes.renderNode}>
        <h3>Content Node Info</h3>
        <ul>{this.renderNodesInfo(nodeInfo)}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("node Info Data", state);
  return {
    node: state.node,
  };
};

export default connect(mapStateToProps)(NodeInfoData);

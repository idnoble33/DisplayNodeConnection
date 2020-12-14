import React, { Component } from "react";
import { connect } from "react-redux";
import { getNode, NodeInfo, SearchByNode } from "../../store/actions";
import Search from "../../container/Search/Search";
import GetVariables from "../GetVariables/GetVariables";
import classes from "./GetNode.module.css";

class GetNode extends Component {
  componentDidMount() {
    this.props.dispatch(getNode());
  }

  getNodeDetails = (node) => {
    this.props.dispatch(NodeInfo(node.id));
  };

  renderNodes = (nodes) => {
    let searchData =
      nodes && nodes.searchNode && nodes.searchNode instanceof Array
        ? nodes.searchNode
        : [];
    let searchDataIds = searchData.map((x) => x.id);
    let nodesData =
      nodes && nodes.getNodeData && nodes.getNodeData instanceof Array
        ? nodes.getNodeData
        : [];
    //Using search filter
    // nodesData = nodesData.filter(x => searchDataIds.includes(x.id));
    return nodesData
      ? nodesData.map((node) => {
          if (node && node[""] && node["connections"] instanceof Array) {
            return (
              <li
                key={node.id}
                className={
                  searchDataIds.includes(node.id) ? classes.lightblue : ""
                }
                onClick={() => this.props.getNode(node)}
              >
                {node.title}
                <li>
                  {node.connections.map((nodeChild) => (
                    <li key={nodeChild.id}>{nodeChild.title}</li>
                  ))}
                </li>
              </li>
            );
          } else {
            return (
              <li
                key={node.id}
                onClick={() => this.getNodeDetails(node)}
                className={
                  searchDataIds.includes(node.id) ? classes.lightblue : ""
                }
              >
                {node.title}
              </li>
            );
          }
        })
      : null;
  };
  renderSearchNode = (event) => {
    this.props.dispatch(SearchByNode(event.target.value));
  };
  render() {
    let nodes = this.props.node;
    return (
      <div className={classes.node}>
        <Search onChange={this.renderSearchNode} />
        <h2>List of Node Title</h2>
        <ul>{this.renderNodes(nodes)}</ul>
        <GetVariables />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    node: state.node,
  };
};

export default connect(mapStateToProps)(GetNode);

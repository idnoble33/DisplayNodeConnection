import React, { Component } from "react";
import { connect } from "react-redux";
import { GetVariableData } from "../../store/actions";
import "../GetVariables/Variables.css";


class GetVariables extends Component {
  componentDidMount() {
    this.props.dispatch(GetVariableData());
  }
  render() {
    const VariableInfos = this.props.node;
    console.log("VariableInfos", VariableInfos);
    return (
      <div>
        {VariableInfos && VariableInfos.VariableDatas
          ? VariableInfos.VariableDatas.map((varInfo) => {
              return (
                <div key={varInfo.id}>
                  <div className="variable">{varInfo.name}</div>
                  <div className="variable">{varInfo.scope}</div>
                </div>
              );
            })
          : console.log("No VariableDatas exist")}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("this.props variable Datas", state);
  return {
    node: state.node,
  };
};
export default connect(mapStateToProps)(GetVariables);

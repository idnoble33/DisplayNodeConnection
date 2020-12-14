import * as actionTypes from '../actions/actionTypes';

let initialState = {
    nodesTitle: []
}
const nodeReducer = (state = initialState, action)  => {
    switch(action.type){

      case actionTypes.GET_NODE:
          return {
              ...state,
              getNodeData : action.payload
          }
          case actionTypes.NODE_INFO:
            return {
                ...state,
                getNodeInfoData : action.payload
            }
            case actionTypes.SEARCH_BY_NODE:
                return {
                    ...state,
                    searchNode : action.payload
                }
            case actionTypes.GET_VARIABLE_DATA:
                return {
                    ...state,
                    VariableDatas: action.payload
                }
        default:
            return state;
    }
    
}
export default nodeReducer;
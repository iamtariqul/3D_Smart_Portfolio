import { browserName, isMobile } from "react-device-detect";
import * as actionTypes from "../actions";

const intialState = {
  qualitySet: 0,
  qualityChange: false,
  qualityList: [
    
    {
      lang: "en",
      list: [{ varName: "low" }, { varName: "medium" }, { varName: "high" }],
    },
  ],
  qualityBottomMenu: [
   
    {
      lang: "en",
      varName: "set visual effects",
    },
  ],
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.QualityDetect:
      if (!isMobile && browserName === "Chrome") {
        return {
          ...state,
          qualitySet: 1,
        };
      } else {
        return state;
      }

    case actionTypes.QualityChange:
      if (state.qualitySet !== action.quality) {
        return {
          ...state,

          qualitySet: action.quality,
          qualityChange: true,
        };
      } else {
        return state;
      }

    case actionTypes.QualityChangeNotification:
      return {
        ...state,
        qualityChange: false,
      };

    default:
      return state;
  }
};

export default reducer;

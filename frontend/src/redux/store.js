import {
    configureStore,
    combineReducers,
    applyMiddleware,
} from "@reduxjs/toolkit";
import {
    getStudentDetailsReducer,
    deleteStudentReducer,
} from "./reducers/studentReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducer = combineReducers({
    getStudentDetails: getStudentDetailsReducer,
    deleteStudent: deleteStudentReducer,
});

const middleware = [thunk];

const store = configureStore(
    { reducer },
    null,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

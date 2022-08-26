import {
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAIL,
    GET_STUDENT_DETAILS_REQUEST,
    GET_STUDENT_DETAILS_SUCCESS,
    GET_STUDENT_DETAILS_FAIL,
} from "../constants/studentConstant";

export const getStudentDetailsReducer = (state = { data: {} }, action) => {
    switch (action.type) {
        case GET_STUDENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_STUDENT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_STUDENT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        default:
            return state;
    }
};

export const deleteStudentReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_STUDENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_STUDENT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_STUDENT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        default:
            return state;
    }
};

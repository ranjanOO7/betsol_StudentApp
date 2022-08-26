import {
    GET_STUDENT_DETAILS_REQUEST,
    GET_STUDENT_DETAILS_SUCCESS,
    GET_STUDENT_DETAILS_FAIL,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAIL,
} from "../constants/studentConstant";
import axios from "axios";

export const getStudentDetails = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_STUDENT_DETAILS_REQUEST });
        const data = await axios.get("http://localhost:8080/student");
        console.log(data);
        dispatch({ type: GET_STUDENT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_STUDENT_DETAILS_FAIL,
            payload: error.message,
        });
    }
};

export const deleteStudent =
    ({ usn }) =>
    async (dispatch, getState) => {
        try {
            dispatch({ type: DELETE_STUDENT_REQUEST });
            const { data } = await axios.delete(
                "http://localhost:8080/student",
                { usn }
            );
            console.log(data);
            dispatch({ type: DELETE_STUDENT_SUCCESS, payload: data });
        } catch (error) {
            console.log(error);
            dispatch({
                type: DELETE_STUDENT_FAIL,
                payload: error,
            });
        }
    };

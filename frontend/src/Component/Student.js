import React, { Fragment } from "react";
import {} from "antd";

function deleteStudent(id, e) {
    // axios.delete(`https://localhost:3000/${usn}`)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     const students = this.state.students.filter(item => item.usn !== usn);
    //     this.setState({ students });
    //   })
}

function StudentDetails(props) {
    return (
        <div className="post bg-white p-1 my-1">
            <h4>{props.name}</h4>
            <p className="styleDetails">USN = {props.usn}</p>
            <p className="styleDetails">EMail = {props.email}</p>
            <p className="styleDetails">Branch = {props.branch}</p>
            <p className="styleDetails">CGPA = {props.cgpa}</p>
            <div>
                <p className="my-1">Delete Student</p>
                <>
                    {!props.auth.loading &&
                        props.usn === props.auth.student.usn && (
                            <button
                                onClick={() => deleteStudent(props.usn)}
                                type="button"
                                className="btn btn-danger"
                            >
                                <i className="fas fa-times" />
                            </button>
                        )}
                </>
            </div>
        </div>
    );
}

export default class Student extends React.Component {
    render() {
        return (
            <div style={{ width: this.props.width + "px" }}>
                <div className="styleStudent">
                    <StudentDetails
                        name={this.props.name}
                        usn={this.props.usn}
                        email={this.props.email}
                        branch={this.props.branch}
                        cgpa={this.props.cgpa}
                    />
                </div>
            </div>
        );
    }
}

import { Card } from 'antd';
import { axios } from 'axios';
import React, { Fragment } from 'react';



function deleteStudent(usn, e){  
    axios.delete(`https://localhost:3000/${usn}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
        const students = this.state.students.filter(item => item.usn !== usn);  
        this.setState({ students });  
    })
}



export default class Student extends React.Component {
    render(){
        return (
            <div className="site-card-wrapper" >
              <Card style={{width: 300}}>
                  <p>Student Name = {this.props.name}</p>
                  <p>USN = {this.props.usn}</p>
                  <p>Mail = {this.props.email}</p>
                  <p>Branch = {this.props.branch}</p>
                  <p>CGPA = {this.props.cgpa}</p>
                    <p className="my-1">Delete Student</p>
                  <Fragment>
                  {!this.props.auth.loading && this.props.usn === this.props.auth.student.usn && (
                      <button
                      onClick={() => deleteStudent(this.props.usn)}
                      type="button"
                      className="btn btn-danger"
                      >
                      <i className="fas fa-times" />
                      </button>
                  )}
                  </Fragment>
              </Card>
            </div>
        );
    }
}



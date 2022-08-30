import { Card } from 'antd';
//import { axios } from 'axios';
import React from 'react';
import './Student.css';
import avatar from '../images/img_avatar.png';



// function deleteStudent(usn, e){  
//     axios.delete(`https://localhost:3000/${usn}`)  
//       .then(res => {  
//         console.log(res);  
//         console.log(res.data);  
//         const students = this.state.students.filter(item => item.usn !== usn);  
//         this.setState({ students });  
//     })
// }



export default class Student extends React.Component {
    render(){
        return (
              <Card className="card" style={{width: 300}}>
                  <img src={avatar} alt="Avatar" style={{width:"100%"}} />
                  <div class="container">
                  <p>Student Name = {this.props.student.name}</p>
                  <p>USN = {this.props.student.usn}</p>
                  <p>Mail = {this.props.student.email}</p>
                  <p>Branch = {this.props.student.branch}</p>
                  <p>CGPA = {this.props.student.cgpa}</p>
                    <p className="my-1">Delete Student</p>
                </div>
                  {/* <Fragment>
                  {!this.props.auth.loading && this.props.usn === this.props.auth.student.usn && (
                      <button
                      onClick={() => deleteStudent(this.props.usn)}
                      type="button"
                      className="btn btn-danger"
                      >
                      <i className="fas fa-times" />
                      </button>
                  )}
                  </Fragment> */}
              </Card>
        );
    }
}



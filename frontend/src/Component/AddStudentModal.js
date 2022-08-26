import { React, Component } from "react";
import { Form, Modal, Button, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
    getStudentDetails,
    deleteStudent,
} from "../redux/actions/studentAction";

class Modal1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usnState: "",
            fnameState: "",
            lnameState: "",
            emailState: "",
            branchState: "",
        };
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel(this);
    }

    showModal() {
        this.setState({
            loading: true,
        });
    }
    handleOk() {
        this.setState({
            loading: false,
        });
    }
    handleCancel() {
        this.setState({
            loading: false,
        });
    }

    // componentDidMount() {
    //     this.props.deleteStudent({ id: 5, fname: "ABC" });
    // }

    render() {
        return (
            <div className="App">
                <Button
                    type="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        this.showModal();
                    }}
                >
                    Add Studnet
                </Button>

                <Modal
                    title="Add student"
                    visible={this.state.loading}
                    onOk={() => {
                        this.handleOk();
                    }}
                >
                    <Form>
                        <Form.Item label="USN" name="usn">
                            <Input
                                placeholder="USN"
                                onChange={(event) => {
                                    this.setState({
                                        usnState: event.target.value,
                                    });
                                }}
                            ></Input>{" "}
                            {/* ()=>{console.log(this.state.usnState)} */}
                        </Form.Item>

                        <Form.Item label="First Name" name="fname">
                            <Input
                                placeholder="First name"
                                onChange={(event) => {
                                    this.setState({
                                        fnameState: event.target.value,
                                    });
                                }}
                            ></Input>
                        </Form.Item>

                        <Form.Item label="Last Name" name="lname">
                            <Input
                                placeholder="Last name"
                                onChange={(event) => {
                                    this.setState({
                                        lnameState: event.target.value,
                                    });
                                }}
                            ></Input>
                        </Form.Item>

                        <Form.Item label="Email" name="email">
                            <Input
                                placeholder="Email"
                                onChange={(event) => {
                                    this.setState({
                                        emailState: event.target.value,
                                    });
                                }}
                            ></Input>
                        </Form.Item>

                        <Form.Item label="Branch" name="branch">
                            <Input
                                placeholder="Branch"
                                onChange={(event) => {
                                    this.setState({
                                        branchState: event.target.value,
                                    });
                                }}
                            ></Input>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.getStudentDetails,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails, deleteStudent }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal1);

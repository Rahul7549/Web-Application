import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css'
import axios from 'axios';
class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            account: "",
            amount: "",
            fname:"",
            lname:"",
            address:"",
        };
        this.DepositBalance = this.DepositBalance.bind(this);
        this.handleaccunt = this.handleaccunt.bind(this);
        this.handleamount = this.handleamount.bind(this);
        this.handlefname = this.handlefname.bind(this);
        this.handlelname = this.handlelname.bind(this);
        this.handleaddress = this.handleaddress.bind(this);
    }

    handleaccunt({ target }) {
        this.setState({
            account: target.value
        });
    }

    handleamount({ target }) {
        this.setState({
            amount: target.value
        });
    }
    
    handlefname({ target }) {
        this.setState({
           fname: target.value
        });
    }
    handlelname({ target }) {
        this.setState({
            lname: target.value
        });
    }

    handleaddress({ target }) {
        this.setState({
            address: target.value
        });
    }

    DepositBalance() {
        let myData = {
            "amount": this.state.amount,
            "ac_no": this.state.account,
            "customer": {
                "firstName": this.state.fname,
                "lastName": this.state.lname,
                "address": this.state.address,
            }
        };
        console.log(myData)
        axios
            .post('http://192.168.43.236:8080/api/v1/account_detail', myData)
            .then(response => {
                console.log(response)
                alert("Sucessfully Registered")
            })
            .catch(error => {
                console.log(error)
                alert("not Registered")
            })

    }




    render() {
        const bstyle =
        {
            color: "white",
            backgroundColor: "#00BFFF",
            height: "30px",
            padding: "20px",
            marginTop: "40px",
            fontFamily: "Arial",
            width: "300px",
            borderRadius: "15px"
        }
        const inbstyle =
        {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "20px",
            marginTop: "40px",
            fontFamily: "Arial",
            width: "300px",
            borderRadius: "15px"
        }
        return (

            <div>
                <div class="mx-auto" style={{ width: "300px" }}>
                    <br />
                    <input
                        style={inbstyle}
                        type="text"
                        name="payloadBox"
                        placeholder="Enter Account"
                        value={this.state.payloadBox}
                        onChange={this.handleaccunt}
                    />
                    <br />
                    <input
                        style={inbstyle}
                        type="text"
                        name="payloadBox"
                        placeholder="Enter fname"
                        value={this.state.payloadBox}
                        onChange={this.handlefname}
                    />
                    <br />
                    <input
                        style={inbstyle}
                        type="text"
                        name="payloadBox"
                        placeholder="Enter lname"
                        value={this.state.payloadBox}
                        onChange={this.handlelname}
                    />
                    <br />
                    <input
                        style={inbstyle}
                        type="text"
                        name="payloadBox"
                        placeholder="Enter address"
                        value={this.state.payloadBox}
                        onChange={this.handleaddress}
                    />
                    <br/>
                    <input
                        style={inbstyle}
                        type="text"
                        name="payloadBox"
                        placeholder="Deposit Amount"
                        value={this.state.payloadBox}
                        onChange={this.handleamount}
                    />
                    <br />
                    <button style={{ fontWeight: 800 }} style={inbstyle} onClick={this.DepositBalance}>
                        Submit
                    </button>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}
export default Register; 
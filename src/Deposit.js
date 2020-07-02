import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css'
import axios from 'axios';

class Deposit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            account: "1000",
            account_no: "",
            balance: "",
            title: ""
        };
        this.DepositBalance = this.DepositBalance.bind(this);
        this.handleaccunt = this.handleaccunt.bind(this);
        this.handleamount = this.handleamount.bind(this);
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

DepositBalance() {
        console.log(this.state.amount);
    axios
        .put('http://192.168.43.236:8080/api/v1/account_detail/' +this.state.account+ '/'+this.state.amount)
        .then(response => {
            console.log(response)
            alert("Sucessfully Deposited")
            alert("Current Balance  :"+response.data.amount)
        })
        .catch(error => {
            console.log(error)
            alert("failed to deposit some severe error")
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
                        placeholder="Account....."
                        value={this.state.payloadBox}
                        onChange={this.handleaccunt}
                    />
                    <br />
                    <input
                        style={inbstyle}
                        type="text"
                        name="payloadBox"
                        placeholder="Amount........"
                        value={this.state.payloadBox}
                        onChange={this.handleamount}
                    />
                    <br />
                    <br />
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
export default Deposit; 
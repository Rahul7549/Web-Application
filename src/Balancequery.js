import React, { Component } from 'react';
import { BrowserRouter,Router,Route,Link,Switch } from "react-router-dom";
import './App.css'
import axios from 'axios';
import {browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

class Balancequery extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            account:"1000",
            account_no:"",
            balance:"",
            title:""
        };
        this.CurrentBalance = this.CurrentBalance.bind(this);
        this.handleaccunt = this.handleaccunt.bind(this);
    }

    handleaccunt({ target }) {
        this.setState({
            account: target.value
        });
    }

    CurrentBalance() {
        console.log(this.state.account);
        axios.get('http://192.168.43.236:8080/api/v1/account_detail/'+this.state.account)
            .then(response => {
                alert("Current balance    :" + response.data.amount);
            })
            .catch(error => {
                console.log(error);
            });
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
        //<input type="text" value={phoneno}  onChange={this.phonenohandler} placeholder="Phoneno..." />
        return (
                <div class="mx-auto" style={{ width: "300px" }}>
                    <br />
                 <br />

                <input
                    style={inbstyle}
                    type="text"
                    name="payloadBox"
                    placeholder="Account.........."
                    value={this.state.payloadBox}
                    onChange={this.handleaccunt}
                />
                    <br/>
                    <br />
                    <br />
                    <br />
                <button style={{ fontWeight: 800 }} style={inbstyle} onClick={this.CurrentBalance}>
                       Submit
                    </button>
                    <br />
                    <br />
                </div>
         
        );
    }
}
export default Balancequery; 


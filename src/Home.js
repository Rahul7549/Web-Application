import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import './App.css'

export default function Home() {
    render(); {
        const bstyle =
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
                    <a class="btn btn-primary ml-auto" style={bstyle} href="./src/Pages/p1.js" role="button">Register</a>
                    <br />
                    <a class="btn btn-primary ml-auto" style={bstyle} href="./src/Pages/p1.js" role="button">Balance Deposite</a>
                    <br />
                    <a class="btn btn-primary ml-auto" style={bstyle} href="./src/Pages/p1.js" role="button">Balance Withdraw</a>
                    <br />
                    <a class="btn btn-primary ml-auto" style={bstyle} href="./src/Pages/p1.js" role="button">Balance Query</a>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

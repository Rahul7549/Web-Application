import React, { Component } from 'react'
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:"",
            phoneno: "",
            firstName: "",
            lastName: "",
            
        
            

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    //  changeHandler = (e) => {
    //      this.setState({[e.target.firstName]:e.target.value})
    // }
         idhandler=(event)=>{
        this.setState({
        id:event.target.value
        })
    }
    phonenohandler=(event)=>{
        this.setState({
           phoneno:event.target.value
        })
    }

    firsthandler=(event)=>{
        this.setState({
        firstName:event.target.value
        })
    }
    lasthandler=(event)=>{
        this.setState({
            lastName:event.target.value
        })
    }
    

    submitHandler = (event) =>{
        alert("we re in axisos");
        event.preventDefault()
        console.log(this.state)
        
        axios.get('http://192.168.43.236:8080/api/v1/account_detail/754960')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    handleSubmit=(event)=>{
        alert("Registered Successfully !!!!")
        console.log(this.state);
        this.setState({
            id:" ",
            phoneno:" ",
            firstName:" ",
            lastName:" ",
            
            
        })
        event.preventDefault()
    }




    render() {
        const { id,phoneno, firstName, lastName} = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>User Registration</h1>
                    <label>Customer_id :</label> <input type="text" value={id} onChange={this.idhandler} placeholder="Customerid..." /><br/>
                   <label>FirstName :</label> <input type="text" value={firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br/>
                   <label>LastName :</label> <input type="text"  value={lastName} onChange={this.lasthandler} placeholder="LastName..." /><br/>
                   <label>phoneno :</label> <input type="text" value={phoneno}  onChange={this.phonenohandler} placeholder="Phoneno..." /><br/>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form
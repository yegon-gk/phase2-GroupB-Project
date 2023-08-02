import React from "react";
import "./LogIn.css"

function LogIn(){

    return (
        <div className="logincontainer">
            <div className="loginimage">
                <h2 className="imageheading">Log In</h2>
            </div>
            <div className="loginform">
                <h2>Log In</h2>
                <form>
                    <label>Email:</label>
                    <input type="email" name="email" required/>
                    <br/>
                    <label>Password:</label>
                    <input type="password" name="password" required/>
                    <br/>
                    <button type="submit">Log In</button>
                </form>
            </div>
           
           
        </div>
    )
}
export default LogIn;
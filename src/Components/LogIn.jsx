import React from "react";

function LogIn(){

    return (
        <div>
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
    )
}
export default LogIn;
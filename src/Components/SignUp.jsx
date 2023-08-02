import React from "react";

function SignUp(){

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <label>Name:</label>
                <input type="text" name="name" required/>
                <br/>
                <label>Email:</label>
                <input type="email" name="email" required/>
                <br/>
                <label>Password:</label>
                <input type="password" name="password" required/>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?<a href="/login">Log In</a></p>
        </div>
    )
}

export default SignUp;
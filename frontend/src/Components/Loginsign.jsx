import React, { Component } from 'react'

export default class Login extends Component {

  constructor (props){
    super (props);
    this.state={
      email:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e){
    e.preventDefault();
    const{email, password}=this.state;
    console.log(email,password);
    fetch("http://localhost:5000/loginuser", {
      method: "post",
      crossDomain: true,
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
        "Acces-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister")
      });

  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <h3></h3>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-5">
          <label></label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="d-flex align-items-sm-center mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-3">
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-2">
          <div className="custom-control custom-checkbox ">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid d-flex align-items-sm-center mb-1 mx-auto col-10 col-md-8 col-lg-3 pt-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password d-grid d-flex align-items-sm-center text-right mb-1 mx-auto col-10 col-md-8 col-lg-3 pt-1">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
















// import React from 'react'

// function Loginsign() {
//   return (
//     <form >
//   {/* <!-- Email input --> */}
//   <div class="form-outline mb-4 mx-auto col-10 col-md-8 col-lg-3 pt-5  ">
//     <input type="email" id="form2Example1" class="form-control" />
//     <label class="form-label" for="form2Example1">Email address</label>
//   </div>

//   {/* <!-- Password input --> */}
//   <div class="form-outline mb-4 mx-auto col-10 col-md-8 col-lg-3">
//     <input type="password" id="form2Example2" class="form-control" />
//     <label class="form-label" for="form2Example2">Password</label>
//   </div>

//   {/* <!-- 2 column grid layout for inline styling --> */}
//   <div class="row mb-4 mx-auto col-10 col-md-8 col-lg-3 ">
//     <div class="col d-flex justify-content-center">
//       {/* <!-- Checkbox --> */}
//       <div class="form-check mx-auto col-10 col-md-8 col-lg-3">
//         <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
//         <label class="form-check-label" for="form2Example31"> Remember me </label>
//       </div>
//     </div>

//     <div class=" mx-auto col col-10 col-md-8 col-lg-4">
//       {/* <!-- Simple link --> */}
//       <a href="#!">Forgot password?</a>
//     </div>
//   </div>

//   {/* <!-- Submit button --> */}
//   <button type="button" class="btn btn-primary mx-auto btn-block mb-4 col-2">Sign in</button>

//   {/* <!-- Register buttons --> */}
//   <div class="text-center mx-auto col-10 col-md-8 col-lg-4">
//     <p>Not a member? <a href="#!">Register</a></p>
//     <p>or sign up with:</p>
//     <button type="button" class="btn btn-link btn-floating mx-1">
//       <i class="fab fa-facebook-f"></i>
//     </button>

//     <button type="button" class="btn btn-link btn-floating mx-1">
//       <i class="fab fa-google"></i>
//     </button>

//     <button type="button" class="btn btn-link btn-floating mx-1">
//       <i class="fab fa-twitter"></i>
//     </button>

//     <button type="button" class="btn btn-link btn-floating mx-1">
//       <i class="fab fa-github"></i>
//     </button>
//   </div>
// </form>
//   )
//   }

// export default Loginsign
import React, { Component } from 'react'

export class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             email:"",
             contact: "",
             password: "",
             confirmpassword: "",
             formValidate: {
                 contact:false,
                 password: false
             },
             formErrorMessage:{
                 password: "",
                 contact: ""
             },
             formSuccessMessage: {
                 password: "",
                 contact: ""
             }
        }
    }
    handleusername = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handlecontact = (event) => {
        const contact = event.target.value
        let formValidity = this.state.formValidate
        let formError = this.state.formErrorMessage;
        let formSuccess = this.state.formSuccessMessage;
        this.setState({
            contact:contact
        })
        if(contact.length === 10) {
            formValidity = true;
            formError.contact = "";
            formSuccess.contact = "valid mobile number"
        } else {
            formValidity = false;
            formError.contact = "please enter a valid mobile number";
            formSuccess.contact = ""
        }
    }
    handleemail = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    handlepassword = (event) => {
        const password = event.target.value;
        let formValidity = this.state.formValidate
        let formError = this.state.formErrorMessage;
        let formSuccess = this.state.formSuccessMessage;
        this.setState({
            password:password
        })
        if(password.length<8){
            formError.password = "Password should be atleast of 8 characters";
            formValidity = false;
            formSuccess.password = "";
        }else {
            formError.password = "";
            formValidity = true;
            formSuccess.password = "Password is valid";
        }
        this.setState({
            formErrorMessage:formError
        })
        this.setState({
            formSuccessMessage:formSuccess
        })
    }
    handleconfirmpassword = (event) => {
        this.setState({
            confirmpassword:event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`form submitted by ${this.state.username}`)
        console.log(`name: ${this.state.username}
        email: ${this.state.email}
        phone no: ${this.state.contact}
        `)
        event.preventDefault()
    }
    passwordmatch = () => {
        if(this.event.password === this.event.confirmpassord){
            console.log("password matched")
        }
    }
    
    render() {
        return (
            <>
                <section className="vh-140" style={{backgroundColor: "#eee"}}>
  <div className="container h-100 pt-5 pb-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={this.handleSubmit}>

                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" value={this.state.username} placeholder="Full name" onChange={this.handleusername}/>
                    </div>
                  </div>

                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" value={this.state.email} placeholder="Email" onChange={this.handleemail}/>
                    </div>
                  </div>

                  <label className="form-label" htmlFor="form3Example1c">Contact No</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example1c" className="form-control" value={this.state.contact} placeholder="Your phone number" onChange={this.handlecontact}/>
                    </div>
                  </div>
                  <div style= {{color: "red"}}>
                      {this.state.formErrorMessage.contact}
                  </div>

                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" value={this.state.password} placeholder="Password" onChange={this.handlepassword}/>
                    </div>
                  </div>
                  <div style= {{color: "red"}}>
                      {this.state.formErrorMessage.password}
                  </div>
                  <div style= {{color: "green"}}>
                      {this.state.formSuccessMessage.password}
                  </div>
                  

                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" value={this.state.confirmpassword} placeholder="Confirm password" onChange={this.handleconfirmpassword}/>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

            </>
        )
    }
}

export default form

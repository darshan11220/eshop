import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
import Register from '../register/registerform'
 
class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             contact: "",
             password: ""
        }
    }
    handlecontact = (event) => {
        this.setState({
            contact:event.target.value
        })
    }
    handleemail = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    handlepassword = (event) => {
        this.setState({
            password:event.target.value
        })
    }
    
    
    render() {
        return (

            <>
                <section className="vh-140"  style={{backgroundColor: "#eee"}}>
  <div className="container h-100 pt-5 pb-5">
    <div className="row d-flex justify-content-center align-items-center h-140">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form className="mx-1 mx-md-4">

                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" value={this.state.email} placeholder="Email" onChange={this.handleemail}/>
                    </div>
                  </div>

                  {/* <label className="form-label" htmlFor="form3Example1c">Contact No</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example1c" className="form-control" value={this.state.contact} placeholder="Your phone number" onChange={this.handleusername}/>
                    </div>
                  </div> */}

                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" value={this.state.password} placeholder="Password" onChange={this.handlepassword}/>
                    </div>
                  </div>

                  
                  {/* <Router> */}
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <Link to= '/register'>
                    <button type="button" className="btn btn-primary btn-lg me-5">Register</button>
                    </Link>
                    <button type="button" className="btn btn-primary btn-lg">Login</button>
                  </div>
                  {/* </Router> */}
                  {/* <Routes>
                      <Route path='/register' element={<Register/>}/>
                  </Routes> */}
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

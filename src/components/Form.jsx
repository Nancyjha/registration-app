import React, { useEffect } from 'react'
import { useState } from 'react';
function Form() {
  const data = { name: "", email: "", password: "", passwordConfirmation: "" };
  const [input, setInput] = useState(data);
  const [flag, setFlag] = useState(false);
  const confirmData = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(e.target.name)
  }
  useEffect(() => {
    console.log('registered')
  }, [flag]);
  const confirmInput = (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.password || !input.passwordConfirmation) {
      alert('all feilds are required')
    }
    else {
      setFlag(true)
    }
  }

  return (
    <>
      <pre>{(flag) ? <h1>Hey {input.name}, you're now registered</h1> : ""}</pre>
      <section className="vh-100 " style={{ backgroundColor: 'white' }}>
        <div className="container h-100 ">
          <div className="regiform">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '5px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            <input name='name' type="text" placeholder='Enter Your Name' value={input.name} onChange={confirmData} id="form3Example1c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            <input name='email' placeholder='Enter Your Email Address' value={input.email} onChange={confirmData} type="email" id="form3Example3c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            <input name='password' type="password" placeholder='Enter Your Password' value={input.password} onChange={confirmData} id="form3Example4c" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            <input name="passwordConfirmation" type="password" placeholder='Enter Your Password Again' value={input.passwordConfirmation} onChange={confirmData} id="form3Example4cd" className="form-control" />
                          </div>
                        </div>
                        <br />

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="/">Terms of service</a>
                          </label>
                        </div>
                        <br />


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" onClick={confirmInput} className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid img-thumbnail" alt="Sample" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Form


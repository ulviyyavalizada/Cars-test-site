import React, {useState} from "react"

const SignInModal = ({ setIsOpen, setSignUpOpen })=>{
    

    return(
        <div className='modal fade signInModal show'  id="signInModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal_header">
                        <div className="close_modal">
                            <button onClick={()=>setIsOpen(false)}>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 11.5L1.5 1.5M11.5 1.5L1.5 11.5" stroke="#a5a6ce" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="modal_body">
                        <p className="modal_title">
                            Account login
                        </p>

                        <form id="login_form">
                            <div className="form-group">
                                <input className="inputValidate" placeholder="Email*" id="loginName" type="email" name="" required/>
                            </div>

                            <div className="form-group">
                                <input className="inputValidate" placeholder="Password*" id="loginPassword" type="password" name="" required/>
                            </div>
                        </form>
                    </div>
                    <div className="modal_footer">
                        <button className="blue_btn">Login</button>
                        <p className="_text">
                            If you not have account,
                            <span onClick={() => { 
                                    setSignUpOpen(true)
                                    setIsOpen(false)
                                }}
                            >sign up</span>
                        </p>
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default SignInModal
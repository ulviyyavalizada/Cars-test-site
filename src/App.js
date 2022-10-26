import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import * as carsActions from "./redux/actions/carsActions"
import carImage from "./assets/img/car.png"
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import Weather from "./components/Weather";

function App({cars}) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(carsActions.getCars())
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="main_container">
              <div className="left_box">
                <a className="_item" href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <i className="fa fa-phone"></i>
                  <span>
                  +00-4X6-634-781
                  </span>
                </a>
                <a  className="_item" href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <i className="fa fa-envelope"></i>
                  <span>
                  info@themevessel.com
                  </span>
                </a>
              </div>

              <div className="right_box">
                
                <Weather/>
                <button className="login_btn" onClick={() => setIsOpen(true)}>
                  <i className="fa fa-sign-in"></i>
                  <span>
                  Login
                  </span>
                </button>
                <button type="button" className="login_btn" onClick={() => setSignUpOpen(true)}>
                  <i className="fa fa-user"></i>
                  <span>
                  Register
                  </span>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </header>
      <main className="home">
        <div className="home_nav">
          <div className="container">
            <div className="row">
              <nav className="main_nav">
                <div className="_logo">
                  <i className="fa fa-car fa-4x"></i>
                </div>
                <ul className="nav_list">
                  <li className="active">
                    <span>
                      Index
                    </span>
                  </li>
                  <li>
                    <span>
                      Cars
                    </span>
                  </li>
                  <li>
                    <span>
                      About
                    </span>
                  </li>
                  <li>
                    <span>
                      Pages
                    </span>
                  </li>
                  <li>
                    <span>
                      Blog
                    </span>
                  </li>
                </ul>
                <button className="subsBtn">
                <i className="fa fa-bolt fa-fw"></i>
                  Subscribe!
                </button>
              </nav>
            </div>
          </div>
        </div>
        <section className="index_top"
           style={{  
            backgroundImage: "url('https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/re-hp/desktop/Bronco_newcrop.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="main_container">
                <h2 className="main_title">
                  Find your Dream Cars
                </h2>
                <p className="bottom_title">
                  See how electric vehicles fit into your life.
                </p>
                <div className="search_box">
                  <input type={"text"} placeholder="search car..."/>
                  <i className="fa fa-search"></i>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section className="cars_section">
          <div className="container">
            <div className="row">
              <div className="main_container">
                <h5 className="_title1">
                  Best seller car models
                </h5>
                <p className="_title2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
                </p>
                <div className="grid_boxes">
                  {cars.load &&
                  !cars.failed &&
                  cars.data.map((car, index) => {
                    var price = car.avg_price.toFixed(2);
                    var power = car.avg_horsepower.toFixed(1)
                    return (
                      <div  key={index} className="box_item">
                        <div className="_img">
                          <img src={carImage} alt={'car image'}/>
                        </div>
                        <p className="_name">
                        {car.name}
                        </p>
                        <p className="_model">
                          Model number:
                          <span>
                          {car.num_models}
                          </span>
                        
                        </p>
                        <p className="_power">
                          Horse power:
                          <span>
                          {power}
                          </span>
                        
                        </p>
                        <p className="_price">
                          <span>{price}</span>
                          &#36;
                        </p>
                        
                      </div>
                    )
                  })}
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        


        {isOpen && <SignInModal setSignUpOpen={setSignUpOpen} setIsOpen={setIsOpen} />}
        {signUpOpen && <SignUpModal setIsOpen={setIsOpen} setSignUpOpen={setSignUpOpen} />}
      </main>

      
    </>
    
  );
}

function mapStateToProps(state){
  return {
    cars: state.carsReducer
  }
}

export default connect(mapStateToProps)(App)

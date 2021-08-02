import topLogo from "../assets/Images/trophieLogo.png";
import buttonImg from "../assets/Images/buttonImg.png";
import './design/home.css';
import {Route, Link} from "react-router-dom";
import TrophieLogo from "../assets/Images/trophieLogo.png"

function home() {
  return (
    <div>

          <div class="mobileWrapper">

            <div id="welchomeBG">

              <div id="welcomeContent">

                 <div id="welcomeScreenTopWrapper">
                        <h2 id="welcomeScreenh2">
                          Willkommen bei
                        </h2>
                        <img src={topLogo} id="welcomeScreenTopLogo"/>
                        <h3 id="welcomeScreenToph3">
                          Collecting your fan moments
                        </h3>
                  </div>


              <div id="welcomeScreenbuttonWrapper">

                  <Link to="dashboard">
                    <div class="welcomeScreenButtonWhite">
                      <h3 id="welcomeScreenButtonh3">
                        Registrieren
                      </h3>
                      <img src={buttonImg} id="welcomeScreenButtonImg"/>
                    </div>
                  </Link>



                    <div class="welcomeScreenButtonWhite">
                      <h3 id="welcomeScreenButtonh3">
                        Log In
                      </h3>
                      <img src={buttonImg} id="welcomeScreenButtonImg"/>
                    </div>


                    <div class="welcomeScreenButtonWhite">
                      <h3 id="welcomeScreenButtonh3">
                        Erklärung
                      </h3>
                      <img src={buttonImg} id="welcomeScreenButtonImg"/>
                    </div>



              </div>


            </div>


              </div>
            <div id="welcomettrophieWrap">
              <div id="wttrophietop">
                <h2 id="wttrophieh2">
                  Welcome to 
                </h2>
              </div>
              <div id="wttrophiemid">
                <img src={TrophieLogo} id="wttrophieLogo"/>
              </div>

              <div id="wttrophiebuttonsec">
                <Link to="/LogIn">
                  <div id="wttrophiebutton">
                   <h3 id="wttrophiebuttonh4">
                     LogIn
                  </h3> 
                  </div>
                </Link>

                <Link to="/Register">
                  <div id="wttrophiebutton">
                  <h3 id="wttrophiebuttonh4">
                  Register
                  </h3> 
                    
                  </div>
                </Link>
              </div>
                


            </div>

         
         
         
         
         
         
          </div>



     


          <div class="biggerthanmobileWrapper">



          </div>
    
    
     </div>
  ); 
  }
 
export default home;
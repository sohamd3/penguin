import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Header extends Component {
  render() {
    return (
      <div className="profile">
          
        {/* left sidebar to contain profile info */}
        <div className="content-panels left-sidebar">
            <div className="info basic-info">
                <img src="./me.jpg"/>
                <p>Soham Dan</p>
            </div>
            <div className="info bio">
                <p>About Me</p>
                <p>
                    I am a Frontend Developer and a Design enthusiast.
                    Suffers from high OCD, and cooks good alu bhaja :P
                </p>
            </div>
            <div className="info links">

            </div>
        </div>

        {/* mid section to contain posts */}
        <div className="content-panels mid-section">
            
        </div>

        {/* right sidebar to contain users list etc */}
        <div className="content-panels right-sidebar">

        </div>

      </div>
    );
  }
}

export default Header;

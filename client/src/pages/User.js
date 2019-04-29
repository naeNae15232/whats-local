import React, { Component } from "react";
//import API from "../utils/API";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Searchbar from "../components/Searchbar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Favorites from "../components/Favorites";
import waves from "../images/vertical-waves.png";
import "./User.css";
import Brand from "../components/Brand";

//import Favorites from "../components/favorites";

class normalUser extends Component {
  state = {
    firstName: "Vincent",
    lastName: "van Gogh",
    favorites: " ",
    loading: true,
    favArray: []
  };

  render() {
    return (
      <div>
        
          <div className="row no-gutters">
          
          <Row className="search-row">
            <Col xs={4} md={4}>
              <Brand />
            </Col>
            <Col xs={8} md={8} id="search">
              <Searchbar />
            </Col>
          </Row>
          </div>
          <div className="user">
          <Container>

            <Row>
              <Col size="md-12" id="header">
                <Header />
                {/* 
                I relocated the profile Name/info/bio to the Header component instead of on the User Page */}

                {/* <h5 id="profileName">
                  {" "}
                  {this.state.firstName} {this.state.lastName}
                </h5> */}
              </Col>
            </Row>
            {/* <Favorites>
            {favArray.forEach((element) => {console.log(element);
            })} */}
            <Favorites />
          </Container>
          <Col size="md-12" id="navbar">
            <Navbar />
          </Col>
        </div>
      </div>
    );
  }
}

export default normalUser;

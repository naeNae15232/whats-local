import React, { Component } from "react";
import ArtistSpotlight from "../components/ArtistSpotlight";
import "./Main.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Searchbar from "../components/Searchbar";
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import Suggestions from "../components/Suggestions";
// import UserUpdates from "../componentsUserUpdates";

import Brand from "../components/Brand";

class MainPage extends Component{

    state={

        loading: "true",

    };
    // componentDidMount() {
    //         this.loadProfile();
    // }

    render(){
        return(
            <div className="MainPage">
            
            <Container>
            <Row>
                            <Col xs={2} md={2}>
                                <Brand />
                            </Col>
                            <Col xs={6} md={6} id="search">
                                <Searchbar />
                            </Col>
                            <Col xs={4} md={4}>
                            <Navbar/>
                            </Col>
                            
                        </Row>
            </Container>
            <Container>
            <Row className="Spotlight">
            {this.state.loading ? <Row>
                <Col md = {12}>
            <ArtistSpotlight/>
            </Col>
            </Row> : null}
            </Row> 
            <Row className="Feed">
            {this.state.loading ? <Row>
                <Col xs={12} md ={6}>
                <Row>
                    {/* <Create/> */}
                </Row>
                <Row>
                    {/* <Suggestions/> */}
                </Row>
                </Col>
                <Col xs={12} md={6}>
                {/* <UserUpdates/> */}
                </Col>
                </Row> : null}
            </Row>


            </Container>
            
            
            </div>
        )
    }
}

export default MainPage;

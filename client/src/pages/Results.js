import React, { Component } from "react";
import API from "../utils/API";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Brand from "../components/Brand";

import "./Results.css";


import Spinner from "react-bootstrap/Spinner";
import Background from "../assets/images/buildings-cars.jpg";



class Results extends Component {
  state = {
    results: "",
    loading: false
  };
  // componentDidMount() {
  //     this.loadResults();
  // }

  // loadResults = () => {
  //     API.getResults().then(res =>
  //         this.setState({
  //             results: res.data,
  //             loading: false
  //         })
  //     ).catch(err => console.log(err));
  // };

  render(props) {

    const style ={
      minWidth: "100vw",
      minHeight: "100vh",
      backgroundImage: `url(${Background})`,
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat'
    };
    return (
      
        <div style={style}>

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

 
            <div className="Results">
          <Container>
            {this.state.loading ? (
              <Row>
                <Col size="md-6">
                  <div>
                    findArtist
                    {this.state.results}
                  </div>
                </Col>
                <Col size="md-6">
                  <div>{this.state.results}</div>
                </Col>
              </Row>
            ) : (
              <h3>
                We're sorry, your search did not return any results. Try again
                later!
              </h3>
            )}
         
        </Container>
        
        <Navbar />
        </div>
      
      </div>
    );
  }

  // loadResults = () => {
  //     API.getResults().then(res =>
  //         this.setState({
  //             results: res.data,
  //             loading: false
  //         })
  //     ).catch(err => console.log(err));
  // };

  // render(props) {
  //   console.log(this.props)



    // return (
     
    //         <Col xs={4} md={4}>
    //           <Brand />
    //         </Col>
    //         <Col xs={8} md={8} id="search">
    //           <Searchbar />
    //         </Col>
    //       </Row>
    //     </div>
        
         
    //         {this.state.loading ?( <Row>
    //           <Col size="md-6">
    //             <div>
    //               findArtist
    //                         {this.state.results}
    //             </div>
    //           </Col>
    //           <Col size="md-6">
    //             <div>
    //               {this.state.results}
    //             </div>
    //           </Col>

    //         </Row>
    //         {this.state.loading ? (
    //           <Row>
    //             <Col size="md-6">
    //               <div>{this.state.results}</div>
    //             </Col>
    //             <Col size="md-6">
    //               <div>{this.state.results}</div>
    //             </Col>
      
    //         </Row>) : (<Spinner animation="grow" />)}
    //         </Container>

    //       </div>
       
    //     <Navbar />

    //   </div >

    // )
  };

export default Results;

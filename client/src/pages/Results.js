import React, { Component } from "react";
import API from "../utils/API";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

class Results extends Component {
    state = {
        results: "",
        loading: true

    };
    componentDidMount() {
        this.loadResults();
    }

    loadResults = () => {
        API.getResults().then(res =>
            this.setState({
                results: res.data,
                loading: false
            })
        ).catch(err => console.log(err));
    };

    render(props) {
        return (
           <div className="Results">
            <Searchbar />
                {this.state.loading? <Row>
                    <Col size="md-6">
                        <div>
                            {this.state.results}
                        </div>
                    </Col>
                    <Col size="md-6">
                        <div>
                            {this.state.results}
                        </div>
                    </Col>
                </Row>: null}

            <Navbar />
            </div>
            
        )
    }


}

export default Results;
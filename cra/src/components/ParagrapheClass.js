import { Component } from "react";

export class ParagrapheClass extends Component {
    constructor(props) {
        super(props);
        console.log("construction");
    }

   
    componentWillMount() {
        console.log("componentWillMount", this.props);
    }

    render() {
        console.log("render");
        return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, autem amet. Asperiores minus cum reprehenderit suscipit illo? Sint dolorum, error doloremque molestias ex esse, omnis qui voluptate recusandae blanditiis tempora.
        </p>
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
}
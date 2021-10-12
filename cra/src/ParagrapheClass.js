import { Component } from "react";
import { ButtonRegularOutline } from "./buttons/ButtonRegularOutline";

export class ParagrapheClass extends Component {
    constructor() {
        super();
        console.log("construction");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    render() {
        console.log("render");
        return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, autem amet. Asperiores minus cum reprehenderit suscipit illo? Sint dolorum, error doloremque molestias ex esse, omnis qui voluptate recusandae blanditiis tempora.<ButtonRegularOutline>
            Clickez moi
        </ButtonRegularOutline></p>
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
}
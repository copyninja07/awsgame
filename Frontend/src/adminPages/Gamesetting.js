import React, { Component } from "react";
import Switch from "react-switch";
import {Card,Row} from "react-bootstrap"

export default class Gamesetting extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  handleChange1(checked1) {
    this.setState({ checked1 });
  }

  handleChange2(checked2) {
    this.setState({ checked2 });
  }

  handleChange3(checked3) {
    this.setState({ checked3 });
  }

  render() {
    return (
 <div style={{display:"flex",justifyContent:"center",marginTop:"20rem"}}>
 <Card style={{width:"18rem",}} >
     <Row>
         <div> <span>A</span> <Switch onChange={this.handleChange1} checked={this.state.checked1} /> </div>
   
     <div> <span>B</span> <Switch onChange={this.handleChange2} checked={this.state.checked2} /> </div>
     <div> <span>C</span> <Switch onChange={this.handleChange3} checked={this.state.checked3} /> </div>
   
    
     </Row>

</Card>

</div>
       
    );
  }
}

import React, { Component } from "react";

import DirectionsMap from "./DirectionsMap";

// const queryParams = new URLSearchParams(window.location.search)

let addresses1 = [
  {
    lat: 32.732410,
    lng: -97.113850
  },
  {
    lat: 32.733525,
    lng: -97.116704
  }
];
let addresses2 = [
  {
    lat: 32.732410,
    lng: -97.113850
  },
  {
    lat: 32.729332,
    lng: -97.111221
  }
];
let addresses3 = [
  {
    lat: 32.732410,
    lng: -97.113850
  },
  {
    lat: 32.729332,
    lng: -97.111221
  }
];
let addresses4 = [
  {
    lat: 32.732410,
    lng: -97.113850
  },
  {
    lat: 32.729332,
    lng: -97.111221
  }
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: "",
      // id : queryParams.get('id')
    };
  }

  componentDidMount(){
    const queryParams = new URLSearchParams(window.location.search)
    let id = queryParams.get('id')
    // let id = this.state.id
    if(id=='1'){
      this.setState({ addresses: addresses1 });
    }else if(id=='2'){
      this.setState({ addresses: addresses2 });
    }else if(id=='3'){
      this.setState({ addresses: addresses3 });
    }else if(id=='4'){
      this.setState({ addresses: addresses4 });
    }
    
  }

  // handleClick1 = () => {
  //   this.setState({ addresses: addresses1 });
  // };
  // handleClick2 = () => {
  //   this.setState({ addresses: addresses2 });
  // };

  render() {
    //... makers and direction functions
    console.log(this.state.addresses)
    // let id = queryParams.get('id')

    // if(id==1){

    // }

    return (
      <div>
        <DirectionsMap coords={this.state.addresses} />
        {/* <button onClick={this.handleClick1}> Direction1 </button> */}
        {/* <button onClick={this.handleClick2}> Direction2 </button> */}
      </div>
    );
  }
}

export default Map;
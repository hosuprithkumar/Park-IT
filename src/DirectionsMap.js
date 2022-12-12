/*global google*/

import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

const defaultLocation = {
  lat: 32.0,
  lng: -84.0
};

let directionsService;
class DirectionsMap extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    directions: null
  };

//this will load the directions in map load
  onMapLoad = map => {
    directionsService = new google.maps.DirectionsService();
    this.changeDirection(this.props.coords[0], this.props.coords[1]);
  };

//this will check if your props changes and render the new value of your props the props will be the parameter you passed inside <DirectionsMap /> in DirectionsMap.js
  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.changeDirection(this.props.coords[0], this.props.coords[1]);
    }
  };

  //function that is calling the directions service
  changeDirection = (origin, destination) => {
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          //changing the state of directions to the result of direction service
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  render() {
    return (
      <div>
        <GoogleMap
          center={defaultLocation}
          zoom={5}
          onLoad={map => this.onMapLoad(map)}
          mapContainerStyle={{ height: "700px", width: "1000px"}}
        >
          {this.state.directions !== null && (
            <DirectionsRenderer directions={this.state.directions} />
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default DirectionsMap;
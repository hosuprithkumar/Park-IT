import React from 'react';
import './Card.css'
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function Card({title, imageUrl, body,body1,body2,body3,body4,body5, map_id}){

    const navigate = useNavigate();

    const navigateReserveSlot = () => {
        // 👇️ navigate to /
        navigate('/Reserve-slot');
      };


      const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
      let zoomLevel= 17
    
    //const lib = ["places"]
    //const key = "AIzaSyD7tlop0hbhtT6BiKWcS1nSw_AP4R9IVzA"

    return(
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body1}</p>
                </div>
                <div className='card-body'>
                    <p>{body2}</p>
                </div>
                <div className='card-body'>
                    <p>{body3}</p>
                </div>
                <div className='card-body'>
                    <p>{body4}</p>
                </div>
                <div className='card-body'>
                    <p>{body5}</p>
                </div>
                <br></br>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <br></br>
            </div>
            <div className='card-btn'>
                <button onClick={navigateReserveSlot}>
                    <a>
                        Reseve Slot
                    </a>
                </button>
                <button >
                    <a href={`/map?id=${map_id}`}>
                        Get Directions
                    </a>
                </button>

            </div>
        </div>
    )
}

export default Card;
import React from 'react';
import Card from "./Card";

export default function Home(){
    const lib = ["places"];
    const key = "AIzaSyA8hu0eCZvnP6UG4lHJ9nxWECRtMIvdvXk"; // PUT GMAP API KEY HERE
    return (
    <div className='App'>
        <div className='col-mid-3'>
        <Card
            title= 'West Campus Parking Garage'
            imageUrl='https://www.henselphelps.com/wp-content/uploads/2018/11/Corgan_UTA__001.jpg'
            body ='This parking lot is situated in the west Campus of The University of Texas at Arlington. It is 200 meters away from Business Building, Arlington.'
            body1='Total slots : 500'
            body2='Available slots : 269'
            body3='0-60 min : $2.00'
            body4='1-2 hr : $5.50'
            body5='2+ hrs until 11.59pm : $7.00'
            map_id={1}/>
        </div>
        <div className='col-mid-3'>
        <Card
            title= 'Public Parking'
            imageUrl='https://d13esfgglb25od.cloudfront.net/lot_img/91806/0f1031e55aed4fb4bfe966e9a4c1b4b4.jpg'
            body='This parking lot is situated in the East Campus of The University of Texas at Arlington. It is 800 meters away from nedderman hall, Arlington.'
            body1='Total slots : 100'
            body2='Available slots : 30'
            body3='0-60 min : $2.00'
            body4='1-2 hr : $5.00'
            body5='2+ hrs until 11.59pm : $10.00'
            map_id={2}/>
        </div>
        <div className='col-mid-3'>
        <Card
            title= 'Parking Lot 48'
            imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/University_of_Texas_at_Arlington_March_2021_178_%28C.R._Gilstrap_Athletic_Center%29.jpg/1200px-University_of_Texas_at_Arlington_March_2021_178_%28C.R._Gilstrap_Athletic_Center%29.jpg?20210322000416'
            body='This Parking lot is located in between Maverick activity center and Athletic center building, it is the closest visitor parking located near univeristy housing'
            body1= 'Total slots : 60'
            body2='Available slots : 40'
            body3='0-60 min : $3.75'
            body4='1-2 hr : $7.50'
            body5='2+ hrs until 11.59pm : $13.00'
            map_id={3}/>

        </div>
        <div className='col-mid-3'>
        <Card
            title= 'Parking Lot 25'
            imageUrl='https://bloximages.newyork1.vip.townnews.com/theshorthorn.com/content/tncms/assets/v3/editorial/9/69/9692e5d4-d2c6-11ea-97c2-43e698eedf4e/5e45e592a2e7b.image.jpg?crop=1763%2C926%2C0%2C125&resize=1200%2C630&order=crop%2Cresize'
            body='This parking lot is situated in the South Campus of The University of Texas at Arlington. It is 100 meters away from University Center, Arlington.'
            body1='Total slots : 100'
            body2='Available slots : 30'
            body3='Free'
            map_id={4}
            />
            </div>
           
    </div>)
}
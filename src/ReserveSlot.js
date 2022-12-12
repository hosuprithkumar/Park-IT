
import './App.css'
import React, { useState } from 'react';
import button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
import './datepicker.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
import DateTimePicker from 'react-datetime-picker';
import emailjs from '@emailjs/browser';

export default function ReserveSlot(){

    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    let handleColor = (time) => {
      return time.getHours() > 12 ? "text-success" : "text-error";
    };
    const handleClose = () => setShow(false);
    const form = useRef();
    
    const [reserved_duration, setreserved_duration] = useState('');
    const [license_plate, setlicense_plate] = useState('');
    const [enter_after, setenter_after] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(e)
        setShow(true);
        console.log(form.current)
        emailjs.sendForm('service_wtkmjsj', 'template_5ykkbyq', form.current, 'msUGrcLoa8p1nRR1Y')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }


    return (
        <>
        <div className='App'>
            <div className="auth-form-container">
            <h2><u>Reserve Parking Slot</u></h2>
            <form ref={form} className="signup-form" onSubmit={(e)=>handleSubmit(e)} >
             <label htmlFor="name">Vechile Type </label>
            <select name="selectList" id="selectList">
              <option value="option 1">4 Wheeler</option>
              <option value="option 2">2 Wheeler</option>
            </select>
            <label htmlFor="enter_after" id='enter_after'>Select Date and Time </label>
            <DatePicker
                name='enter_after'
                showTimeSelect
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                timeClassName={handleColor}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
            {/* <DateTimePickerComponent></DateTimePickerComponent> */}
            <label htmlFor="name" id='reserved_duration'>Duration</label>
            <input type="text" placeholder="hours" id="reserved_duration" name="reserved_duration" onChange={e => setreserved_duration(e.target.value)} value={reserved_duration}/>
            <label htmlFor="lic" id='license_plate'>Licence Plate </label>
            <input type="text" placeholder="XXXX 1111" id="license_plate" name="license_plate" onChange={e => setlicense_plate(e.target.value)} value={license_plate}/>
            <button type="submit" >Submit</button>
            </form>
            </div>
        </div>

            <Modal className='success-modal' show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header >
                <Modal.Title>Success !!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                You have successfully reserved a parking slot
                </Modal.Body>
                <Modal.Footer>
                    <br></br>
                <button className='modal-btn' variant="secondary" onClick={handleClose}>
                    Close
                </button>
                </Modal.Footer>
            </Modal>
            </>
    )
}
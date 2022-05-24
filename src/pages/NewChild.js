import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import ChildCard from '../components/ChildCard';


const todayDate = new Date().toISOString().substring(0,10);
const minDate = dayjs().subtract(21, 'year').toISOString().substring(0,10);


function NewChild() {
    const { user } = useSelector((state) => state.auth);
    const [firstname, setFirstName] = useState('');
    const [dob, setDob] = useState('');
    const [color, setColor] = useState('red');
    const [avatar, setAvatar] = useState('cat');

    const onSubmit = (e) => {
        e.preventDefault();
    };


    return (
    <>
        <section className="heading">
            <h1>Add Child</h1>
        </section>

        <section className="form">

            <div className="form-group">
                <label>First Name:</label>
                <input type="text" className="form-control" value={ firstname } onChange={(e) => setFirstName(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Date of Birth:</label>
                <input type="date" className="form-control" min={ minDate } max={ todayDate } value={ dob } onChange={(e) => setDob(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor='color'>Favourite Colour:</label>
                <select name="color" id="color" className="form-control" value={ color }onChange={(e) => setColor(e.target.value)}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor='avatar'>Avatar:</label>
                <select name="avatar" id="avatar" className="form-control" value={ avatar }onChange={(e) => setAvatar(e.target.value)}>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="dinosaur">Dinosaur</option>
                </select>
            </div>

            <div className="form-group">
                <button className="btn btn-block">Add { firstname ? firstname : 'Child'}</button>
            </div>

        </section>

            { firstname && dob ? (
               <ChildCard firstname={ firstname } avatar={ avatar } color={ color } dob={ dob } />
            ) : 
            (<> </>)}
    </>
  );
};

export default NewChild;
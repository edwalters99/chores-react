import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import { getChild, reset } from '../features/children/childSlice';
import { css } from "@emotion/react";
import dayjs from 'dayjs';
import ClipLoader from "react-spinners/ClipLoader";
import dog from '../images/dog.png';
import cat from '../images/cat.png';
import dino from '../images/dino.png';
import rabbit from '../images/rabbit.png';
import GoldCoins from '../components/GoldCoins';



function ChildHome() {
    const childId = JSON.parse(localStorage.getItem('childAuth')); // logged in Child

    const { child, isLoading, isSuccess, isError, message } = useSelector((state) => state.child);

    const [randomMessage, setRandomMessage] = useState();


    const avatarImg = () => {
        if (child.avatar === 'cat') {return (<img src={ cat } />)}
        if (child.avatar === 'dog') {return (<img src={ dog } />)}
        if (child.avatar === 'dinosaur') {return (<img src={ dino } />)}
        if (child.avatar === 'rabbit') {return (<img src={ rabbit } />)}
    };

    const avatarName = () => {
        const string = child.avatar;
        return string.charAt(0).toUpperCase() + string.slice(1);
    };


    const greeting = () => {
        const today = new Date();
        const curHr = today.getHours();
        if (curHr < 12) {
        return (`Good morning ${ child.firstname }!`)
        } else if (curHr < 18) {
        return(`Good afternoon ${ child.firstname }!`)
        } else {
        return(`Good evening ${ child.firstname }!`)
        }
    };

useEffect(() => {
    if (isSuccess) {
        const backwardsName = child.firstname.split('').reverse().join('').toLowerCase();
        const age = dayjs(new Date()).diff(dayjs(child.dob), 'year');
        const messages = [
            `What's it like being ${ age }?`,
            `Life's good being a ${ child.avatar }!`,
            `Be nice to your family!`,
            `Caring is Sharing!`,
            `You're looking great today!`,
            `That's funny - my favourite colour is ${ child.color } too!`,
            `I'm sleepy and want a nap!`,
            `Reading is fun!`,
            `Your name backwards is ${ backwardsName }.`,
         ];
        
         setRandomMessage(String(messages[Math.floor(Math.random()*messages.length)]));
    }
}, [child, isSuccess]);



    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        };
        dispatch(getChild(childId));
    }, [childId, isError, message]);

    if (isLoading) {
        return <ClipLoader />
    };

    if (isError) {
        return <h3>Something Went Wrong</h3>
    }
    const style = {
        backgroundColor: `${ child.color }`,
        color: 'white',
      };
      
    if (isSuccess) {
        return (
            <div className="child-home-container" style={ style }>
                <h1 className="child-home-title"> { child.firstname } dashboard</h1>
                <div className="child-home-avatar-container">{ avatarImg() }</div>
                <div>
                    <h2> { greeting() }</h2>
                    <h2 className="child-home-message-container">{ avatarName() } says: "{ randomMessage }"</h2> 
                </div>
                { child.rewardbal ?  <GoldCoins coins={ child.rewardbal } /> : <h2>Your Coin bank is empty. Complete some chores to get some shiny gold coins. 😀</h2>}
               
        </div>
      )
    };  
}

export default ChildHome;
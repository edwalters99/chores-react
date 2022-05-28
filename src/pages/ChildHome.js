import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { toast } from 'react-toastify';
import { getChild, reset } from '../features/children/childSlice';
import { css } from "@emotion/react";
import dayjs from 'dayjs';
import Confetti from 'react-confetti';
import ClipLoader from "react-spinners/ClipLoader";
import dog from '../images/dog.png';
import cat from '../images/cat.png';
import dino from '../images/dino.png';
import rabbit from '../images/rabbit.png';
import GoldCoins from '../components/GoldCoins';
import AssignedChores from '../components/AssignedChores';



function ChildHome() {
    const childId = JSON.parse(localStorage.getItem('childAuth')); // logged in Child

    const { child, isLoading, isSuccess, isError, message } = useSelector((state) => state.child);

    const [isBirthday, setIsBirthday] = useState(false);

    const [randomMessage, setRandomMessage] = useState();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        };
        dispatch(getChild(childId));
    }, [childId, isError, message]);


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
        
        function calculateDaysToBirthday() {
            let today = new Date();
            let bday = new Date(child.dob);
            let age = today.getFullYear() - bday.getFullYear();
            
            let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());
            
            if(today > upcomingBday) {
              upcomingBday.setFullYear(today.getFullYear() + 1);
            }
            
            const one_day = 24 * 60 * 60 * 1000;
            
            let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));
    
            if (daysLeft === 365) {
                setIsBirthday(true);
                daysLeft = 0;
            };

            return daysLeft;
        };
        
        const messages = [
            `What's it like being ${ age }?`,
            `Life's good being a ${ child.avatar }!`,
            `Be nice to your family!`,
            `Caring is Sharing!`,
            `You're looking great today!`,
            `That's funny - my favourite colour is ${ child.color } too!`,
            `I'm sleepy and I want a nap!`,
            `Reading is fun! 📚`,
            `Your name backwards is ${ backwardsName }.`,
            `🎂It's ${ calculateDaysToBirthday() } day${ calculateDaysToBirthday() === 1 ? '' : 's'} until your Birthday 🎂`
         ];
        
         setRandomMessage(String(messages[Math.floor(Math.random()*messages.length)]));

    }
}, [child, isSuccess]);


    const dispatch = useDispatch();

    
    if (isLoading) {
        return <ClipLoader />
    };

    if (isError) {
        return <h3>Something Went Wrong</h3>
    }
    
    const fontColor = () => {
        if (child.color === 'pink' || child.color === 'yellow') {
            return 'black';
        } else {
            return 'white';
        }
    };

    const style = {
        backgroundColor: `${ child.color }`,
        color: `${ fontColor() }`,
      };
      
    if (isSuccess) {
        return (
            <div className="child-home-container" style={ style }>
                { isBirthday ? 
                    (<>
                        <h1>Happy Birthday { child.firstname }!!!</h1>
                        <Confetti/>
                    </>) 
                : 
                    <h1 className="child-home-title"> { child.firstname } dashboard</h1>
                }
                
                
                <div className="child-home-avatar-container">{ avatarImg() }</div>
                <div>
                    <h2 className="child-home-greeting"> { greeting() }</h2>
                    <h2 className="child-home-message-container">{ avatarName() } says: "{ randomMessage }"</h2> 
                </div>

                { child.rewardbal ? 
                    <GoldCoins coins={ child.rewardbal } /> 
                : 
                    <h2>Your Coin bank is empty. Complete some chores to get some shiny gold coins. 😀</h2>}
               
               <AssignedChores childId={ child._id } />
        </div>
      )
    };  
}

export default ChildHome;
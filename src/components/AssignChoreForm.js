import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createChore , reset } from '../features/chores/choreSlice';
import { toast } from 'react-toastify';


function AssignChoreForm(props) {

    const [selectedChildId, setSelectedChildId] = useState();

    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.chore);

        useEffect(() => {  
            if (isSuccess) {
                dispatch(reset());
      
            };
            if (isError) {
                toast.error(message, { toastId: 'ChoreMessage'});
              };
              dispatch(reset());
          
        }, [isLoading, isSuccess, isError])

   

    const onSubmit = (e) => {
        e.preventDefault();
        const choreData = {
            title: props.fav.title,
            desc: props.fav.desc,
            value: props.fav.value,
            icon: props.fav.icon
        };
        dispatch(createChore({choreData : choreData, childId : 'selectedChildId' }));
        props.addNameToList(getChildName());
    };

    const onChange = (e) => {
        const currentSelectedId = e.target.value;
        setSelectedChildId(currentSelectedId);
    };

   const getChildName = () => {
        const currentChild = props.children.find((child) => {
            return child._id === selectedChildId;
        });
        const name = currentChild.firstname;
        return name;
   };
    


    return (
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <select name="selectedChildId" className="form-control" value={ selectedChildId } onChange={ onChange }>
                    { props.children.map((child) => (
                        <option key={ child._id } value={ child._id }>{ child.firstname }</option>
                    )) }
                </select>
            </div>

            <button className='btn btn-sm btn-center'>Assign To Child</button>
        </form>
  );

};

export default AssignChoreForm;
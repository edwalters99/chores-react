import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createChore , reset } from '../features/chores/choreSlice';
import { toast } from 'react-toastify';


function AssignChoreForm(props) {
    const [defaultValue, setDefaultValue] = useState('');

    const [selectedChildId, setSelectedChildId] = useState(props.children[0] === undefined ? '' : props.children[0]._id); //
    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.chore);

        useEffect(() => {  
            if (isSuccess) {
                dispatch(reset());
      
            };
            if (isError) {
                toast.error(message, { toastId: 'ChoreMessage'});
              };
            
        }, [isLoading, isSuccess, isError])

        

    const onSubmit = (e) => {
        e.preventDefault();
        const choreData = {
            title: props.fav.title,
            desc: props.fav.desc,
            value: props.fav.value,
            icon: props.fav.icon
        };
        dispatch(createChore({choreData : choreData, childId : selectedChildId }));
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
        
        return (currentChild.firstname);
   };

   if (props.children.length === 0) {
       return (
           <>
           </>
       )
   }
    
    return (
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <select name="selectedChildId" className="form-control" value={ selectedChildId } onChange={ onChange }>
                    {/* <option disabled selected hidden value="">Select a Child:</option> */}
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
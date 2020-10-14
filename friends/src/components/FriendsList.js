import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

const initialFriendValues={
    name: '',
    age: '',
    email: '',
}

const FriendsList = ()=>{
const [friends, setFriends] = useState([]);
const [formValues, setFormValues]= useState(initialFriendValues)

// getting the list of friends 
useEffect(() => {
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            // console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}, []);
 console.log(friends)




const postData = (newData)=>{
    axiosWithAuth()
    .get('/friends',newData)
    .then((res)=>{
    setFriends(friends.concat(res.data))
    })
    
    .catch((err)=> {
        console.log(err)
    })

    .finally(()=>{
        setFormValues(initialFriendValues)
    })
    
    }
    
    const inputChange = (evt)=> {
        // console.log(evt)
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    };

    const submit = (evt) => {
        evt.preventDefault();
        const newFriend = {
            id: Date.now(),
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            email: formValues.email.trim(),
        }
        postData(newFriend)
    };


return(
<>
    {friends.map((friend) => (
    <h1>return{friend.name}</h1>
    ))}
</>
    )
    }

export default FriendsList;
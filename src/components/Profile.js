import React,{useContext} from 'react'
import UserContext from '../context/card/UserContext'


const Profile=() =>{
    const {selectedUser} = useContext(UserContext)
    return (
        <>
           {selectedUser ? (<div className="card card-body text-white text-left border-danger mb-3 position-fixed bg-dark m-3">
               <img src={selectedUser[0].card_images[0].image_url} alt="" srcset="" width='250'/>
               <h3>{`${selectedUser[0].name}`}</h3>
                <h4>{`${selectedUser[0].type}`}</h4>
                <p>{`${selectedUser[0].desc}`}</p>

           </div>):(<h1>No card selected</h1>)} 
        </>
    )
}

export default Profile

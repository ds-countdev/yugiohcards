import React,{useEffect} from 'react'
import {useContext} from 'react'
import UserContext from "../context/card/UserContext"

const UserList = () => {

    const {users,getUsers,getProfile} =useContext(UserContext)

    
    return (
       <div className="list-group h-100">
           {
               users.map(user =>(
                   <a className="list-group-item list-group-item-action
                   d-flex flex-row justify-content-start list-group-item-dark" href="#!" onClick={()=>getProfile(user.id)} key={user.id} >
  <img src={user.card_images[0].image_url} className="img-fluid mr-4" width="100" alt="monster image" />
  <p>{` ${user.name}`}<br/></p>
  <p className='group-item'>{` ${user.race}`}</p>

  
  
                   </a>
                 
               ))
           }
       </div>
    )
}

export default UserList

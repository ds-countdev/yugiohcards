//aqui podran acceder las demas clases para usar las props de los usuarios

import React,{useReducer} from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'

const UserState = (props) =>{

const initialState ={
    users: [],
    selectedUser: null
}

const [state, dispatch] = useReducer(UserReducer, initialState)

const getUsers =  async(attribute) => {
    const res =await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?race='+attribute)
    
    console.log(res.data.data)
    dispatch({
        type: "GET_USERS",
        payload: res.data.data

    })
}

const getProfile = async(id) => {
    const res =await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?id='+id)
    
    dispatch({
        type: 'GET_PROFILE',
        payload: res.data.data
    })
}

return (
    <UserContext.Provider value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile
    }}>
    {props.children}
    </UserContext.Provider>
)
}

export default UserState;
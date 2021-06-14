import React,{useContext} from 'react'
import UserContext from '../context/card/UserContext'

const Navigation=() => {

    const attributes=['aqua','beast','beast-warrior',
                      'creator-god','cyberse','dinosaur',
                      'divine-beast','dragon','fairy','fiend',
                      'fish','insect','machine','plant',
                      'psychic','pyro']
    const {getUsers} = useContext(UserContext)
    return (
        
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">YU-GI-OH CARDS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Attribute cards
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       {     attributes.map(attribute=>(
            <li><a class="dropdown-item" href="#" onClick={()=>getUsers(attribute)}>{attribute}</a>
            </li>
       ))
}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    )
}

export default Navigation

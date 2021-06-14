import './App.css';
import Profile from './components/Profile'
import UserList from './components/UserList'
import Navigation from './components/Navigation'

//context
import UserState from './context/card/UserState';

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <UserState>
      
      <div className="container p-4 m-2">
        <div className="row">
          <div className="col-md-6">
          <Navigation/>
          <UserList/>
          </div>
          <div className="col-md-6 p-2">
          <Profile/>
          </div>
         
        </div>
      </div>
    
     
    </UserState>
    
  );
}

export default App;

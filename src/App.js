import './App.css';
import Content from './components/Content/Content';
import Login from './components/Content/Login/Login';
import AuthContext from './components/authcontext';
import { useContext } from 'react';
function App() {
  const ctx=useContext(AuthContext);

  return (
  <>
   {!ctx.isLoggedIn && <Login/>}
  {ctx.isLoggedIn && <Content/>}
    
    
  
   </>
  );
}

export default App;

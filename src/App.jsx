import PasswordCreate from './Components/PasswordCreate';
import PasswordList from './Components/PasswordList';
import PostListProvider from './Store/PasswordStore';
import PasswordKeeper from './Components/PasswordKeeper';
import PasswordSearch from './Components/PasswordSearch';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  

  return (
    <PostListProvider>
  
    <div className='createPassword' >
      <div>
        <PasswordCreate></PasswordCreate>
        <PasswordList></PasswordList>
        </div>
    
      <div className='password-keeper'>
        <PasswordKeeper></PasswordKeeper>
        <PasswordSearch></PasswordSearch>
      </div>
    </div>
    <div>
    
    </div>
    
    </PostListProvider>
  )
}

export default App

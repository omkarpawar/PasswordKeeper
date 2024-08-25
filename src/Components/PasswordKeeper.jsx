import { useContext } from "react";
import {PostList} from '../Store/PasswordStore'

const PasswordKeeper=()=>{
  const {passwordList}=useContext(PostList)
  return(
    <div>
      <h1>Password Keeper</h1>
      <p>Total Passwords:{passwordList.length}</p>

      
    </div>
  )
}
export default PasswordKeeper;
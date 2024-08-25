import { useContext, useState } from "react";

import { PostList } from "../Store/PasswordStore";

const PasswordList=()=>{

  const {passwordList,deletePassword}=useContext(PostList)
  
  
  return(
    <div className="passwordList">
      <h6>ALL Passwords</h6>
      <hr />
      <ul class="list-group">
        
        {passwordList.map((pass,index)=><li class="list-group-item" key={index}>{pass.title} - {pass.password}

        <button type="button" class="btn btn-primary delete-btn">Edit</button>
        <button type="button" class="btn btn-danger delete-btn" onClick={()=>deletePassword(index)} >Delete</button>
        </li>)}

      </ul>
    </div>
  )
}
export default PasswordList;
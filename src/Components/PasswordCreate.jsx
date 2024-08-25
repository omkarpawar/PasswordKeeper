import { useContext, useRef } from "react";
import { PostList } from "../Store/PasswordStore";

const PasswordCreate=()=>{

  const {addPassword}=useContext(PostList)
  
  const titleElement=useRef()
  const passwordElement=useRef()
  
  const formSubmitHandler=(event)=>{
      event.preventDefault()

      const title=titleElement.current.value;
      const password=passwordElement.current.value;

      addPassword(title,password)

      titleElement.current.value="";
      passwordElement.current.value="";
  }

  return(
  <>
    <form className="form" onSubmit={formSubmitHandler}>

      <div class="mb-3">
        <label htmlFor="title" class="form-label">Title</label>
        <input type="text" ref={titleElement} class="form-control" id="title"/>  
      </div>

      <div class="mb-3">
        <label htmlFor="password" class="form-label">Password</label>
        <input type="text" ref={passwordElement} class="form-control" id="password"/>  
      </div>

      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  
  </>
  )
}

export default PasswordCreate;
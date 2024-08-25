import { createContext, useReducer } from "react";

export const PostList=createContext({
  passwordList:[],
  addPassword:()=>{},
  deletePassword:()=>{},
})


const passwordListReducer=(currList,action)=>{
  let newList =currList;
  if(action.type==='DELETE_POST'){
    newList=currList.filter((post,index)=>index !== action.payload.postId)
  }else if(action.type==='ADD_POST'){
    newList=[action.payload,...currList]
  }
  return newList;
}


const PostListProvider=({children})=>{

  const [passwordList,dispatchPasswordList]=useReducer(passwordListReducer,List)

  const addPassword=(title,password)=>{
    dispatchPasswordList({
      type:'ADD_POST',
      payload:{
        title:title,
        password:password,
      },
    })

  }

  const deletePassword=(postId)=>{
    dispatchPasswordList({
      type:'DELETE_POST',
      payload:{
        postId,
      },
    })
  }

  return <PostList.Provider value={{passwordList,addPassword,deletePassword}}>{children}</PostList.Provider>
}

const List=[
  {
  title:"omkar",
  password:"pawar",
  },
  {
    title:"mohit",
    password:"pawar",
  },
]

export default PostListProvider;
import React, { createContext, FC, ReactNode, useContext, useState } from "react";

type post={
    post:boolean,
    setPost:React.Dispatch<React.SetStateAction<boolean>>
}
type child={
    children:ReactNode
}
export const shadowContext=createContext<post>({} as post)



const ShadowProvider=({children}:child)=>{
    const [post,setPost]=useState(false)
    return(
        <shadowContext.Provider value={{post,setPost}}>
            {children}
        </shadowContext.Provider>
    )
}
export const useShadowProvider=()=>{
    return useContext(shadowContext)
}
export default ShadowProvider
import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const[isSidebarOpen, setIsSIdebarOpen]=useState(false)
    const[isModalOpen,setIsModalOpen] = useState(false)

    const openSidebar=()=>{
        setIsSIdebarOpen(true)
    }
    const closeSidebar=()=>{
        setIsSIdebarOpen(false)
    }
    const openModal=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
        setIsModalOpen(false)
    }
    return <AppContext.Provider 
    value={{isModalOpen,isSidebarOpen,openModal,openSidebar,closeModal,closeSidebar}}>
        {children}
    </AppContext.Provider>
}

//Custom Hook
export const useGlobalContext=()=>{
    return useContext(AppContext)
} 

export{AppContext,AppProvider}
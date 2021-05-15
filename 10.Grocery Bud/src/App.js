import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage=()=>{
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}
function App() {
  const [name,setName] = useState('')
  const[list,setList] = useState(getLocalStorage())
  const[isEdititng,setIsEditing]=useState(false)
  const[editID,setEditID] = useState(null)
  const[alert,setAlert] = useState({show:false, msg:'', type:''}) 
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!name){
      //display Alert
      showAlert(true,"Please Enter a valid answer","danger")
    }
    else if(name && isEdititng){
      //deal with edit
      setList(list.map((item)=>{
        if(item.id===editID){
          return {...item,title:name}
        }
        return item
      }))
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true,"Edit Successfull","success")
    }
    else{
      //show alert
      showAlert(true,"New Item Added","success")
      const newItem = {id: new Date().getTime().toString(), title:name}
      setList([...list,newItem])
      setName('')
    }
  }
  const showAlert=(show=false,msg="",type="")=>{
    setAlert({show,type,msg})
  }

  const clearList=()=>{
    showAlert(true,'Empty List','danger')
    setList([])
  }

  const removeItem = (id) =>{
    showAlert(true,'Item Deleted','danger')
    setList(list.filter((item)=>item.id!==id))
  } 

  const editItem=(id)=>{
    const specificItem = list.find((item)=>item.id===id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])
  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert = {showAlert} list ={list}/>}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="e.g eggs" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type="submit" className="submit-btn">
          { isEdititng ? 'edit': 'submit'}
        </button>
      </div>
    </form>
    {list.length>0 && (
    <div className="grocery-container">
      <List items={list} removeItem = {removeItem} editItem ={editItem}/>
      <button className="clear-btn" onClick={clearList}>Clear Items</button>
    </div>
      )}
  </section>
}

export default App

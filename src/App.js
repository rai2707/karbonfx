import React from "react";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import "../src/components/Header/Header.css"

const App = () =>{
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return(
    <div>
  { isModalOpen && <div className="overlay"></div>}
    <Header/>
    <UserList setIsModalOpen = {setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  )
}
export default App;
import React, {useState, useEffect} from "react";
import './UserList.css';
import UserCard from "../UserCard/UserCard";
import AddUser from "../AddUser/AddUser";
import Pagination from "../Pagination/Pagination";

const UserList = ({setIsModalOpen}) =>{
    const [allUsers, setAllUsers] = useState([])
    const [isShowAddUser, setIsShoeAduser] = useState(false)
    const [selectedUser, setSelectedUser] = useState({})
    const [modalStr, setModalStr] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
   
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        if (storedUsers) {
          setAllUsers(storedUsers);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("users", JSON.stringify(allUsers));
      }, [allUsers.length]);

      const openModal = (modalFor, selectUser) => {
        setSelectedUser(selectUser)
        setIsShoeAduser(true)
        setModalStr(modalFor)
        setIsModalOpen(true)
      }

      const deleteUser = (id) => {
        const filteredUsers = allUsers.filter((user => user.id !== id))
        setAllUsers(filteredUsers)
      }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPage = indexOfLastPost - postPerPage;
    const currentUserList = allUsers.slice(indexOfFirstPage, indexOfLastPost);
    

    const getCurrentPageNumber = (currentPage) => {
        console.log(currentPage);
        setCurrentPage(currentPage);
    }

    return(
        <div>
        <div className="list_userss">
        <div className="list_users">
            <h3>LIST OF USERS</h3>
            <button onClick={() => openModal("add")} className="btn_add_users">ADD USERS</button>
        </div>
        <div className="list_users_container">
        {currentUserList.map((elem) => (
            <div key={elem.id}>
                <UserCard 
                elem = {elem}
                openModal={openModal}
                deleteUser= {deleteUser}
                />
            </div>
            ))}
        </div>
        <div className="modal">
            {isShowAddUser && <AddUser setIsModalOpen={setIsModalOpen} selectedUser={selectedUser} modalStr={modalStr} setIsShoeAduser={setIsShoeAduser} allUsers= {allUsers} setAllUsers = {setAllUsers} />}
        </div>
        <div className="list_pagination">
        {allUsers.length && <Pagination postPerPage={postPerPage} totalPosts={allUsers} getCurrentPageNumber={getCurrentPageNumber} />}
        </div>
        </div>
        </div>
    )
}
export default UserList;
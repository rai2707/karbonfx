import React, { useState, useEffect } from "react";
import "./Add.css";

const AddUser = (props) => {
    const {setIsModalOpen ,selectedUser ,allUsers, setAllUsers, setIsShoeAduser, modalStr} = props
    const isEdit = modalStr === "edit"
  const [formData, setFormData] = useState({
    name: "",
    age: null,
    date:null,
    food: "",
    gender: "",
    hobbies: "",

  });

  useEffect(() => {
    if(isEdit){
        setFormData(selectedUser)
    }
  },[])

  const inputHandler = (event) => {
    console.log(event.target.value);
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    const newUser = { ...formData, id: Date.now() };
    if(newUser.name === "") {
        setIsShoeAduser(false)
        setIsModalOpen(false)
        return
    }
    if (isEdit) {
        const updatedUsers = allUsers.map((user) =>
          user.id === selectedUser.id ? newUser : user
        );
        setAllUsers(updatedUsers);
        setIsShoeAduser(false);
        setIsModalOpen(false)
        return
      }
    setAllUsers([...allUsers, newUser]);
    console.log(formData);
    setIsShoeAduser(false)
    setIsModalOpen(false)
  }

  
  const addUser = () => {
    return (
      <form onSubmit={submitHandler}>
        <div className="main_form">
          <h2>ADD USER</h2>
          <div className="main_form_div">
            <div></div>
            <div className="form_first_section">
              <div className="name_input">
                <label>NAME</label>
                <br />
                <input type="text" name="name" onChange={inputHandler} />
              </div>
              <div className="date_input">
                <label>DOB</label>
                <br />
                <input type="date" name="date" onChange={inputHandler} />
              </div>
              <div className="food_input">
                <label>FOVOURITE FOOD</label>
                <br />
                <select name="food" onChange={inputHandler}>
                  <option value="PIZZA">PIZZA</option>
                  <option value="BURGER">BURGER</option>
                  <option value="PASTA">PASTA</option>
                </select>
              </div>
            </div>
            <div className="form_second_section">
              <div className="age_input">
                <label>AGE</label>
                <br />
                <input type="number" name="age" onChange={inputHandler} />
              </div>
              <div className="gender_input">
                <label>GENDER</label>
                <div>
                <label htmlFor="male">MALE</label>
                    <input type="radio"
                    id="male"
                    name="gender"
                  value="male"
                  onChange={inputHandler}/>
                
                <label htmlFor="female">FEMALE</label>
                    <input type="radio"
                    id="female"
                    name="gender"
                  value="FEMALE"
                  onChange={inputHandler}/>
                </div>
                
              </div>
              <div className="hobbies_input">
                <label>HOBBIES</label>
                <br />
                <textarea name="hobbies" rows={10} cols={30} onChange={inputHandler} />
              </div>
              <div className="add_form_btn">
                <button onClick={()=> {
                    setIsModalOpen(false)
                    setIsShoeAduser(false)
                }} className="form_cancel_btn">CANCEL</button>
                <button type="submit" className="form_submit_btn">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const editUser = () => {
    return(
        <form onSubmit={submitHandler}>
        <div className="main_form">
          <h2>EDIT USER</h2>
          <div className="main_form_div">
            <div></div>
            <div className="form_first_section">
              <div className="name_input">
                <label>NAME</label>
                <br />
                <input type="text" name="name" onChange={inputHandler} value={formData.name} />
              </div>
              <div className="date_input">
                <label>DOB</label>
                <br />
                <input type="date" name="date" onChange={inputHandler} value={formData.date} />
              </div>
              <div className="food_input">
                <label>FOVOURITE FOOD</label>
                <br />
                <select name="food" onChange={inputHandler}>
                  <option value="PIZZA">PIZZA</option>
                  <option value="BURGER">BURGER</option>
                  <option value="PASTA">PASTA</option>
                </select>
              </div>
            </div>
            <div className="form_second_section">
              <div className="age_input">
                <label>AGE</label>
                <br />
                <input type="number" name="age" onChange={inputHandler} value={formData.age} />
              </div>
              <div className="gender_input">
                <label>GENDER</label>
                <div>
                <label htmlFor="Male">MALE</label>
                    <input type="radio"
                    id="male"
                    name="gender"
                  value="male"
                  checked = {isEdit && formData.gender === "male"}
                  onChange={inputHandler}/>
                
                <label htmlFor="female">FEMALE</label>
                    <input type="radio"
                    id="female"
                    name="gender"
                  value="female"
                  checked = {isEdit && formData.gender === "female"}
                  onChange={inputHandler}/>
                </div>
                
              </div>
              <div className="hobbies_input">
                <label>HOBBIES</label>
                <br />
                <textarea name="hobbies" rows={10} cols={30} onChange={inputHandler} value={formData.hobbies}/>
              </div>
              <div className="add_form_btn">
                <button onClick={()=> {
                    setIsModalOpen(false)
                    setIsShoeAduser(false)
                }} className="form_cancel_btn">CANCEL</button>
                <button type="submit" className="form_submit_btn">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  };

  const viewUser = (selectedUser) => {
    return(
        <form onSubmit={submitHandler}>
        <div className="main_form">
          <h2>VIEW USER</h2>
          <div className="main_form_div">
            <div></div>
            <div className="form_first_section">
              <div className="name_input">
                <label>NAME</label>
                <br />
                <input type="text" name="name" value={selectedUser.name} />
              </div>
              <div className="date_input">
                <label>DOB</label>
                <br />
                <input type="date" name="date" value={selectedUser.date} />
              </div>
              <div className="food_input">
                <label>FOVOURITE FOOD</label>
                <br />
                <select name="food">
                  <option value="PIZZA">PIZZA</option>
                  <option value="BURGER">BURGER</option>
                  <option value="PASTA">PASTA</option>
                </select>
              </div>
            </div>
            <div className="form_second_section">
              <div className="age_input">
                <label>AGE</label>
                <br />
                <input type="number" name="age" value={selectedUser.age} />
              </div>
              <div className="gender_input">
                <label>GENDER</label>
                <div>
                <label htmlFor="male">MALE</label>
                    <input type="radio"
                    id="male"
                    name="gender"
                  value="MALE"
                  checked = {selectedUser.gender === "male"}
                  />
                
                <label htmlFor="female">FEMALE</label>
                    <input type="radio"
                    id="female"
                    name="gender"
                  value="FEMALE"
                  checked = {selectedUser.gender === "female"}
                  />
                </div>
                
              </div>
              <div className="hobbies_input">
                <label>HOBBIES</label>
                <br />
                <textarea name="hobbies" rows={10} cols={30} value={selectedUser.hobbies} />
              </div>
              <div className="add_form_btn">
                <button onClick={()=> {
                    setIsModalOpen(false)
                    setIsShoeAduser(false)
                }} className="form_close_btn">CLOSE</button>
                
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  };
  console.log("modalStr", modalStr);
  return (
    <>
      {modalStr === "edit" && editUser(selectedUser)}
      {modalStr === "view" && viewUser(selectedUser)}
      {modalStr === "add" && addUser()}
    </>
  );
};

export default AddUser;

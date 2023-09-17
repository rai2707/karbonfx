import React from "react";
import './UserCard.css';

const UserCard = (props) =>{
    const {name, age, date, food, gender, hobbies, id} = props.elem;
    const colorCss = age < 25 ? "green" : age >= 25 && age < 50 ? "purple" : "orange"
    return(
        <div className="usercard_main_div">
        <div className="section_one">
            <h3 className="section_one_name">{name.toLocaleUpperCase()}</h3>
            <div className={colorCss}></div>
        </div>
        <div className="section_two">
        <div className="section_two_age">
        <p className="section_two_ptag">AGE:</p>
        <h5 className="section_two_htag">{age}</h5>
        </div>
        <div className="section_two_dob">
        <p className="section_two_ptag">DOB:</p>
        <h5 className="section_two_htag">{date}</h5>
        </div>
        <div className="section_two_gender">
        <p className="section_two_ptag">GENDER:</p>
        <h5 className="section_two_htag">{gender.toLocaleUpperCase()}</h5>
        </div>
        <div className="section_two_food">
        <p className="section_two_ptag">FOOD:</p>
        <h5 className="section_two_htag">{food}</h5>
        </div>
        <div className="section_two_hobbies">
        <p className="section_two_ptag">HOBBIES:</p>
        <h5 className="section_two_htag">{hobbies}</h5>
        </div>

        </div>
        <div className="section_three">
        <button onClick={() => props.deleteUser(id)} className="delete_btn">DELETE</button>
        <button onClick={() => props.openModal("view", props.elem)} className="view_btn">VIEW</button>
        <button onClick={() => props.openModal("edit", props.elem)} className="edit_btn">EDIT</button>

        </div>
            
        </div>
    )
}
export default UserCard;
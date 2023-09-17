import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import "./Pagination.css"
const Pagination = ({ postPerPage, totalPosts, getCurrentPageNumber }) => {
  const [selecetdPage, setSelectedPage] = React.useState(1)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts.length / postPerPage); i++) {
      pageNumbers.push(i);
      
    }
    const select = pageNumbers.find(num => num === selecetdPage)
    const clickHandler = (number) => {
      setSelectedPage(number)
      getCurrentPageNumber(number)
    }
  
    return (
      <nav className="navigation">
        <ul className="pagination">
        <AiOutlineArrowLeft/>
          {pageNumbers.map((number) => (
            
            <li
              key={number}
              onClick={() => clickHandler(number)}
              className={selecetdPage === number ? "page-link selected" : "page-link"}
            >
              {number}
            </li>
            
          ))}
          <AiOutlineArrowRight/>
        </ul>
        
        
      </nav>
    );
  };
  
  export default Pagination;
  
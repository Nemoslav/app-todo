import React from "react";



const Paginator = (props) => {
    let content = []
    
    for(let i = 0; i < props.pages; i++){
content.push(<li className={(props.currentPage === i+1) ? "active" : "passiv"} onClick={() => props.setPage(i+1)}>{i+1}</li>)
    }
    return(
        <ul>{
           content
         }</ul>
    )
}
export default Paginator;

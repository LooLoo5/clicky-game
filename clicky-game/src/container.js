import React from "react";


function container(props) {
    const div = {width:"12rem", margin:"1rem 1rem"};
    const img = {height:"8rem"};
    return (
        <div className="card col-4 float-left" style ={div} >
            <img onClick = {props.onClick} className="card-img-top" src={props.source} id = {props.id} alt="" style={img}></img>
        </div>
    );
}

export default container;
import React from "react";
import "./Results.css";
const Results = props => (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">{props.title}</h3>
        </div>
        <div className="panel-body">   
            <div className="container"> 
                <button type="button" className={props.iconToShow} onClick={()=> props.clickHandler(props.articleID)}>{props.linktitle}</button>
                <a className="btn btn-default resultsbutton" href={props.url} target={props.linktarget} role="button">View Article</a>
            </div>
        </div>
    </div>
)

export default Results;
import React from "react";
import "./Results.css";
const Results = props => (
    
    <h3 className="display-3">
        <span className="label label-primary">{props.index}</span>
        <strong> {props.title}</strong>
        <span className={props.iconToShow} title={props.linktitle} onClick={()=> props.findArticle(props.articleID)}></span>
    </h3>
    
)

export default Results;
import React from "react";
import "./Results.css";
const Results = props => (
    
    <h3 className="display-3">
        <span className="label label-primary">{props.index}</span>
        <strong> {props.title}</strong>
        <span className="glyphicon glyphicon-save saveicon pull-right" title={props.linktitle} onClick={()=> props.findArticle(props.articleID)}></span>
    </h3>
    
)

export default Results;
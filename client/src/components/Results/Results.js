import React from "react"
const style = {
    cardWidth: {
        width: "18rem"
    }
}
const Results = props => (
    <div className="card col-md-12 mb-4" style={style.cardWidth}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <a href="" className="card-link">Card link</a>
            <a href={props.url} className="card-link" target={props.target}>View Article</a>
        </div>
    </div>
)

export default Results;
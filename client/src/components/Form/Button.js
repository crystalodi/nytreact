import React from "react";

export const Button = props => (
    <button className="btn btn-primary" {...props}>{props.children}</button>
)

import React from "react";

export default function Password(props) {
    return (
        <div className="password-container">
            <span className="password">{props.password}</span>
            <button className="btn-copy" onClick={() => navigator.clipboard.writeText(props.password)}>
                <i className="far fa-copy copy"></i>
            </button>
        </div>
    )
}
import React from "react";

export default function Form(props) {
    return (
        <div className="form-container">
            <div className="form-group">
                <label htmlFor="length">Character Length <span className="length-span">{props.length}</span></label>
                <input 
                    type="range"
                    min={6} max={15}
                    id="length"
                    name="length"
                    onChange={props.handleChange}
                    value={props.length}
                 />
            </div>
            <div className="form-group">
                <input 
                    type="checkbox"
                    id="lowerCase"
                    name="lowerCase"
                    onChange={props.handleChange}
                    checked={props.lowerCase}
                 />
                 <label htmlFor="lowerCase">Include Lowercase Letters</label>
            </div>
            <div className="form-group">
                <input 
                    type="checkbox"
                    id="upperCase"
                    name="upperCase"
                    onChange={props.handleChange}
                    checked={props.upperCase}
                 />
                 <label htmlFor="upperCase">Include Uppercase Letters</label>
            </div>
            <div className="form-group">
                <input 
                    type="checkbox"
                    id="numbers"
                    name="numbers"
                    onChange={props.handleChange}
                    checked={props.numbers}
                 />
                 <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="form-group">
                <input 
                    type="checkbox"
                    id="special"
                    name="special"
                    onChange={props.handleChange}
                    checked={props.special}
                 />
                 <label htmlFor="special">Include Special Characters</label>
            </div>
            <button className="btn-submit" onClick={props.getPassword}>GENERATE</button>
        </div>
    )
}
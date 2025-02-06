import React from "react";

function Checkbox({ name, value, checked, onChange, label, id }) {
    return (
        <li>
            <input 
                id={id} 
                type="checkbox" 
                name={name} 
                value={value} 
                checked={checked}
                onChange={onChange} 
            />
            <label htmlFor={id}>
                {label}
            </label>
        </li>
    );
}


function CheckboxGroup({ name, value = [], onChange, values, headLine }) {
    return (
        <div className="form__group">
            <h3>{headLine}</h3>
            <ul>
                {values.map((item, index) => {
                    return (
                        <Checkbox
                            key={index}
                            name={name}
                            value={item}
                            checked={value.includes(item)}
                            onChange={onChange}
                            label={item}
                            id={`${name}-${index}`}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default CheckboxGroup;
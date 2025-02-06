import React from "react";

function RadioButton({name, value, checked, onChange, label, id}) {
    return(
        <li >
            <input 
                id={id} 
                type="radio" 
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

function RadioGroup({name, value, onChange, values, headLine}) {
    return(
        <div className="form__group radio">
            <h3>{headLine}</h3>
            <ul>
                {values.map((item, index) => {
                    const isChecked = String(value) === String(item);
                    return (
                        <RadioButton
                            key={index}
                            name={name}
                            value={String(item)}
                            checked={isChecked}
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

export default RadioGroup;




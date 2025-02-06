import React from "react";

function TextInput({ name, value, onChange, label }) {
    return (
        <label>
            {label}
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default TextInput;
import React from "react";

function TextArea({ name, value, rows, cols, onChange, headLine }) {
    return (
        <label>
            {headLine}
            <textarea
                name={name}
                cols={cols}
                rows={rows}
                value={value}
                onChange={onChange}
            ></textarea>
        </label>
    );
}

export default TextArea;
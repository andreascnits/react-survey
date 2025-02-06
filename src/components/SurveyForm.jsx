import React from "react";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
function SurveyForm({ handleChange, formData, handleSubmit, isEditing }) {
    return(
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
                <RadioGroup
                    name="colour"
                    value={formData.colour}
                    onChange={handleChange}
                    values={[1,2,3,4]}
                    headLine="How do you rate your rubber duck colour?"
                />
                <CheckboxGroup
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    values={["swimming", "bathing", "chatting", "I dont"]}
                        headLine="How do you like to spend time with your rubber duck"
                    
                />
            <TextArea
                name="review"
                value={formData.review}
                rows="10"
                cols="30"
                onChange={handleChange}
                headLine="What else have you got to say about your rubber duck?"
            />
            <TextInput
                name={"username"}
                value={formData.username}
                onChange={handleChange}
                label={"Put your name here (if you feel like it):"}
            />
            <TextInput
                name={"email"}
                value={formData.email}
                onChange={handleChange}
                label={"Leave us your email pretty please??"}/>

            <input className="form__submit" type="submit" value= {isEditing ? "Save Changes!" : "Submit Survey!" } />
        </form>
    );
}

export default SurveyForm;
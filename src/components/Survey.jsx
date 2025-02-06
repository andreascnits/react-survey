import { useState } from "react";
import SurveyForm from "./SurveyForm";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    colour: "",
    time: [],
    review: "",
    username: "",
    email: "",
  });
  const [answersList, setAnswersList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setFormData({
      colour: "",
      time: [],
      review: "",
      username: "",
      email: "",
    });
    setEditingIndex(null);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    setFormData((prev) => {
      if (type === "checkbox") {
        if (checked) {
          return { ...prev, time: [...prev.time, value] };
        } else {
          return {
            ...prev,
            time: prev.time.filter((time) => time !== value),
          };
        }
      }
      return { ...prev, [name]: value };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      setAnswersList(prev => {
        const newList = [...prev];
        newList[editingIndex] = formData;
        return newList;
      });
    } else {
      setAnswersList(prev => [...prev, formData]);
    }
    resetForm();
  }

  const handleStartEdit = (index) => {
    setEditingIndex(index);
    setFormData(answersList[index]);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
        answersList={answersList}
        handleStartEdit={handleStartEdit}
        />
      </section>
      <section className="survey__form">
        <SurveyForm
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        isEditing={editingIndex !== null}
        />
      </section>
    </main>
  );
}

export default Survey;

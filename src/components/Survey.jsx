import { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchAnswers();
  }, []);

  const fetchAnswers = async () => {
      const response = await fetch('http://localhost:3000/answers');
      const data = await response.json();
      setAnswersList(data);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (editingIndex !== null) {
      try {
        const response = await fetch(`http://localhost:3000/answers/${answersList[editingIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          fetchAnswers();
        }
      } catch (error) {
        console.error('Error updating answer:', error);
      }
    } else {
      try {
        const response = await fetch('http://localhost:3000/answers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          fetchAnswers();
        }
      } catch (error) {
        console.error('Error creating answer:', error);
      }
    }
    
    resetForm();
  };

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

import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, handleStartEdit }) {
  console.log("Inside AnswersList: ", answersList);

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem 
          answerItem={answerItem} 
          key={i} 
          index={i}
          handleStartEdit={handleStartEdit} 
        />
      ))}
    </ul>
  );
}

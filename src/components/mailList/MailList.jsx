// mailList.js
import React, { useState } from "react";
import "./mailList.css";
import Modal from "./modal";

const MailList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const questionsAndAnswers = {
    question1: {
      question: "Question 1: What is this?",
      answer: "Answer 1: This is an example answer for question 1.",
    },
    question2: {
      question: "Question 2: How does it work?",
      answer: "Answer 2: It works by...",
    },
    question3: {
      question: "Question 3: Why use it?",
      answer: "Answer 3: There are many reasons to use it...",
    },
    question4: {
      question: "Question 4: Where can I find more information?",
      answer: "Answer 4: You can find more information at...",
    },
    question5: {
      question: "Question 5: When was it created?",
      answer: "Answer 5: It was created in...",
    },
  };

  const openModal = (questionKey) => {
    setSelectedQuestion(questionKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedQuestion("");
    setIsModalOpen(false);
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button onClick={() => openModal("question1")}>Subscribe</button>
      </div>
      {isModalOpen && (
        <Modal
          question={questionsAndAnswers[selectedQuestion].question}
          answer={questionsAndAnswers[selectedQuestion].answer}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MailList;

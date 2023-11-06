const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Madrid", "Paris"],
      correctAnswer: "Paris",
    },
    // Add more questions here
  ];
  
  function startQuiz() {
    window.location.href = "quiz-questions.html";
    localStorage.setItem("quizQuestions", JSON.stringify)
  }

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve quiz questions from localStorage
    const quizQuestions = JSON.parse(localStorage.getItem("quizQuestions"));

    // Display the questions and options
    const quizQuestionsContainer = document.getElementById("quiz-questions");

    if (quizQuestions) {
        quizQuestions.forEach((question, index) => {
            const questionElement = document.createElement("div");
            questionElement.classList.add("question");

            const questionText = document.createElement("p");
            questionText.textContent = `Question ${index + 1}: ${question.question}`;

            const optionsList = document.createElement("ul");

            question.options.forEach((option) => {
                const optionItem = document.createElement("li");
                optionItem.textContent = option;
                optionsList.appendChild(optionItem);
            });

            questionElement.appendChild(questionText);
            questionElement.appendChild(optionsList);

            quizQuestionsContainer.appendChild(questionElement);
        });
    } else {
        quizQuestionsContainer.innerHTML = "<p>No quiz questions found.</p>";
    }
});

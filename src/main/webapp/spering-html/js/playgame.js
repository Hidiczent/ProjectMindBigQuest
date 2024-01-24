// Assume you have a function to fetch data from CreateQuestion file or database
async function fetchData() {
    // Fetch data from CreateQuestion file or database
    // For simplicity, let's assume it returns a JSON array
    const response = await fetch('path/to/CreateQuestion.json');
    const data = await response.json();
    return data;
}

// Function to display questions on the page
async function displayQuestions() {
    const questionContainer = document.getElementById('question-container');
    const questionsData = await fetchData();

    questionsData.forEach((questionData, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${questionData.question}</p>
            <select id="answer-${index}" class="answer-select">
                ${questionData.answers.map((answer, answerIndex) => `<option value="${answerIndex}">${answer}</option>`).join('')}
            </select>
        `;
        questionContainer.appendChild(questionElement);
    });
}

// Call the function to display questions
displayQuestions();

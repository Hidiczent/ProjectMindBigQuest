document.addEventListener('DOMContentLoaded', function () {
    const questionList = document.getElementById('question-list');
    function addQuestion() {
        const li = document.createElement('li');

        li.innerHTML = `
        <form id="questionForm" method="POST">
        <input type="text" placeholder="Enter your question" class="Question" id="QuestionText">
        <ul class="answer-list">
            <li>
                <input type="text" placeholder="Add answer 1" id="input-answer1">
                <input type="radio" name="correctAnswer" value="1">
            </li>
            <li>
                <input type="text" placeholder="Add answer 2" id="input-answer2">
                <input type="radio" name="correctAnswer" value="2">
            </li>
            <li>
                <input type="text" placeholder="Add answer 3" id="input-answer3">
                <input type="radio" name="correctAnswer" value="3">
            </li>
            <li>
                <input type="text" placeholder="Add answer 4" id="input-answer4">
                <input type="radio" name="correctAnswer" value="4">
            </li>
        </ul>
    </form>
    
        `;
        questionList.appendChild(li);
    }

    function removeQuestion() {
        const li = document.querySelector('#question-list li:last-child');
        if (li) {
            li.remove();
        }
    }
    function editQuestion() {
        const li = document.querySelector('#question-list li:last-child');
        if (li) {
            const questionInput = li.querySelector('.Question');
            const answerInputs = li.querySelectorAll('.answer-list li input');

            // Check if the question has any content
            if (questionInput.value.trim() !== '') {
                // Edit the question text
                const newQuestionText = prompt('Edit the question:', questionInput.value);
                if (newQuestionText !== null) {
                    questionInput.value = newQuestionText;

                    // Edit answer texts
                    answerInputs.forEach((answerInput, index) => {
                        const newAnswerText = prompt(`Edit answer ${index + 1}:`, answerInput.value);
                        if (newAnswerText !== null) {
                            answerInput.value = newAnswerText;
                        }
                    });
                }
            } else {
                alert('No question to edit.');
            }
        }
    }
    function saveQuestion() {
        // ดึงค่าคำถามจากฟอร์ม
        const questionInput = document.getElementById('questionInput');
        const question = questionInput.value;

        // ตรวจสอบว่ามีคำถามที่ป้อนหรือไม่
        if (question.trim() === '') {
            alert('ກາລຸນາປ້ອນຄຳຖາມ');
            return;
        }

        // ดึงข้อมูลจาก localStorage (หากมี)
        let savedQuestions = JSON.parse(localStorage.getItem('questions')) || [];

        // เพิ่มคำถามใหม่เข้าไปในอาร์เรย์ข้อมูล
        savedQuestions.push(question);

        // บันทึกข้อมูลลงใน localStorage
        localStorage.setItem('questions', JSON.stringify(savedQuestions));

        // ล้างค่าในฟอร์มหลังจากบันทึก
        questionInput.value = '';

        // แสดงข้อความหลังจากบันทึก (ตัวอย่าง)
        alert('บันทึกคำถามเรียบร้อยแล้ว');
    }

    // ให้เรียกใช้ฟังก์ชันนี้เมื่อต้องการบันทึกคำถาม


    function createKahoot() {
        const questions = document.querySelectorAll('#question-list li');
        const kahootData = [];

        questions.forEach((questionElement, index) => {
            const questionText = questionElement.querySelector('input[type="text"]').value.trim();
            if (questionText !== '') {
                const answers = questionElement.querySelectorAll('.answer-list li input[type="text"]');
                const answerData = [];
                answers.forEach((answer) => {
                    const answerText = answer.value.trim();
                    if (answerText !== '') {
                        answerData.push(answerText);
                    }
                });

                kahootData.push({
                    question: questionText,
                    answers: answerData,
                });
            }
        });

        // Send kahootData to your server or process it as needed
        console.log(kahootData);
    }
    const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");


    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })

    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
    })

    // Expose functions for testing or future expansion
    window.addQuestion = addQuestion;
    window.removeQuestion = removeQuestion;
    window.editQuestion = editQuestion;
    window.createKahoot = createKahoot;
});
function submitForm() {
    const questionText = document.getElementById('QuestionText').value;
    const correctAnswer = document.querySelector('input[name="correctAnswer"]:checked');

    if (questionText && correctAnswer) {
        // ทำการเก็บข้อมูลและส่งไปที่เซิร์ฟเวอร์หรือทำการประมวลผลต่อไป
        const selectedAnswer = correctAnswer.value;
        console.log('Question:', questionText);
        console.log('Correct Answer:', selectedAnswer);
    } else {
        alert('ກາລຸນາປ້ອນຄຳຖາມແລະຄຳຕອບໃຫ້ຖືກຕ້ອງ');
    }
}
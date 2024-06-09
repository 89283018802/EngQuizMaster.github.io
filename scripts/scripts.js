document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const homeSection = document.getElementById('home');
    const testMenuSection = document.getElementById('test-menu');
    const testInfoSection = document.getElementById('test-info');
    const quizSection = document.getElementById('quiz');
    const resultsSection = document.getElementById('results');
    const aboutSection = document.getElementById('about');
    const programSection = document.getElementById('program');
    
    const buttons = {
        home: document.getElementById('home-btn'),
        testMenu: document.getElementById('test-menu-btn'),
        program: document.getElementById('program-btn'),
        about: document.getElementById('about-btn'),
        backToHome: document.getElementById('back-to-home'),
        backToMenu: document.getElementById('back-to-menu'),
        startTest: document.getElementById('start-test'),
        backToMain: document.getElementById('back-to-main'),
        startButton: document.getElementById('start-button')
    };

    let currentTestId = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;

    const showSection = (section) => {
        sections.forEach(sec => sec.classList.add('hidden'));
        section.classList.remove('hidden');
    };

    const loadQuestions = (testId) => {
        const testQuestions = questions[testId];
        currentQuestions = testQuestions.sort(() => Math.random() - 0.5); // Рандомно перемешиваем вопросы
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        displayQuestion();
    };

    const displayQuestion = () => {
        const question = currentQuestions[currentQuestionIndex];
        document.getElementById('current-question').innerText = currentQuestionIndex + 1;
        document.getElementById('total-questions').innerText = currentQuestions.length;
        document.getElementById('question-text').innerText = question.question;
        
        const answerOptions = document.getElementById('answer-options');
        answerOptions.innerHTML = "";
        question.options.forEach((option, index) => {
            const li = document.createElement('li');
            li.innerText = option;
            li.dataset.index = index;
            li.addEventListener('click', selectAnswer);
            answerOptions.appendChild(li);
        });
    };

    const selectAnswer = (e) => {
        const selectedOption = e.target;
        const selectedIndex = Number(selectedOption.dataset.index);
        if (selectedIndex === currentQuestions[currentQuestionIndex].correct) {
            correctAnswersCount++;
        }
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            showResults();
        }
    };

    const showResults = () => {
        document.getElementById('correct-answers').innerText = correctAnswersCount;
        document.getElementById('total-quiz-questions').innerText = currentQuestions.length;
        showSection(resultsSection);
        renderChart();
    };

    const renderChart = () => {
        const ctx = document.getElementById('result-chart').getContext('2d');
        const totalQuestions = currentQuestions.length;
        const incorrectAnswersCount = totalQuestions - correctAnswersCount;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Верные ответы', 'Неверные ответы'],
                datasets: [{
                    data: [correctAnswersCount, incorrectAnswersCount],
                    backgroundColor: ['#36a2eb', '#ff6384']
                }]
            }
        });
    };
 const testDescriptions = {
    1: {
        title: "Тест A1: Начальный",
        description: "Этот тест проверяет базовые знания английского языка для начинающих.",
        details: {
            description: "Этот тест предназначен для людей, только начинающих изучать английский язык. Уровень A1 свидетельствует о начальных знаниях языка, способных покрывать простейшие потребности общения.",
        }
    },
    2: {
        title: "Тест A2: Ниже среднего",
        description: "Этот тест предназначен для оценки уровня ниже среднего.",
        details: {
            description: "Этот тест оценивает язык, который используется в основных, повседневных контекстах. Уровень A2 – это следующий шаг после начального уровня.",
        }
    },
    3: {
        title: "Тест B1: Средний",
        description: "Проверяет знания английского языка на среднем уровне.",
        details: {
            description: "На этом уровне тестируемый может понимать и использовать язык в повседневных ситуациях и обсуждать знакомые темы.",
        }
    },
    4: {
        title: "Тест B2: Выше среднего",
        description: "Этот тест оценивает уровень выше среднего.",
        details: {
            description: "Пользователи языка на уровне B2 могут общаться уверенно и спонтанно с носителями языка.",         
        }
    },
    5: {
        title: "Тест C1: Продвинутый",
        description: "Для тех, кто имеет продвинутые знания английского.",
        details: {
            description: "На уровне C1 тестируемый способен использовать язык гибко и эффективно для социальных, академических и профессиональных целей.",         
        }
    },
    6: {
        title: "Тест C2: профессиональный уровень владения",
        description: "Обеспечивает оценку профессионального уровня владения.",
        details: {
            description: "На этом уровне тестируемый понимает практически все слышимое или читаемое с легкостью и может выразить себя спонтанно и точно.",
            
        }
    }
};
 testMenuSection.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            const testId = event.target.getAttribute('data-test-id');
            displayTestInfo(testId);
        }
    });

    function switchSection(targetSection) {
        sections.forEach((section) => {
            section.classList.add('hidden');
        });
        targetSection.classList.remove('hidden');
    }

    function displayTestInfo(testId) {
        const testNumberSpan = document.getElementById('test-number');
        const testDescriptionParagraph = testInfoSection.querySelector('p');
        
        testNumberSpan.textContent = testId;
       testDescriptionParagraph.innerHTML = `${testDescriptions[testId].details.description}`;

        switchSection(testInfoSection);
    }
    buttons.home.addEventListener('click', () => showSection(homeSection));
    buttons.testMenu.addEventListener('click', () => showSection(testMenuSection));
    buttons.program.addEventListener('click', () => showSection(programSection));
    buttons.about.addEventListener('click', () => showSection(aboutSection));
    buttons.backToHome.addEventListener('click', () => showSection(homeSection));
    buttons.backToMenu.addEventListener('click', () => showSection(testMenuSection));
    buttons.startButton.addEventListener('click', () => showSection(testMenuSection));

    const testItems = document.querySelectorAll('#test-menu li');
    testItems.forEach(item => {
        item.addEventListener('click', () => {
            currentTestId = item.dataset.testId;
            document.getElementById('test-number').innerText = currentTestId;
            showSection(testInfoSection);
        });
    });

    buttons.startTest.addEventListener('click', () => {
        showSection(quizSection);
        loadQuestions(currentTestId);
    });

    buttons.backToMain.addEventListener('click', () => showSection(homeSection));

    showSection(homeSection);

  // Показ регистрационной формы при клике на иконку профиля
const profileIcon = document.querySelector('.profile-icon'); // Иконка профиля
    const registrationForm = document.getElementById('registrationForm'); // Форма регистрации

    profileIcon.addEventListener('click', () => {
        registrationForm.classList.toggle('active'); // Показать или скрыть форму
    });

    // Скрыть форму при клике вне её области
    document.addEventListener('click', (event) => {
        if (!registrationForm.contains(event.target) && !profileIcon.contains(event.target)) {
            registrationForm.classList.remove('active');
        }
    });
});
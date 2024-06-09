// questions.js
const questions = {
    '1': [
        { 
            question: "Как называется столица Великобритании?", 
            options: ["London", "Paris", "Berlin", "Madrid"], 
            correct: 0 
        },
        { 
            question: "Как по-английски 'собака'?", 
            options: ["Cat", "Dog", "Bird", "Fish"], 
            correct: 1 
        },
		{ 
            question: "Какого цвета небо в ясный день?", 
            options: ["Green", "Blue", "Red", "Yellow"], 
            correct: 1 
        },
		{ 
            question: "Какое слово означает противоположное от 'большой'?", 
            options: ["Small", "Large", "Long", "Tall"], 
            correct: 0 
        },
		{ 
            question: "Какой из этих вариантов является фруктом?", 
            options: ["Potato", "Carrot", "Apple", "Cucumber"], 
            correct: 2 
        },
		{ 
            question: "Как пишется цифра 5 на английском?", 
            options: ["Fife", " Five", "Fiv", "Fyve"], 
            correct: 1 
        },
		{ 
            question: "Какое слово является прошедшим временем от 'go'?", 
            options: ["Went", "Goed", "Goes", "Gone"], 
            correct: 0 
        },
		{ 
            question: "Как по-английски 'молоко'?", 
            options: ["Water", "Milk", "Juice", "Tea"], 
            correct: 1 
        },
		{ 
            question: "Какое множественное число от 'child'?", 
            options: ["Childs", "Childes", "Children", "Childies"], 
            correct: 0 
        },
		{ 
            question: "Какой из этих вариантов является животным?", 
            options: ["Computer", "Elephant", "Desk", "Tree"], 
            correct: 0 
        },
		
        // Добавьте больше вопросов для теста 1
    ],
    '2': [
        { 
            question: "Какое из следующих предложений является правильным?", 
            options: ["I goes to school every day.", " I go to school every day.", "I going to school every day.", "I gone to school every day."], 
            correct: 1 
        },
		{ 
            question: "Какой из следующих глаголов правильно используется с местоимением 'she'?", 
            options: ["She run", "She runs", "She running", "She runned"], 
            correct: 1 
        },
		{ 
            question: "Какой вариант переводится как «Он не умеет плавать»?", 
            options: ["He do not can swim.", " He can not swim.", "He cannot swim.", "He did not swim."], 
            correct: 2 
        },
		{ 
            question: "Какой из этих глаголов неправильный?", 
            options: ["Play", "Work", "Give", "Dance"], 
            correct: 2 
        },
		{ 
            question: "Какое из следующих предложений правильно?", 
            options: ["They has a new car.", "They have a new car.", "They had a new car.", "hey having a new car."], 
            correct: 1 
        },
		{ 
            question: "Какой вариант правильно переводится как «Я вчера смотрел фильм»?", 
            options: ["I watches a movie yesterday.", "I am watching a movie yesterday.", " I watched a movie yesterday.", " I watching a movie yesterday."], 
            correct: 2 
        },
		{ 
            question: "Как правильно сказать «Она на кухне»?", 
            options: ["She on the kitchen.", "She at the kitchen.", " She in the kitchen.", " She into the kitchen."], 
            correct: 2 
        },
		{ 
            question: "Какое из предложений неправильно?", 
            options: ["We are going to the park.", "They are at home.", "She are my friend.", "You are right."], 
            correct: 2 
        },
		
        { 
            question: "Какой вариант в прошедшем времени от «read» произносится как «рэд»?", 
            options: ["Read", "Red", "Rode", " Reed"], 
            correct: 0 
        },
		{ 
            question: "Какое из следующих предложений правильно?", 
            options: ["There is a lot of cars.", "There are many cars.", "There are a lot of car.", " There is many cars."], 
            correct: 1 
        },
        // Добавьте больше вопросов для теста 2
    ],
	    '3': [
        // Вопросы для уровня B1
        { 
            question: "Choose the correct option: ___ a great actor!", 
            options: ["He's", "His", "He", "He is"], 
            correct: 0 
        },
        {
            question: "I've never been to ___ before.",
            options: ["France", "a France", "the France", "an France"],
            correct: 0
        },
        {
            question: "She ___ finish her homework before she goes out.",
            options: ["have to", "has to", "must to", "have"],
            correct: 1
        },
        {
            question: "When I was a child, I ___ play the piano.",
            options: ["could", "couldn't", "can", "can't"],
            correct: 0
        },
        {
            question: "We will go out as soon as it ___ raining.",
            options: ["stop", "stops", "stopping", "stopped"],
            correct: 1
        },
        {
            question: "I can't find my keys. I ___ have left them at work.",
            options: ["must", "might", "should", "mustn't"],
            correct: 1
        },
        {
            question: "She has lived here ___ she was born.",
            options: ["for", "since", "after", "before"],
            correct: 1
        },
        {
            question: "Which word is different from the others?",
            options: ["Apple", "Banana", "Carrot", "Grape"],
            correct: 2
        },
        {
            question: "I have ___ finished my project.",
            options: ["yet", "already", "still", "soon"],
            correct: 1
        },
        {
            question: "She ___ her homework by the time her mother gets home.",
            options: ["will finish", "will have finished", "finishes", "finished"],
            correct: 1
        }
    ],
    '4': [
        // Вопросы для уровня B2
        {
            question: "He insisted ___ paying for the meal.",
            options: ["on", "in", "at", "about"],
            correct: 0
        },
        {
            question: "If I had seen him, I ___ said hello.",
            options: ["will have", "would have", "could have", "have"],
            correct: 1
        },
        {
            question: "She didn't let me ___ what I was going to say.",
            options: ["to finish", "finishing", "finish", "finished"],
            correct: 2
        },
        {
            question: "The man ___ by the police is my neighbor.",
            options: ["arrested", "was arrested", "arresting", "is arrested"],
            correct: 0
        },
        {
            question: "You ___ better to take your coat with you. It's cold outside.",
            options: ["should", "had", "must", "would"],
            correct: 1
        },
        {
            question: "I suggest that he ___ the matter with a lawyer.",
            options: ["to discuss", "discussing", "discuss", "discusses"],
            correct: 2
        },
        {
            question: "Despite ___ the train, we still arrived on time.",
            options: ["missing", "miss", "to miss", "missed"],
            correct: 0
        },
        {
            question: "The book was so interesting that I couldn't put it ___ .",
           options: ["down", "off", "up", "over"],
            correct: 0
        },
        {
            question: "He no longer works here, ___ ?",
            options: ["does he", "is he", "did he", "has he"],
            correct: 0
        },
        {
            question: "The report needs ___ before the meeting.",
            options: ["to be finished", "to finish", "to be finishing", "finished"],
            correct: 0
        }
    ],
    '5': [
        // Вопросы для уровня C1
        {
            question: "I have never seen such a beautiful painting, ___ ?",
            options: ["have I", "haven't I", "did I", "didn't I"],
            correct: 0
        },
        {
            question: "It was essential that he ___ the documents before the meeting.",
            options: ["will read", "would read", "read", "reads"],
            correct: 2
        },
        {
            question: "Despite ___ warned about the traffic, he still arrived late.",
            options: ["to be", "being", "having", "been"],
            correct: 1
        },
        {
            question: "She denied ___ the money.",
            options: ["to take", "take", "taking", "to be taken"],
            correct: 2
        },
        {
            question: "Had they known about the storm, they ___ gone sailing.",
            options: ["wouldn't", "hadn't", "haven't", "wouldn't have"],
            correct: 3
        },
        {
            question: "No sooner had we arrived than it started raining.",
            options: ["hardly", "just", "precisely", "exactly"],
            correct: 0
        },
        {
            question: "By the time the movie started, we ___ our seats.",
            options: ["found", "had found", "find", "were finding"],
            correct: 1
        },
        {
            question: "Nobody knows the answer, ___ ?",
            options: ["do they", "does he", "don't they", "doesn't he"],
            correct: 0
        },
        {
            question: "It's high time you ___ your homework.",
            options: ["do", "did", "will do", "are doing"],
            correct: 1
        },
        {
            question: "Could you tell me where ___?",
            options: ["is the station", "the station is", "was the station", "the station was"],
            correct: 1
        }
    ],
    '6': [
        // Вопросы для уровня C2
        {
            question: "She suggested that he ___ see a doctor.",
            options: ["will", "would", "should", "shall"],
            correct: 2
        },
        {
            question: "What would you have done if you ___ the answer?",
            options: ["know", "knew", "have known", "had known"],
            correct: 3
        },
        {
            question: "There’s no point in ___ to convince him.",
            options: ["trying", "try", "to try", "tries"],
            correct: 0
        },
        {
            question: "Hardly had she left the house ___ it started to rain.",
            options: ["when", "than", "then", "and"],
            correct: 0
        },
        {
            question: "Were I to have known, I ___ told you.",
            options: ["will have", "would have", "would", "will"],
            correct: 1
        },
        {
            question: "He did it regardless ___ the consequences.",
            options: ["of", "with", "to", "at"],
            correct: 0
        },
        {
            question: "It looks as if they ___ the match.",
            options: ["are win", "have win", "will win", "were winning"],
            correct: 3
        },
        {
            question: "He went to the party ___ minded to have a good time.",
            options: ["open", "with opening", "openly", "open-minded"],
            correct: 3
        },
        {
            question: "Not until she had finished her homework ___ watch TV.",
            options: ["she could", "she could have", "could she", "could she have"],
            correct: 2
        },
        {
            question: "He has been working ___ for over a year now.",
            options: ["intermittent", "intermittently", "intermittentness", "intermitting"],
            correct: 1
        }
    ]
    // Добавьте вопросы для других тестов
};
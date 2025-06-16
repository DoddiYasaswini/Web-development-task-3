// Function to submit the quiz and display the score
function submitQuiz() {
    let score = 0;

    // Correct answers
    const answers = {
        q1: 'a', // Hyper Text Markup Language
        q2: 'c'  // color
    };

    // Get selected answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    // Validate and calculate score
    if (q1 && q1.value === answers.q1) score++;
    if (q2 && q2.value === answers.q2) score++;

    // Display result
    const result = document.getElementById('quizResult');
    result.innerHTML = `<strong>Your Score: ${score}/2</strong>`;
    result.style.color = 'green';
    result.style.marginTop = '10px';
}

// Function to fetch a joke from the Joke API
function getJoke() {
    const jokeDisplay = document.getElementById('jokeDisplay');

    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            jokeDisplay.innerHTML = `<em>${data.setup}</em><br><strong>${data.punchline}</strong>`;
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            jokeDisplay.innerHTML = "Sorry, couldn't fetch a joke right now.";
        });
}

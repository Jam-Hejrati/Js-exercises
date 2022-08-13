'use strict'

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );

        typeof answer === 'number' &&
        answer < this.answers.length &&
        this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        type === 'array' && console.log(this.answers)
        type === 'string' && console.log(`Poll results are ${this.answers.join(', ')}`);

    },
};
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));
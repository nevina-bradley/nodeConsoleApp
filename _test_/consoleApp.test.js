const {askQuestion} = require('../src/consoleApp.js');

//Mock readline and rl.question
const readline = require('readline');
jest.mock('readline');
const rl = {
  question: jest.fn(),
  close: jest.fn(),
};
readline.createInterface.mockReturnValue(rl);

describe('Favorite Pokemon Guessing Game', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle correct answers for both questions', () => {
    //Mock user input
    rl.question.mockImplementationOnce((question, callback) => {
      callback('eevee');
    });

    rl.question.mockImplementationOnce((question, callback) => {
      callback('umbreon');
    });

    //Mock console.log
    const consoleLogMock = jest.spyOn(console, 'log');

    askQuestion();

    expect(rl.question).toHaveBeenCalledTimes(2);
    expect(rl.close).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith("Nice, you're correct!");
    expect(consoleLogMock).toHaveBeenCalledWith("Nice, you're correct!");
    expect(consoleLogMock).toHaveBeenCalledWith('Try to guess my favorite eeveelution too!');
  });

  it('should handle incorrect answers for both questions', () => {
    //Mock user input
    rl.question.mockImplementationOnce((question, callback) => {
      callback('pikachu');
    });

    rl.question.mockImplementationOnce((question, callback) => {
      callback('jolteon');
    });

    //Mock console.log
    const consoleLogMock = jest.spyOn(console, 'log');

    askQuestion();

    expect(rl.question).toHaveBeenCalledTimes(2);
    expect(rl.close).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith("Nope, that isn't my favorite Pokemon, try again!");
    expect(consoleLogMock).toHaveBeenCalledWith("Nope, that isn't my favorite eeveelution, try again!");
  });
});

// HireView - Alexa Skill for Interview prepartion, Simulation for Job, College, Internships etc
// Done by Ganesh Kumar T K for Voice first Hackathon in Vashist.

/* eslint-disable  func-names */
/* eslint-disable  no-console */



const Alexa = require('ask-sdk-core');
const SKILL_NAME = "Hire View";

const GEN_QUESTION = "Here is your interview question: ";
const CODE_QUESTION = "Here is your coding question: ";
const TECH_QUESTION = "Here is your tech interview question: ";
const BUSINESS_QUESTION = "Here is your business interview question: ";
const COLLEGE_QUESTION = "Here is your college interview question: "


// When the user starts the skill
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = "Welcome to Hire View! You can ask for tips, questions, and full simulations for general, coding, technical, and business job or internship interviews as well as college interviews.";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hire View', speechText)
      .getResponse();
  },
};

// Interview Tip Functionality
// A random tip will be given to the user

const GetGeneralTipIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetGeneralTipIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * generalInterviewTips.length);
    var randTip = generalInterviewTips[randIndex];
    const speechText = randTip;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Interview Tip', speechText)
      .getResponse();
  },
};

const GetCodingTipIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetCodingTipIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * codingInterviewTips.length);
    var randTip = codingInterviewTips[randIndex];

    const speechText = randTip;
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Coding Interview Tip', speechText)
      .getResponse();
  },
};

const GetTechTipIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetTechTipIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * techInterviewTips.length);
    var randTip = techInterviewTips[randIndex];
    const speechText = randTip;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Tech Interview Tip', speechText)
      .getResponse();
  },
};

const GetBusinessTipIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetBusinessTipIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * businessInterviewTips.length);
    var randTip = businessInterviewTips[randIndex];

    const speechText = randTip;
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Business Interview Tip', speechText)
      .getResponse();
  },
};

const GetCollegeTipIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetCollegeTipIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * collegeInterviewTips.length);
    var randTip = collegeInterviewTips[randIndex];

    const speechText = randTip;
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('College Interview Tip', speechText)
      .getResponse();
  },
};

// Single question Functionality
// The user will only get one question to answer

const GeneralJobQuestionIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GeneralJobQuestionIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * generalJobQuestions.length);
    const speechText = GEN_QUESTION + generalJobQuestions[randIndex];

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Interview Question', speechText)
      .getResponse();
  },
};

const CodingQuestionIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'CodingQuestionIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * codingQuestions.length);
    const speechText = CODE_QUESTION + codingQuestions[randIndex];

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Coding Interview Question', speechText)
      .getResponse();
  },
};

const TechQuestionIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'TechQuestionIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * techInterviewQuestions.length);
    const speechText = TECH_QUESTION + techInterviewQuestions[randIndex];

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Tech Interview Question', speechText)
      .getResponse();
  },
};

const BusinessQuestionIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'BusinessQuestionIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * businessQuestions.length);
    const speechText = BUSINESS_QUESTION + businessQuestions[randIndex];

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Business Interview Question', speechText)
      .getResponse();
  },
};

const CollegeQuestionIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'CollegeQuestionIntent';
  },
  handle(handlerInput) {
    var randIndex = Math.floor(Math.random() * collegeInterviewQuestions.length);
    const speechText = COLLEGE_QUESTION + collegeInterviewQuestions[randIndex];

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('College Interview Question', speechText)
      .getResponse();
  },
};

// Full Interview Functionality
// The user will get 5 questions to answer

const StartJobInterviewIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'StartJobInterviewIntent';
  },
  handle(handlerInput) {
    // Get 5 Questions from general Job Questions
    var questions = [];
    var i;
    var randIndex;
    var nextQuestion;
    for(i = 0; i < 5; i++){
      randIndex = Math.floor(Math.random() * generalJobQuestions.length);
      nextQuestion = generalJobQuestions[randIndex];
      while(checkDuplicates(questions, nextQuestion)){
        randIndex = Math.floor(Math.random() * generalJobQuestions.length);
        nextQuestion = generalJobQuestions[randIndex];
      }
      questions.push(nextQuestion);
    }

    var intro = "You will have sixty seconds to answer each of the questions. There are five questions overall. The interview will begin now ";
    const speechText = makeInterviewOutput(questions, intro);

    return handlerInput.responseBuilder
      .speak(speechText)
      // .withSimpleCard('HireView', speechText) // Shows break statements
      .getResponse();
  },
}; // Done

const StartTechInterviewIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'StartTechInterviewIntent';
  },
  handle(handlerInput) {
    // Get 5 Questions (2 general, 1 technical, 2 coding)
    var questions = [];
    var i;
    var randIndex;
    var nextQuestion;

    // Get 2 General Questions
    for(i = 0; i < 2; i++){
      randIndex = Math.floor(Math.random() * generalJobQuestions.length);
      nextQuestion = generalJobQuestions[randIndex];
      while(checkDuplicates(questions, nextQuestion)){
        randIndex = Math.floor(Math.random() * generalJobQuestions.length);
        nextQuestion = generalJobQuestions[randIndex];
      }
      questions.push(nextQuestion);
    }

    // Get 1 Technical Question
    randIndex = Math.floor(Math.random() * techInterviewQuestions.length);
    nextQuestion =  techInterviewQuestions[randIndex];
    questions.push(nextQuestion);

    // Get 2 Coding Questions
    for(i = 0; i < 2; i++){
      randIndex = Math.floor(Math.random() * codingQuestions.length);
      nextQuestion =  codingQuestions[randIndex];
      while(checkDuplicates(questions, nextQuestion)){
        randIndex = Math.floor(Math.random() * codingQuestions.length);
        nextQuestion = codingQuestions[randIndex];
      }
      questions.push(nextQuestion);
    }

    // Generate the interview
    var intro = "Your technical interview is about to begin. You will be asked five questions, including two general questions, one technical question, and two coding questions. Solutions to the coding questions can be found in our android app. You will have sixty second to answer each question. Your interview begins now ";
    const speechText = makeInterviewOutput(questions, intro);
    return handlerInput.responseBuilder
      .speak(speechText)
      // .withSimpleCard('HireView', speechText) // Shows break statements       .getResponse();
  },
}; // Done

const StartBusinessInterviewIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'StartBusinessInterviewIntent';
  },
  handle(handlerInput) {
    // Get 5 questions (3 general and 2 business)
    var questions = [];
    var i;
    var randIndex;
    var nextQuestion;

    // Get general questions
    for(i = 0; i < 3; i++){
      randIndex = Math.floor(Math.random() * generalJobQuestions.length);
      nextQuestion = generalJobQuestions[randIndex];
      while(checkDuplicates(questions, nextQuestion)){
        randIndex = Math.floor(Math.random() * generalJobQuestions.length);
        nextQuestion = generalJobQuestions[randIndex];
      }
      questions.push(nextQuestion);
    }

    // Get business questions
    for(i = 0; i < 2; i++){
      randIndex = Math.floor(Math.random() * businessQuestions.length);
      nextQuestion = businessQuestions[randIndex];
      while(checkDuplicates(questions, nextQuestion)){
        randIndex = Math.floor(Math.random() * businessQuestions.length);
        nextQuestion = businessQuestions[randIndex];
      }
      questions.push(nextQuestion);
    }

    var intro = "This is a simulated business interview. You will be asked 5 questions with sixty seconds to answer each one. Your interview begins now"
    const speechText = makeInterviewOutput(questions, intro);
    return handlerInput.responseBuilder
      .speak(speechText)
      // .withSimpleCard('HireView', speechText) // Shows break statements
      .getResponse();
  },
}; // Done

const StartCollegeInterviewIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'StartCollegeInterviewIntent';
  },
  handle(handlerInput) {
    // Get 5 Questions from general Job Questions
    var questions = [];
    var i;
    var randIndex;
    var nextQuestion;
    for(i = 0; i < 5; i++){
      randIndex = Math.floor(Math.random() * collegeInterviewQuestions.length);
      nextQuestion = collegeInterviewQuestions[randIndex];
      while(checkDuplicates(questions, nextQuestion)){
        randIndex = Math.floor(Math.random() * collegeInterviewQuestions.length);
        nextQuestion = collegeInterviewQuestions[randIndex];
      }
      questions.push(nextQuestion);
    }

    var intro = "Your college interview is about to begin. You will be asked five questions and you have sixty seconds to answer each one. Your interview starts now ";
    const speechText = makeInterviewOutput(questions, intro);
    return handlerInput.responseBuilder
      .speak(speechText)
      // .withSimpleCard('HireView', speechText) // Shows break statements
      .getResponse();
  },
}; // Done

// Included Intent Handlers

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'If you are interviewing for a job or internship, you can ask for tips, individual questions, or full interview silmulations for general, technical, or business interviews. If you are a high school student preparing for a college interview, you can also ask for tips, questions, or simulations.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Help', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Thank you for using HireView, good luck with your interview!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Stopped', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GetGeneralTipIntentHandler,
    GetCodingTipIntentHandler,
    GetTechTipIntentHandler,
    GetBusinessTipIntentHandler,
    GetCollegeTipIntentHandler,
    GeneralJobQuestionIntentHandler,
    CodingQuestionIntentHandler,
    TechQuestionIntentHandler,
    StartJobInterviewIntentHandler,
    StartTechInterviewIntentHandler,
    StartBusinessInterviewIntentHandler,
    StartCollegeInterviewIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();

// Helper functions
function checkDuplicates(currentArray,newPhrase){
  var i;
  for(i = 0; i < currentArray.length; i++){
    if(currentArray[i] === newPhrase){
        return true;
    }
  }
  return false;
}

function makeInterviewOutput(questions, intro){
  //var intro = "You will have sixty seconds to answer each of the questions. There are six questions overall. The interview will begin now ";
  var waitTime = '<break time = \'10s\'/><break time = \'10s\'/><break time = \'10s\'/><break time = \'10s\'/><break time = \'10s\'/><break time = \'10s\'/>';
  var speechText = intro + '<break time = \'0.5s\'/>' + questions[0] + waitTime + questions[1] + waitTime + questions[2] + waitTime + questions[3] + waitTime + questions[4] + waitTime + finalQuestion;
  return speechText;
}


  // Below this comment is the data for the InterviewMe Alexa Skill
  // The functional file that uses this information is index.js

/*
* Interview tips section
*/
var collegeInterviewTips = [
    "Bring specific questions to the table about the school to show your interest.",
    "Put some energy into coming up with creative questions with answers that cannot be easily found on the college's website",
    "Practice, practice, practice!",
    "Be yourself. Remember the key to getting admitted and being happy at college is finding the school that best fits you",
    "Before the interview, think about why the school appeals to you, what you want to study, and what you might do after graduation",
    "Universities want students to attend, so remember that you are there to learn about them as much as they are there to learn about you",
    "Wear what makes you feel comfortable and confident! But makes sure you wear something that makes you look professional, mature, and poised.",
    "Send a thank you e-mail after the interview and let your interviewer know that you are thankful that they took the time to meet with you"
  ];

var generalInterviewTips = [
    "Research the company, research the position you are applying for, and practive interviewing!",
    "Wear simple clothes that are appropriate for the position you are applying for.",
    "Keep to your middle school dress code; nothing too revealing, no open-toed sandals, and such.",
    "Stay calm. Anxiety will cause you to lose focus on what is being asked or your own train of thought.",
    "Be confident in yourself and your abilities.",
    "Incorporate what you know about the company in your responses",
    "Listen, take notes, and be honest!",
    "Prepare questions to ask at the end of the interview ",
    "Use the STAR method when responding to questions to ace the interview. Describe the situation, task, action, and result.",
    "Figure out your strengths and weaknesses before the interview to be prepared",
    "Anticipate the interviewer's concerns and expectations.",
    "Research about the company's competitiors and their industry."
  ];

var codingInterviewTips = [
    "Remember that companies are focusing on your problem solving skills, so think out loud and talk through the problems with your interviewer ",
    "Many generic questions are based on algorithms and data structures, so make sure you brush up on your linked lists and sorts before the interview ",
    "Look at the job or internship listing and see what tech stack they are using and come prepared to answer questions about those technologies ",
    "Look over your resume and make sure that you are able to talk about all of the information that you put on it.",
    "Repeat the question back to the interviewer to make sure you understand the question. If you misunderstand the question, then the interviewer can clarify.",
    "If you talk through your thought process, interviewers will sometimes be willing to help you work through the problem",
    "Start with a brute-force approach by explaining the time and space complexities and clarify why it is bad and then start to improve it",
    "Only start coding after you and your interviewer have agreed on an approach and have been given the green light",
    "Practice handwriting code to prepare for a whiteboard interview"
];

var techInterviewTips = [
    "For technical jobs, many times the questions are testing your logic. Don't get flustered by abstract puzzles or riddles, just talk them through and show your thinking process.",
    "Be sure to practice your communcation skills!",
    "Come prepared to talk about your personal projects and what technologies you used in them!",
    "Check out the Glassdoor company reviews from current and previous employees to see what types of tech questions the interviewers ask",
    "Although many tech companies have a relaxed, casual workplace, it is still important to dress professionally",
    "Be honest, tell the interviewer what most interests you in a job and what kinds of projects you’d like to work on."
];

var businessInterviewTips = [
    "Remember that the company isn't just learning more about you, but you are also learning more about the company",
    "Companies want the candidate that will provide the most value, so think about how you experiences can help the company succeed",
    "Check out the Glassdoor company reviews from current and previous employees to see what types of tech questions the interviewers ask",
    "Review the company’s background and mission statement",
    "Read recent press releases and be prepared to talk about their current projects",
    "Bring extra copies of your resume on quality paper",
    "Bring a notepad or professional binder and pen",
    "Bring a portfolio with samples of your work, if relevant",
    "Establish eye contact and use a firm handshake. Be sure to sit up straight and aware of nervous gestures"
];

/*
* Job Interveiw Questions Section
*/
var generalJobQuestions = [
  "Can you tell me a little about yourself?",
  "What do you know about the company?",
  "Why do you want to work here?",
  "Why should we hire you?",
  "Where do you see yourself in 5 years?",
  "Tell me about a challenge you’ve faced, and how you dealt with it.",
  "Tell me about a time that you demonstrated leadership.",
  "What are your hobbies outside of work?"
];

var codingQuestions = [
  // Array based questions
  "How do you find the missing number in a given integer array of 1 to 100?",
  "How do you find the duplicate number on a given integer array?",
  "How do you find the largest and smallest number in an unsorted integer array?",
  "How do you find all pairs of an integer array whose sum is equal to a given number?",
  "How do you find duplicate numbers in an array if it contains multiple duplicates?",
  "How are duplicates removed from a given array in Java?",
  "How is an integer array sorted in place using the quicksort algorithm?",
  "How do you reverse an array in place?",

  // Linked List Questions
  "How do you find the middle element of a singly linked list in one pass?",
  "How do you reverse a linked list?",
  "How do you reverse a singly linked list without recursion?",
  "How are duplicate nodes removed in an unsorted linked list?",
  "How do you find the length of a singly linked list?",
  "How do you find the third node from the end in a singly linked list?",

  // String Questions:
  "How do you print duplicate characters from a string?",
  "How do you check if two strings are anagrams of each other?",
  "How do you print the first non-repeated character from a string?",
  "How can a given string be reversed using recursion?",
  "How do you check if a string contains only digits?",
  "How are duplicate characters found in a string?",
  "How do you count a number of vowels and consonants in a given string?",
  "How do you count the occurrence of a given character in a string?",
  "How do you reverse words in a given sentence without using any library method?",
  "How do you check if a given string is a palindrome?"
];

var techInterviewQuestions = [
  "What programming languages are you most familiar with?",
  "Tell me about a project you worked on where you coded using object-oriented programming.",
  "Tell me about your latest project.",
  "Tell me about a time where you worked in a group to develop a program.",
  "How you keep your technology skills current?",
  "What are your favorite and least favorite technology products?",
  "Tell me about a tech project that you've worked on in your spare time.",
  "What development tools have you used?",
  "What would you hope to achieve in the first six months after being hired?",
  "What do you know about our company?",
  "Tell me about a time where you were a leader in a project and what you accomplished?",
  "Why do you want this position?",
  "Why should we hire you, what can you bring to our company?"
];

var businessQuestions = [
  "Do you work well under pressure and with deadlines? Give me an example.",
  "What qualifications do you have that make you think you will be successful in this business",
  "Have you ever had a conflict with a boss or professor? How did you resolve it?",
  "Tell me about a situation where you had to make a decision without much information.",
  "What do you know about our company?",
  "Why should we hire you? What can you bring to our company?",
  "Explain a time where technology helped you solve an organizational issue",
  "What is the biggest risk you have taken?",
  "Describe a time where you used technology to accomplish a difficult task",
  "Why do you want to join our team?",
  "What is your biggest weakness? How have you addressed it?",
  "When was a time you worked on a team?",
  "Why would you be a good fit for us?",
  "What teams have you been on where you took on a leadership role?",
  "Describe a time you used data. What was the result of your analysis?",
  "How would you plan to market our products?",
  "If you graduated right now, what types of companies would you be applying for?"
];

// Final question in practice interview
var finalQuestion = "Do you have any questions for us?";

/*
* College Interview Questions Section
*/

var collegeInterviewQuestions = [
  "Why are you interested in our school?",
  "Tell me about youself.",
  "What is your favorite subject in school and why?",
  "What do you enjoy doing when you are not in class?",
  "What clubs or extracurriculars re you a part of outside of class?",
  "What is an example of an obstacle, a failure, or a mistake that you have learned from?",
  "What are three interesting things about you that I wouldn't know from your application?",
  "What do you expect to be doing 10 years from now?",
  "What would you change about your high school?",
  "What leadership roles have you taken on at your school?",
  "Walk me through your resume.",
  "Why are you interested in this college?",
  "What do you plan to major in and why?",
  "Whom do you most admire?",
  "What is your favorite book and why?",
  "Why do you want to go to college?",
  "What do you like to do for fun?",
  "What makes you unique?",
  "Describe a time where you faced adversity and how you overcame it",
  "What are your academic strengths?",
  "What are you academic weaknesses and how do you overcome them?",
  "What do you plan to contribute to this school?"
];
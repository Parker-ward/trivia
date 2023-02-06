import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawQuestions() {
  let template = ''
  appState.questions.forEach(q => template += q.QuestionCard)
  setHTML('questions', template)
}
export class QuestionsController {

  constructor() {
    // console.log('hello from controller');
    appState.on('questions', _drawQuestions)
    this.getQuestions()
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}
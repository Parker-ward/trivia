import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { tdb_api } from "./AxiosService.js";


class QuestionsService {
  async getQuestions() {
    const res = await tdb_api.get('/api.php?amount=10&category=12&difficulty=easy&type=multiple')
    console.log('what is the', res.data);
    const questionsToGet = res.data.results.filter(q => q.difficulty).map(q => new Question(q))
    console.log({ questionsToGet });
    appState.questions = questionsToGet
  }
}



export const questionsService = new QuestionsService()
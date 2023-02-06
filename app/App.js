import { QuestionsController } from "./Controllers/QuestionsController.js";

class App {
  // valuesController = new ValuesController();
  questionsController = new QuestionsController();
}

window["app"] = new App();

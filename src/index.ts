import { feedbackMachine } from "./MachineLogic";
import { createActor } from "xstate";

const actor = createActor(feedbackMachine);
actor.start();

console.log(actor.getSnapshot());
// Logs an object containing:
// {
//   value: 'question',
//   context: {
//     feedback: ''
//   },
//   meta: {
//     'feedback.question': {
//       question: 'How was your experience?'
//     }
//   }
// }
import { Schema, model, Document } from "mongoose";

interface ITask extends Document {
  name: String;
  completed: Boolean;
}

const taskSchema = new Schema<ITask>({
  name: {
    type: String,
    required: [true, "please enter task name"],
    trim: true,
    maxlength: [35, "name cant be more that 35 char"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Task = model<ITask>("Task", taskSchema);
export default Task;

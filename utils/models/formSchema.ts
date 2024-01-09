import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  dateTime: Date;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const clientSchema = new Schema<IMessage>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

const schema = mongoose.models.schema || mongoose.model("schema", clientSchema);
export default schema;

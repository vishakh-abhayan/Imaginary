import { models, Schema, model, Document } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationTypes: string;
  public_id: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  Config?: object;
  transformationUrl?: URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ImageShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationTypes: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: URL,
    required: true,
  },
  width: {
    type: Number,
  },
  height: { type: Number },
  Config: {
    type: Object,
  },
  transformationUrl: {
    type: URL,
  },
  aspectRatio: {
    type: String,
  },
  color: {
    type: String,
  },
  prompt: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = models?.Image || model("Image", ImageShema);

export default Image;

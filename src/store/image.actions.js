import { CHANGE_IMAGE } from "./types";
export const chamgeIamge = imageURL => ({
  type: CHANGE_IMAGE,
  payload: imageURL
});

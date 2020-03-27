import { SAVE_COMMENT } from '../constant';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

import { getRandomInteger } from './utilities';

const makeID = () => {
  let latestID = 0;
  return {
    getNewID() {
      latestID += 1;
      return latestID;
    }
  };
};
const userPhotoMakeID = makeID();

const createUnicCommentID = (min, max) => {
  const comments = [];
  return {
    getUnicID() {
      let currentID = getRandomInteger(min, max);
      while (comments.includes(currentID)) {
        currentID = getRandomInteger(min, max);
      }
      comments.push(currentID);
      return currentID;
    }
  };
};
const createdCommentID = createUnicCommentID(1, 1000);

export {userPhotoMakeID, createdCommentID};

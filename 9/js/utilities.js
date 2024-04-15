export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const makeID = () => {
  let latestID = 0;
  return {
    getNewID() {
      latestID += 1;
      return latestID;
    }
  };
};
export const userPhotoMakeID = makeID();

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
export const createdCommentID = createUnicCommentID(1, 1000);



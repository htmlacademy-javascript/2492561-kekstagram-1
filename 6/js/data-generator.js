import { getRandomInteger,userPhotoMakeID,createdCommentID } from './utilities.js';
import { VARIANTS_OF_COMMENTS,NAMES, PHOTOS_DESCRIPTIONS } from './constans.js';
export const ACCEPTABLE_NUMBER_OF_ID = 25;


const makeComments = () => ({
  id: createdCommentID.getUnicID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: VARIANTS_OF_COMMENTS[getRandomInteger(0, VARIANTS_OF_COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});


export const usersPfotoDescriptions = () => {
  const newID = userPhotoMakeID.getNewID();
  return {
    id: newID,
    url: `photos/${newID}.jpg`,
    description: PHOTOS_DESCRIPTIONS[newID - 1],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(1,4)}, makeComments)
  };
};

const ACCEPTABLE_NUMBER_OF_ID = 25;

const VARIANTS_OF_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Алексей',
  'Мария',
  'Иван',
  'Елена',
  'Дмитрий',
  'Наталья',
  'Павел',
  'Ольга',
  'Сергей',
  'Анна',
  'Владимир',
  'Татьяна',
  'Андрей',
  'Ирина',
  'Николай',
  'Екатерина',
  'Александр',
  'Марина',
  'Виктор',
  'Светлана',
  'Михаил',
  'Юлия',
  'Евгений',
  'Вероника',
  'Константин',
  'Галина',
  'Антон',
  'Людмила',
  'Юрий',
  'Надежда'
];

const PHOTOS_DESCRIPTIONS = [
  'Закат над озером, окрашивающий небо в оранжево-розовые тона.',
  'Улица старого города, украшенная гирляндами и уличными фонарями.',
  'Снежный лес и следы животных на свежем снегу.',
  'Портрет собаки в вязаном свитере, сидящей на скамейке.',
  'Горная река со скалистыми берегами в осеннем лесу.',
  'Крупный план капель росы на паутине в лучах утреннего солнца.',
  'Цветущий сад под голубым облачным небом весной.',
  'Пейзаж пустыни с каменными формациями на закате.',
  'Ночное небо, усыпанное звездами, с видимой Млечным Путем.',
  'Уличный артист, играющий на гитаре перед прохожими.',
  'Разноцветные воздушные шары, летящие в ясном небе.',
  'Туман над горной долиной на рассвете.',
  'Старинный замок, отражающийся в водах озера.',
  'Макро снимок капель воды на лепестках цветка.',
  'Праздничный фейерверк над городской набережной.',
  'Завтрак в постели: круассаны, свежие ягоды и чашка кофе.',
  'Группа пингвинов на льдине в Антарктике.',
  'Стая птиц, летящая на фоне закатного неба.',
  'Зимний пейзаж с заснеженными деревьями и маленьким домиком.',
  'Дети, играющие с осенними листьями в парке.',
  'Крупный план цветущего вишневого дерева.',
  'Силуэты людей, гуляющих по пляжу на закате.',
  'Городской вид с высотных зданий в сумерки.',
  'Разноцветные умбрильи, висящие над уличкой.',
  'Лодки на тихом озере в туманное утро.'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Выдает ID фото пользователя
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

const makeComments = () => ({
  id: createdCommentID.getUnicID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: VARIANTS_OF_COMMENTS[getRandomInteger(0, VARIANTS_OF_COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});


const usersPfotoDescriptions = () => {
  const newID = userPhotoMakeID.getNewID();
  return {
    id: newID,
    url: `photos/${newID}.jpg`,
    description: PHOTOS_DESCRIPTIONS[newID - 1],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(1,4)}, makeComments)
  };
};

export const photosList = Array.from({length: ACCEPTABLE_NUMBER_OF_ID}, usersPfotoDescriptions);

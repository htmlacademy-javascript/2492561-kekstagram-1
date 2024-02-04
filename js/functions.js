//Функция для проверки, является ли строка палиндромом
export const checkPalindrome = (word) => {
  word = word.toLowerCase();
  word = word.replaceAll(' ','');
  let reverseString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return (word === reverseString);
};

export const checkPalindrome2 = (word) => {
  word = word.toLowerCase();
  word = word.replaceAll(' ','');
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
export const getNumber = (string) => {
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i],10))) {
      number += string[i];
    }
  }
  return parseInt(number,10);
};

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
export const getEditingString = (string, length, symbol) => {
  let result = string;
  while (result.length < length) {
    const DIFF = result.length + symbol.length - length;
    if (DIFF > 0) {
      let slicedSymbol = '';
      for (let i = 0; i < symbol.length - DIFF; i++) {
        slicedSymbol += symbol[i];
      }
      result = slicedSymbol + result;
      break;
    }
    result = symbol + result;
  }
  return result;
};

//Функция для проверки длины строки.
export const checkStringLength = (string, length) => string.length <= length;

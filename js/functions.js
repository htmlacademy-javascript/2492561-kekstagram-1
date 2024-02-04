//Функция для проверки, является ли строка палиндромом
function isPalindrome (string){
  string = string.toLowerCase();
  string = string.replaceAll(' ','');
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return (string === reverseString);
}

function isPalindrome2 (string){
  string = string.toLowerCase();
  string = string.replaceAll(' ','');
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function getNumber (string) {
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i],10))) {
      number += string[i];
    }
  }
  return parseInt(number,10);
}

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
function getEditingString(string, length, symbol) {
  let result = string;
  while (result.length < length) {
    const diff = result.length + symbol.length - length;
    if (diff > 0) {
      let slicedSymbol = '';
      for (let i = 0; i < symbol.length - diff; i++) {
        slicedSymbol += symbol[i];
      }
      result = slicedSymbol + result;
      break;
    }
    result = symbol + result;
  }
  return result;
}

//Функция для проверки длины строки.

function checkLength (string, length) {
  return string.length <= length;
}


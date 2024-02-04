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
function editingString (string, length, symbol) {
  let editedString = '';
  while (editedString.length <= length - string.length) {
    if (editedString.length === length - string.length) {
      break;
    }
    if (editedString.length + symbol.length > length - string.length) {

      break;
    }
    editedString += String(symbol);
  }
  return editedString + string;
}

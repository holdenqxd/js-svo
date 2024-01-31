const language = "Введите язык:";

switch (language) {
  case "rus":
    console.log("Русский язык");
    break;
  case "eng":
      console.log("Английский язык");
      break;
  case "itl":
      console.log ("Итальянский язык");
      break;
  case "fr":
      console.log ("Французский язык");
      break;
  default: "Неизвестный";
      console.log ("Я такого не знаю сука");
      break; 
}
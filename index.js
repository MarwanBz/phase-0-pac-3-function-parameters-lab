function introduction(name) {
  return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
  // validate name parameter
  if (typeof name !== "string") {
    return "Invalid input - name should be a string";
  }

  // validate language parameter
  if (typeof language !== "string") {
    return "Invalid input - language should be a string";
  }

  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

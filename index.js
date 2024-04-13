function findrelation(firstName, secondName) {
  if (!firstName && !secondName) {
    return "Please enter both first name and second name.";
  }

  // Convert names to lowercase for case-insensitive comparison
  let name1 = firstName.toLowerCase();
  let name2 = secondName.toLowerCase();

  // Initialize objects to store character frequencies
  let charFreq1 = {};
  let charFreq2 = {};

  // Count character frequencies for the first name
  for (let i = 0; i < name1.length; i++) {
    let char = name1[i];
    charFreq1[char] = (charFreq1[char] || 0) + 1;
  }

  // Count character frequencies for the second name
  for (let i = 0; i < name2.length; i++) {
    let char = name2[i];
    charFreq2[char] = (charFreq2[char] || 0) + 1;
  }

  // Remove common characters between the two names
  for (let char in charFreq1) {
    if (charFreq2[char] > 0) {
      charFreq1[char]--;
      charFreq2[char]--;
    }
  }

  // Calculate total count of remaining characters
  let totalCount =
    Object.values(charFreq1).reduce((total, count) => total + count, 0) +
    Object.values(charFreq2).reduce((total, count) => total + count, 0);

  // Define relationship string
  let relationshipString = "FLAMES";

  // Reduce relationship string until only one character remains
  while (relationshipString.length > 1) {
    let removeIndex = totalCount % relationshipString.length;
    if (removeIndex === 0) {
      removeIndex = relationshipString.length - 1;
    } else {
      removeIndex--;
    }
    relationshipString =
      relationshipString.slice(0, removeIndex) +
      relationshipString.slice(removeIndex + 1);
  }

  // Define the resulting relationship based on the remaining character
  let matchedRelationship = "";

  switch (relationshipString) {
    case "F":
      matchedRelationship = `${firstName} is ❤️‍🔥 FRIENDS ❤️‍🔥 with ${secondName}`;
      break;
    case "L":
      matchedRelationship = `${firstName} is In 💏 LOVE 💏 with ${secondName}`;
      break;
    case "A":
      matchedRelationship = `${firstName} has More 😘 AFFECTION 😘 for ${secondName}`;
      break;
    case "M":
      matchedRelationship = `${firstName} is going to 💑 MARRY 💑 ${secondName}`;
      break;
    case "E":
      matchedRelationship = `${firstName} is 😡 ENEMY 😡 to ${secondName}`;
      break;
    case "S":
      matchedRelationship = `${firstName} and ${secondName} are 🧑‍🤝‍🧑 SISTERS/BROTHERS 🧑‍🤝‍🧑`;
      break;
  }
  return matchedRelationship;
}

module.exports = findrelation;

/**
 * @returns the generated Random Number Array
 */

export const randomNumArrayGenerator = itemCount => {
  const randomNumbArray = [];
  while (randomNumbArray.length < itemCount) {
    const randomNumb = Math.floor(Math.random() * 101);
    if (randomNumbArray.indexOf(randomNumb) === -1) {
      randomNumbArray.push(randomNumb, randomNumb);
    }
  }

  randomNumbArray.sort(() => Math.random() - 0.5);
  return randomNumbArray;
};

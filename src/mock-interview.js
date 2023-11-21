/*
Instructions:

Set a timer for 45 minutes and complete the following JS/React problems.

Start with the 4 JavaScript questions.
Update the test file, run it, and confirm the tests are passing.
You can run the tests by running "npm i && npm run test"

After completing the JS problems, solve the React problem described at the bottom of this file.

DISCLAIMER: There ARE solutions in the solutions folder of this project. Don't look at these until you are ready!
 */

// Using the dogs array, write a function returning an array of dogs 3 and older
export const getDogsThreeOrOlder = (dogsArray) => dogsArray.filter((dog) => dog.age >= 3);

// Using the dogs array, write a function returning an array of all the dog names
export const getDogNames = (dogsArray) => dogsArray.map((dog) => dog.name);

// Using the dogs array, write a function returning the youngest dog
export const getYoungestDog = (dogsArray) => dogsArray.sort((a, b) => a.age - b.age)[0];

// Using the dogs array, write a function returning how many times each dog breed shows up in the array
export const getDogsAmountOfTimes = (dogsArray) =>
    dogsArray.reduce((acc, dog) => {
        const breed = dog.breed;
        return { ...acc, [breed]: (acc[breed] || 0) + 1 };
    }, {});

/*

/*

 This repository is a React app spun up using Vite. You'll see an App.jsx file you can edit and make your own.
 Feel free to add any React components in the assets/components folder

 Display a random image for each breed that appears in the above array. Please use code - don't manually do this!
 The "breedCode" in the dog objects should help you here!

 You'll be using the dog breed API

 Docs: https://dog.ceo/dog-api/documentation/breed

 API URL: https://dog.ceo/api/breed/{dog breed goes here}/images/random

 */

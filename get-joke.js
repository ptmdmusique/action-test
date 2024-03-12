// Log some jokes

const jokes = [
  "What do you call a fake noodle? An impasta!",
  "I would avoid the sushi if I was you. It’s a little fishy.",
  "Want to hear a joke about construction? I’m still working on it.",
  "Why couldn’t the bicycle stand up by itself? It was two tired.",
  "I’m reading a book on anti-gravity. It’s impossible to put down!",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
  "What do you call a belt made out of watches? A waist of time.",
  "How many apples grow on a tree? All of them.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "I told my computer I needed a break. Now it won’t stop sending me Kit-Kats.",
];

const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};

console.log(getRandomJoke());

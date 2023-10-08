# Question Answer
1.let greeting;
greetign = {};
console.log(greetign);

<li>Answer : B: ReferenceError: greetign is not defined</li>
<li>it will result in a ReferenceError, indicating that the variable is not defined.</li>


2.function sum(a, b) {
  return a + b;
}


<li>Answer :C: "12" </li>
<li> he sum function takes two parameters, a and b, and attempts to add them together using the + operator. In JavaScript, when you use the + operator with a string and a number, it performs concatenation instead of addition. So, when you call sum(1, "2"), it concatenates the number 1 and the string "2", resulting in the string "12".</li>



3.const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);

<li> Answer : A: ['🍕', '🍫', '🥑', '🍔'] </li>
<li>an array food with four emoji elements. Then, I create an object info with a property favoriteFood that is initially assigned the value of the first element of the food array, which is "🍕". Afterward, you change the value of info.favoriteFood to "🍝", but this change does not affect the original food array. Therefore, when log food, it remains unchanged and still contains the original elements.</li>



4.function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());

<li>Answer : B: Hi there, undefined</li>
<li>In the sayHi function, there is a parameter name which is used in the template string. When I5 call sayHi() without providing an argument, the name parameter inside the function becomes undefined. Therefore, the template string will be "Hi there, undefined", resulting in the output "Hi there, undefined" when you log it.</li>



5.let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);

<li>Answer : C: 3</li>
<li> L have an array nums containing four elements. I use the forEach method to iterate over each element of the array and, inside the callback function, check if the current num is truthy (not equal to 0). For each truthy value encountered (1, 2, and 3), you increment the count variable.</li>

showMessage("ellom8...");
/// grab the element and assign it to a variable named aboutMe
const aboutMe = document.getElementById("aboutMe");
/// parageraph
const paragraph = document.querySelector(".paragraph");
console.log(paragraph.innerText); /// show the empty tag which is false

aboutMe.addEventListener("click", function () {
  const stringVariable = "Hello World";
  const stringNameVariable = "Faitou";
  const num = 24;
  const imageSource = "image0.jpeg";

  if (paragraph.innerText) {
    console.log("The paragraph already has text");
  } else {
    console.log(false);
    paragraph.innerText = `${stringVariable} my name is ${stringNameVariable}, known as a clown by friends/family, and I am ${num}`;
  }

  const img = document.querySelector(".img");
  img.src = imageSource;
});

const myArrowFunction1 = (parameter) => {
  return parameter;
};

const a = myArrowFunction1();
console.log(a);

const b = myArrowFunction2("this arguement could be anything");
console.log(b);

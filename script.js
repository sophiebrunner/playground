function styleButton() {
  const btn = document.querySelector("#style-button");
  btn.addEventListener("click", function () {
    if (btn.classList.contains("button--aqua")) {
      btn.classList.remove("button--aqua");
      btn.classList.add("button--hotpink");
    } else if (btn.classList.contains("button--hotpink")) {
      btn.classList.remove("button--hotpink");
      btn.classList.add("button--aqua");
    }
  });
}

styleButton();

function createNewElement() {
  const complimentButton = document.querySelector("#compliment-button");
  const main = document.querySelector("main");
  complimentButton.addEventListener("click", function (e) {
    console.log(e.target);
    const complimentContainer = document.createElement("p");
    main.appendChild(complimentContainer);
    console.log(complimentContainer);
    const complimentText = document.createTextNode("Niemand ist so wie du!");
    complimentContainer.appendChild(complimentText);
  });
}

createNewElement();

//Sync checkbox
/*
list.addEventListener("change", (e) => {
  const checkbox = e.target;
  const liElement = checkbox.parentElement;
  const todo = liElement.todoObj;

  todo.done = checkbox.checked;
});
*/

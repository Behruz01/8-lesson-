const elForm = document.querySelector("#form");
const article = document.querySelector("#article");
const newElement = document.querySelector("#element");
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const name = evt.target.name.value;
  const email = evt.target.email.value;
  const tel = evt.target.tel.value;
  const team = evt.target.team.value;
  const text = evt.target.text.value;
  // const file = evt.target.file.value;
  const password = evt.target.password.value;

  const newArray = [];
  if (
    password == "4k7Za" &&
    name !== "" &&
    email !== "" &&
    tel !== "" &&
    team !== "" &&
    text !== ""
  ) {
    newArray.push(newElement);
    for (let i = 0; i < newArray.length; i++) {
      newElement.innerHTML += `
      <div style="border: 2px solid red ; padding:20px; margin-bottom:10px" id="element">
        <h2> ${name}</h2>
          <a href="#">${email}</a>
          <h3>${tel}</h3>
          <p>${team}</p>
         <p>${text}</p>
        </div>`;
    }

    name = "";
    email.value = "";
    tel.value = "";
    team.value = "";
    text.value = "";
    password.value = "";
  } else {
    alert("Malumotlarni to'ldiring!");
  }
});

const elForm = document.querySelector("#form");
const elCards = document.querySelector("#list");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const image = evt.target.image.value;
  const title = evt.target.title.value;
  const discription = evt.target.discription.value;
  const data = evt.target.data.value;

  const newElement = document.createElement("div");

  if (image !== "" && title !== "" && discription !== "" && data !== "") {
    newElement.className = "li-item";
    newElement.innerHTML += `
    <li class="li-item">
            <img src='${image}' alt='${title}'/>
            <div class="cards-div">
              <h3 class="item-h3">
               "${title}"
              </h3>
              <p class="item-p">
                "${discription}"
              </p>
              <p class="time">"${data}"</p>
            </div>
          </li>`;
  }
  elCards.appendChild(newElement);
  image.value = "";
  title.value = "";
  discription.value = "";
  data.value = "";
});
console.log(newElement);

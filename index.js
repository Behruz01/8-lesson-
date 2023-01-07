const elForm = document.querySelector("#form");
const elCards = document.querySelector("#list");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const image = evt.target.image.value;
  const title = evt.target.title.value;
  const discription = evt.target.discription.value;
  const data = evt.target.data.value;

  const newElement = document.createElement("li");

  if (image !== "" && title !== "" && discription !== "" && data !== "") {
    newElement.className = "li-item";
    newElement.innerHTML += `
            <img src="https://i.picsum.photos/id/701/200/300.jpg?hmac=gVWdD9Rh_J0iGXpXOJAN7MZpGPrpeHX_M5JwGGvTSsI" alt="${title}"/>
            <div class="cards-div">
              <h3 class="item-h3">
               ${title}
              </h3>
              <p class="item-p">
                ${discription}
              </p>  
              <p class="time">${data}</p>
            </div>
          `;
  } else {
    alert("malumotlarni to'liq to'ldiring!!!");
  }
  elCards.appendChild(newElement);
  image.value = "";
  title.value = "";
  discription.value = "";
  data.value = "";
});

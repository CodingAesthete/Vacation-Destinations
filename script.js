(function () {
  "use strict";

  const detailsForm = document.getElementById('destination_details_form');

  detailsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let destName = e.target.elements[0].value;
    let destLocation = e.target.elements[1].value;
    let destPhoto = e.target.elements[2].value;
    let destDesc = e.target.elements[3].value;

    for (let i = 0; i < e.target.elements.length; i++) {
      e.target.elements[i].value = '';
    }

    const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    const wishListContainer = document.querySelector('#destinations_container');

    if (wishListContainer.children.length === 0) {
      document.getElementById('title').innerHTML = 'My Wish List';
    }

    let container = document.getElementById('destinations_container');
    container.appendChild(destCard);

  });

  function createDestinationCard(name, location, photoUrl, description) {
    let card = document.createElement('div');
    card.className = 'card';

    let imgDiv = document.createElement('div');
    imgDiv.className = 'imgDiv';
    let img = document.createElement('img');
    img.setAttribute('alt', name);
    imgDiv.appendChild(img);

    var constPhotoUrl = 'https://media.cntraveller.com/photos/6220bfe35e6084e5d4f02404/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg';

    if (photoUrl.length === 0) {
      img.setAttribute('src', constPhotoUrl);
    } else {
      img.setAttribute('src', photoUrl);
    }

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h4');
    cardTitle.innerHTML = name;
    cardBody.appendChild(cardTitle);

    let subTitle = document.createElement('h4');
    subTitle.innerHTML = location;
    cardBody.appendChild(subTitle);

    if (description.length !== 0) {
      let cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }

    let deleteDiv = document.createElement('div');
    deleteDiv.className = 'wrapper';
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'remove');
    deleteBtn.innerText = 'remove';

    deleteDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', removeDest);

    cardBody.appendChild(deleteDiv);
    card.appendChild(imgDiv);
    card.appendChild(cardBody);

    return card;
  }

  function removeDest(e) {
    let card = e.target.parentElement.parentElement.parentElement;
    card.remove();
  }

})();
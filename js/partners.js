const renderItems = (data) => {
  console.log(data);
}

fetch('https://delivery-food-f1dcb-default-rtdb.firebaseio.com/db/partners.json')
  .then((resp) => resp.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((err) => {
    console.log(err);
  });
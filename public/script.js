/* eslint-disable max-len */
async function fetchMacros() {
  const request = await fetch('/api/macros');
  const data = await request.json();
}

async function fetchMeals() {
  const target = document.querySelector('.target');
  const request = await fetch('/api/meals');
  const data = await request.json();
  const request2 = await fetch('/api/macros');
  const data2 = await request2.json();
  const meals = [];
  const rand_meals = {};
  const macros = {};
  const meal_macros = [];
  // console.log(data2)

  data.forEach((item) => {
    meals.push(item)
  });
  // console.log(meals);
  data2.forEach((item) => {
    // macros.push([item.meal_id, item.carbs, item.fat, item.protein, item.sodium, item.cholesterol]);
    macros[item.meal_id] = {
      Carbs: item.carbs, Fat: item.fat, Protein: item.protein, Sodium: item.sodium, Cholesterol: item.cholesterol
    };
  });
  // console.log(macros);
  const arrayOfAllKeys = Object.keys(meals);

  for (let i = 0; i < 10; i++) {
    const rnd = Math.floor(Math.random() * arrayOfAllKeys.length);
    const objKey = arrayOfAllKeys[rnd];
    rand_meals[objKey] = meals[objKey];
  }
  // console.log(rand_meals);
  // console.log(macros);

  mackeys = Object.keys(macros);
  console.log(mackeys);
  rankeys = Object.keys(rand_meals);
  console.log(rankeys);
  macval = [];
  ranval = [];
  y = [];

  for (const [key, value] of Object.entries(macros)) {
    macval.push(value);
  }
  for (const [key, value] of Object.entries(rand_meals)) {
    ranval.push(value);
  }

  const filtered = Object.keys(macros)
    .filter((key) => rankeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = macros[key];
      return obj;
    }, {});

  console.log(filtered);
  // console.log(meal_macros)
  // macros.forEach((item) => {
  //   console.log(macros[item])
  // });
  // console.log(meal_macros)
}
fetchMeals();

async function fetchDiningHalls() {
  const target = document.querySelector('.target');
  const request = await fetch('/api/dining');
  const data = await request.json();
  console.log(data);
  arr = [];
  arr1 = [];
  arr2 = [];
  Object.keys(data).forEach((item) => {
    arr.push(data[item]);
  });
  Object.keys(arr[0]).forEach((item) => {
    arr1.push(arr[0][item]);
  });
  Object.keys(arr1).forEach((item) => {
    arr2.push(arr1[item].hall_name);
    const rows = document.createElement('tr');
    rows.innerHTML = `
    <td>${arr1[item].hall_name}</td>
    <td>${arr1[item].hall_address}</td>
    `;
    target.append(rows);
  });
  console.log(arr2);
}

async function windowActions() {
  fetchDiningHalls();
}

window.onload = windowActions;
async function fetchDiningHalls() {
  const targetList = document.querySelector('.target-list');
  const targetList2 = document.querySelector('.target-list2');
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
    const appendItem = document.createElement('li');
    appendItem.classList.add('block');
    appendItem.classList.add('list-item');
    appendItem.innerHTML = `<td class="hn">${arr1[item].hall_name}</td>`;
    targetList.append(appendItem);

    const appendItem2 = document.createElement('li');
    appendItem2.classList.add('block');
    appendItem2.classList.add('list-item');
    appendItem2.innerHTML = `<td class="hl">${arr1[item].hall_address}</td>`;
    targetList2.append(appendItem2);
  });
  console.log(arr2);
}

fetchDiningHalls();
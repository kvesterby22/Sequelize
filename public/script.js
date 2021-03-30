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

fetchDiningHalls();
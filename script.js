/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newUser = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newUser);
  console.log(arr[arr.length - 1]);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item) => item.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const conArr = [
    { id: 5, name: "ahmed", age: "22", profession: "developer" },
    { id: 6, name: "mohammed", age: "62", profession: "electrical engineer" },
    { id: 7, name: "moin", age: "24", profession: "chief" },
  ];
  const comb = arr.concat(conArr);
  console.log(comb);
}

const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  function PrintDeveloperbyMap() {
    const developers = employees.filter(employee => employee.profession === "developer");
    developers.map(developer => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(filteredEmployees);
  }
  
  function ConcatinateArray() {
    const newArray = [
      { id: 4, name: "emma", age: "22", profession: "designer" },
      { id: 5, name: "alex", age: "25", profession: "manager" },
      { id: 6, name: "lisa", age: "30", profession: "developer" }
    ];
  
    const concatenatedArray = employees.concat(newArray);
    console.log(concatenatedArray);
  }

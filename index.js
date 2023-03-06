let arr = [
  {
    id: 1,
    name: "Aman",
  },
  {
    id: 2,
    name: "Priya",
  },
  {
    id: 3,
    name: "Urvashi",
  },
  {
    id: 4,
    name: "Jay",
  },
  {
    id: 5,
    name: "Aman",
  },
  {
    id: 6,
    name: "Roshni",
  },
  {
    id: 7,
    name: "Nikita",
  },
  {
    id: 7,
    name: "Shiv",
  },
  {
    id: 8,
    name: "Teena",
  },
  {
    id: 9,
    name: "Roshni",
  },
  {
    id: 10,
    name: "Preeti",
  },
];

// Fetch unique users in descending order by name
const uniqueUsers = arr.filter((user, index) => {
  return arr.findIndex((u) => u.name === user.name) === index;
});

uniqueUsers.sort((a, b) => b.name.localeCompare(a.name));

console.log("Unique users in descending order:", uniqueUsers);

// Fetch particular user by id
const userId = 1;
const particularUser = arr.find(user => user.id === userId);

console.log("Particular user:", particularUser);

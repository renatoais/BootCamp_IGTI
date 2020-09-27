let allUsers = [];

window.addEventListener("load", () => {
  fetchUser();
});

async function fetchUser() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  allUsers = json.map((results) => {
    return {
      name: results.name.first,
      lastname: results.name.last,
      gender: results.gender,
      age: results.dob.age,
    };
  });

  console.log(allUsers);
}

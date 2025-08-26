//create objects
const Users = {
    FirstName:"Subrata",
    gender:"male"
};
console.log(Users["gender"]);

//Create array of objects
const allUsers = [{
    FirstName: "Subrata",
    gender: "male"
}, {
    FirstName: "Biswas",
    gender: "male",
}, {
    FirstName: "Priya",
    gender: "Female"
}];

for (let i = 0; i < allUsers.length; i++)
{
    if (allUsers[i]["FirstName"] == "Priya")
        console.log(allUsers[i]["gender"]);
}

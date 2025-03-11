const student ={
    fullName: "Subrata Biswas",
    Institute: "PSTU",
    Session: "2019 - 20",
    Birth: {
        Village: "Pirer par",
        District:"Barishal"
    }
}

console.log(
    "My name is " + student.fullName + ".I read at " + student.Institute
        + ".My session is " + student.Session + ".My birth place is "
        + student.Birth.Village +","+ student.Birth.District
);

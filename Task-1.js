const person = {
    city: "Moscow"
}
const student = Object.create(person);
student.ownCity = "Piter";

function keyOfObj(obj) {

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key)
        }
    }

}

keyOfObj(student)
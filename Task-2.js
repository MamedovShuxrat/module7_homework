function isStrHas(str, obj) {

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === str) return true
        }
    }
    return false

}
console.log(isStrHas('ownCity', person))
console.log(isStrHas('ownCity', student))
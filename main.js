function getAge() {
    let age = prompt("How old are you");
    age = Number(age);

    if (isNaN(age) || age < 0) {
        alert("Entered data is invalid.");
    }else if (age <= 11){
        alert("You're a child");
    } else if (age <= 17){
            alert("You're are a teenager");
    } else if (age >= 18){
        alert("You're an adult");
    } else if (age >= 65){
        alert("You're a pensioner");
    }

}



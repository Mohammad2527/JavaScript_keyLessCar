var age =prompt("Enter your age: ");
if (age < Number(18)){
 alert("Sorry, you are too young to drive this car. Powering off");
} else if (age == Number(18)){
    alert("Congratulation on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering on. Enjoy the ride!");
}

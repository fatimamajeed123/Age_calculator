const Calculate = () => {
    // Get input elements
    var dob = document.getElementById("dob");
    var cd = document.getElementById("cd");

    // Extract values from input fields
    var birthyear = Number(dob.value.slice(0, 4));
    var birthmonth = Number(dob.value.slice(5, 7));
    var birthday = Number(dob.value.slice(8, 10));  // Fix: Use slice(8,10)

    var currentyear = Number(cd.value.slice(0, 4));
    var currentmonth = Number(cd.value.slice(5, 7));
    var currentday = Number(cd.value.slice(8, 10)); // Fix: Use slice(8,10)

    console.log("Birth Date:", birthyear, birthmonth, birthday);
    console.log("Current Date:", currentyear, currentmonth, currentday);

    let agetext = document.querySelector(".result");

    // Error handling for incorrect dates
    if (currentyear < birthyear || 
        (currentyear === birthyear && currentmonth < birthmonth) || 
        (currentyear === birthyear && currentmonth === birthmonth && currentday < birthday)) {
        agetext.innerHTML = "Enter a valid date!";
        return;
    }

    // Calculate age
    let year = currentyear - birthyear;
    let month = currentmonth - birthmonth;
    let day = currentday - birthday;

    // Adjust for negative day
    if (day < 0) {
        month--; 
        day += new Date(currentyear, currentmonth - 1, 0).getDate(); // Fix: Get correct days in the previous month
    }

    // Adjust for negative month
    if (month < 0) {
        year--;
        month += 12;
    }

    // Display result
    agetext.innerHTML = `${year} years, ${month} months, ${day} days`;
};

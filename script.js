
function generateParchi() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let mobile = document.getElementById("mobile").value;
    let doctor = document.getElementById("doctor").value;
    let problem = document.getElementById("problem").value;
    let diagnosis = document.getElementById("diagnosis").value;
    let medicine = document.getElementById("medicine").value;



    if (
        name === "" ||
        age === "" ||
        gender === "" ||
        mobile === "" ||
        doctor === "" ||
        problem === ""
    ) {

        alert("Please fill all required patient details!");

        return;
    }



    let tokenNumber =
        Math.floor(Math.random() * 900) + 100;



    let now = new Date();

    let date = now.toLocaleDateString("en-IN");

    let time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
    });



    document.getElementById("pname").innerText = name;

    document.getElementById("page").innerText = age;

    document.getElementById("pgender").innerText = gender;

    document.getElementById("pmobile").innerText = mobile;

    document.getElementById("pdoctor").innerText = doctor;

    document.getElementById("pproblem").innerText = problem;

    document.getElementById("pdiagnosis").innerText =
        diagnosis || "Not provided";

    document.getElementById("pmedicine").innerText =
        medicine || "No medicine entered";


    document.getElementById("token").innerText =
        tokenNumber;

    document.getElementById("date").innerText =
        date;

    document.getElementById("time").innerText =
        time;


    document.getElementById("parchi").style.display =
        "block";



    document.getElementById("parchi").scrollIntoView({
        behavior: "smooth"
    });
}

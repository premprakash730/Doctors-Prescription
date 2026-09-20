

function generateParchi() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let doctor = document.getElementById("doctor").value;
    let problem = document.getElementById("problem").value;

    if (name == "" || age == "" || mobile == "" ||
        doctor == "" || problem == "") {

        alert("Please fill all details!");
        return;
    }

    // Random Token Number
    let tokenNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("token").innerText = tokenNumber;
    document.getElementById("pname").innerText = name;
    document.getElementById("page").innerText = age;
    document.getElementById("pmobile").innerText = mobile;
    document.getElementById("pdoctor").innerText = doctor;
    document.getElementById("pproblem").innerText = problem;

    // Current Date
    let today = new Date().toLocaleDateString();
    document.getElementById("date").innerText = today;

    document.getElementById("parchi").style.display = "block";
}
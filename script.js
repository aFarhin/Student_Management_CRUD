
var selectedRow = null
let id = 0;

var names = document.getElementById("Name");
var email = document.getElementById("Email");
var gpa = document.getElementById("GPA");
var age = document.getElementById("Age");
var degree = document.getElementById("Degree");

// Function of Data Adding
function addStudent(e) {


    // Check if any required fields are empty
    if (names.value === "" || email.value === "" || gpa.value === "" || age.value === "" || degree.value === "") {
        alert("Please fill in all required fields before submitting.");
        return;

    }

    event.preventDefault();
    var formData = readFormData();

    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}


// Read Data
function readFormData() {
    var formData = {};
    var name = document.getElementById("Name");
    var email = document.getElementById("Email");
    var gpa = document.getElementById("GPA");
    var age = document.getElementById("Age");
    var degree = document.getElementById("Degree");


    // set form data
    formData["Name"] = name.value;
    formData["Email"] = email.value;
    formData["GPA"] = gpa.value;
    formData["Age"] = age.value;
    formData["Degree"] = degree.value;

    return formData;
}





// Insert data
function insertNewRecord(data) {

    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    id++;
    cell1.innerHTML = id;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Name;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.GPA;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Age;

    cell16 = newRow.insertCell(5);
    cell16.innerHTML = data.Degree;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick="onEdit(this)"><img src="./edit 1.png" alt=""></button> <button onClick="onDelete(this)"> <img src="./trash-2 1.png" alt=""></button>`;



}

// Update Data
function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = id;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.GPA;
    selectedRow.cells[4].innerHTML = formData.Age;
    selectedRow.cells[5].innerHTML = formData.Degree;


}

//Edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("GPA").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Degree").value = selectedRow.cells[5].innerHTML;
    document.getElementById('submit').innerText = 'Edit Student';

// Set the id value to the current value in the first cell of the selected row
     id = parseInt(selectedRow.cells[0].innerHTML);
}

function updateStudentRecord() {
    // Get the values of the form fields
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var gpa = document.getElementById("GPA").value;
    var age = document.getElementById("Age").value;
    var degree = document.getElementById("Degree").value;

    // Update the record data in the table
    updateRecord({
        Name: name,
        Email: email,
        GPA: gpa,
        Age: age,
        Degree: degree
    });

    // Reset the form fields and button text
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("GPA").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Degree").value = "";
    document.getElementById("submit").innerText = "Add Student";
}


//Delete data
function onDelete(td) {
    if (confirm('Are you confirm to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset data
function resetForm() {
    document.getElementById("Name").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("GPA").value = '';
    document.getElementById("Age").value = '';
    document.getElementById("Degree").value = '';
    selectedRow = null;
}


// Search Data 
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("storeList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        tdName = tr[i].getElementsByTagName("td")[1];
        tdEmail = tr[i].getElementsByTagName("td")[2];
        tdDegree = tr[i].getElementsByTagName("td")[5];
        if (tdName || tdEmail || tdDegree) {
            txtValueName = tdName.textContent || tdName.innerText;
            txtValueEmail = tdEmail.textContent || tdEmail.innerText;
            txtValueDegree = tdDegree.textContent || tdDegree.innerText;
            if (txtValueName.toUpperCase().indexOf(filter) > -1 ||
                txtValueEmail.toUpperCase().indexOf(filter) > -1 ||
                txtValueDegree.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


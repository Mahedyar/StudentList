let students = [
    {id:1 , name : "Mahed" , lastname : "Yarmohammadi"} ,
    {id:2 , name : "Sina" , lastname : "Pilevar"} ,
    {id:3 , name : "Akbar" , lastname : "Ghandehari"} ,
    {id:4 , name : "Hamed" , lastname : "Rafiyi"}

]

function addingStudent (student){
    students.push(student)
    renderTable()
}

function removingStudent (id) {
    students = students.filter(student => student.id !== id)
    renderTable()
}

function updatingStudent (id , newStudent) {
    students = students.map(student => student.id === id ? newStudent : student)
    renderTable()
}


function renderTable() {
    const table = document.getElementById("table")
    let tbody = m
    tbody.innerHTML =""
    students.forEach(student => {
        tbody.appendChild(
            `
            <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.lastname}</td>
            </tr>
            `
        )
    })
}
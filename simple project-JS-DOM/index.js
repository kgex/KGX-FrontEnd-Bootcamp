const form = document.getElementById("form")

const tbody = document.getElementById("container")

let users = JSON.parse(localStorage.getItem("users")) || [];


form.addEventListener("submit",(event)=>{

    event.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value 

    const user = {
        email : email,
        password : password
    }

    console.log("submitted",email,password)

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    addToTable(user);

    form.reset()
    
})

{/* <tr>
<th scope="row">3</th>
<td>Jacob</td>
<td>Thornton</td>
</tr> */}


function addToTable(user){
    const tr = document.createElement("tr")

    const th = document.createElement("th")

    th.innerText = tbody.children.length + 1

    const email = document.createElement("td")

    const password = document.createElement("td")

    email.innerText =user.email;
    password.innerText = user.password;

    tr.append(th,email,password)

    tbody.append(tr)
    
}

for (const user of users) {
    addToTable(user);
}
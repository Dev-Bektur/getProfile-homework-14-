let result = document.querySelector(".result")

function getProfile() {
    fetch('https://dummyjson.com/users')
    .then((res) => {
        return res.json()
    }) .then((window) => {
        console.log(window);
        result.innerHTML = window.users.map((item) => {
        return`
        <div class="card">
        <img src="${item.image}"/>
        <p class="candidate">Candidate №${item.id}</p>
        <h2 class="name"><span class="span">Name:</span> ${item.firstName} ${item.lastName}</h2>
        <p class="birth"><span class="span">Was born on</span> ${item.birthDate}, </p>
        <p class="country"><span class="span">in</span> ${item.address.state}, ${item.address.city}</p>
        <p class="phoneNumber"><span class="span">Phone number:</span> <span class="number">${item.phone}</span></p>
        <p class="education"><span class="span">Graduation</span> <span class="university">"${item.university}"</span></p>
        </div>
        `
        }).join("")
    })
}

getProfile()
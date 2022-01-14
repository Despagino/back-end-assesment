document.getElementById("complimentButton").addEventListener("click", () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res =>  {
      const data = res.data;
      alert(data)
    })
  })


document.getElementById("fortuneButton").addEventListener("click", () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
})

let form = document.querySelector("#formSubmit")

getSelectValue = () => {
    let select = document.querySelector("choices").value
    return select
}

let createInfo = body => {
    axios.post("http://localhost:4000/api/advice/", body)
    .then(displayInfo(body))
}
let deleteAdvice = id => {
    axios.delete(`${"http://localhost:4000/api/advice/"}/${id}`)
    .then(displayInfo(body))
}

submitHandler = (e) => {
    e.preventDefault()

    let name = document.querySelector("#firstname")
    let advice = document.querySelector("#advice")
    
    

    let bodyObj = {
        name: name.value,
        advice: advice.value,
    }

    name.value = ""
    advice.value = ""

    createInfo(bodyObj)
   
}

let result = document.getElementById("result")


displayInfo = (body) => {

    let name = document.createElement("h3")
    let space = document.createElement("h3")
    let section = document.createElement("section")
    let deleteButton = document.querySelector("button")
    
    section.innerHTML = `
    <h3>My name is ${body.name} and my advice is ${body.advice}</h3
    <div>
    <button id="deleteButton" onclick="deleteAdvice" (${body.id}"> delete </button>
    </div>
    `
    // let input = `My name is ${body.name} and my advice is ${body.advice}`
    
    result.appendChild(section)

    deleteButton.addEventListener("click", deleteAdvice)
}



form.addEventListener("submit", submitHandler)

    

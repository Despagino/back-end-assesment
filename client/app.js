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
let deleteButton = document.querySelector("#deleteButton")


let createInfo = body => {
    axios.post("http://localhost:4000/api/advice/", body)
    .then(res => {
        let section = document.createElement("section")        
        section.innerHTML = `
         <h3>My name is ${body.name} and my advice is ${body.advice}</h3 
        `
        result.appendChild(section)
        console.log(res.data)
    }
    )}

let deleteAdvice = () => {
        axios.delete(`http://localhost:4000/api/delete`)
        .then(res => {
            console.log(res.data)
            result.innerHTML = ''
        })
    }

    deleteButton.addEventListener("click", deleteAdvice)
    
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
form.addEventListener("submit", submitHandler)

    

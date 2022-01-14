const compliments = require('./compliments.json')
const fortunes = require('./fortunes.json')
const advices = require('./advice.json')

let globalId = 2

module.exports = {
    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * Object.keys(compliments).length);
        let randomCompliment = compliments[randomIndex].data;
        res.status(200).send(randomCompliment)
    },
    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * Object.keys(fortunes).length);
        let randomFortune = fortunes[randomIndex].fortune;
        res.status(200).send(randomFortune);
    },
    createAdvice: (req, res) => {
        let {name, advice} = req.body
        let newAdvice = {
            name,
            advice,
            id: globalId,
        }
        advices.push(newAdvice)
        res.status(200).send(advices)
        globalId++
        console.log(advices)
    },
    deleteAdvice: (req, res) => {
        let index = advices.findIndex(advice => {
            advice.id == +req.params.id
        })
        console.log(req.params)
        advices.splice(index, 1)
        res.status(200).send(advices)
    }
}
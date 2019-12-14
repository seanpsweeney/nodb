let list = [{
        id: 0,
        statement: "HTML stands for HyperText Markup Language.",
        answer: true
    },
    {
        id: 1, 
        statement: "React is a web application framework for Node.js.",
        answer: false
    },
    {
        id: 2,
        statement: "Pigeons wear cowboy hats.",
        answer: true
    }];

let id = 3;

module.exports = {
    getList: (req, res) => {
        res.status(200).send(list)
    },
    addStatement: (req, res) => {
        const {statement, answer} = req.body
        list.push({statement, answer, id})
        id++
        res.status(200).send(list)
    },
    updateStatement: (req, res) => {
        const updatedInfo = req.body;
        const {id} = req.params;
        const index = list.findIndex(e => e.id === +id);
        const updatedObj = {...list[index], ...updatedInfo};
        list[index] = updatedObj;
        res.status(200).send(list)
    },
    delete: (req, res) => {
        const {id} = req.params;
        const listIndex = list.findIndex(e => e.id === +id);
        list.splice(listIndex, 1);
        res.status(200).send(list);
    }
}
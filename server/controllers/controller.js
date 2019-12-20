let list = [{
        id: 0,
        statement: "HTML stands for HyperText Markup Language.",
        mastered: false
    },
    {
        id: 1, 
        statement: "React is a Javascript library for building user interfaces",
        mastered: false 
    }];

let id = 2;

module.exports = {
    getList: (req, res) => {
        res.status(200).send(list)
    },

    addStatement: (req, res) => {
        const {newStatement} = req.body;
        newStatement.mastered = false;
        newStatement.id = id;
        id++;
        list.push(newStatement);
        res.status(200).send(list);
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
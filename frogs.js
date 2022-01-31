const frogData = [
    { id: 1, title: "", content: ""},
    { id: 2, title: "", content: ""},
    { id: 3, title: "", content: ""},
    { id: 4, title: "", content: ""},
    { id: 5, title: "", content: ""},
    ];

    //return copy of data
    const list = () => {
        return [...frogData] 
      };

     //return frog by id 
    const find = (id) => {
        const frog = frogData.find(frog => frog.id === +id);
        return {...frog}; 
    }      
      
    module.exports = { list: list, find: find };
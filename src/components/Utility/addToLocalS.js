const getStoreApp =()=>{
    const storApp = localStorage.getItem("installed");
    if(storApp){
        const storAppData = JSON.parse(storApp);
        return storAppData;
    }
    else{
        return [];
    }
}

const addToLocalS =(id) =>{
    const storAppData = getStoreApp();
    if(storAppData.includes(id)){
        alert("exist")
    }
    else{
        storAppData.push(id)
        const data =JSON.stringify(storAppData)
        localStorage.setItem('installed',data)
    }
}


export {addToLocalS};
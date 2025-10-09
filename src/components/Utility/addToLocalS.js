import { toast } from "react-toastify";

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

const addToLocalS =(id ) =>{

    const storAppData = getStoreApp();
    if(storAppData.includes(id)){
        toast("App Exist on you device")
    }
    else{
        toast("Installation Complete")
        storAppData.push(id)
        const data =JSON.stringify(storAppData)
        localStorage.setItem('installed',data)
    }
}


export {addToLocalS,getStoreApp};
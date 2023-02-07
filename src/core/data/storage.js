import { getSectorData } from "./temp.data";
const storageStucture = {
    sector : getSectorData(),
    sectorInvolved : []
}

export function initStorage(){
    if (!localStorage.hasOwnProperty("store")) {
        localStorage.setItem("store", JSON.stringify(storageStucture));
    }
} 

export function getStore(){
    return JSON.parse(localStorage.getItem("store"));
}

export function addToStore(state = {}){
    localStorage.setItem("store", JSON.stringify({...getStore(), ...state}));
}

import { getStore, addToStore} from "../../core/data/storage";

export default {
    getAllSectorAsKeyValue,
    addSectorInvolved,
    updateSectorInvolved,
    removeSectorInvolved,
    getAllSectorInvolved,
    getSectorInvolved
}



function getAllSectorAsKeyValue() {
    return Promise.resolve({data: getStore().sector}).then((data) => data.data);
}

function addSectorInvolved(data) {
    return Promise.resolve().then(
        ()=>{
            data.id = getStore().sectorInvolved.length + 1;
            const dataToStore = [...getStore().sectorInvolved, ...[data]];
            addToStore({sectorInvolved: dataToStore});
            return {data: dataToStore[dataToStore.length - 1]};
        }
    );
}

function updateSectorInvolved(data) {
    return Promise.resolve().then(
        () =>{
            const index = getStore().sectorInvolved.findIndex(x => x.id == data.id);
            const prev = [...getStore().sectorInvolved];
            prev[index] = data;
            addToStore({sectorInvolved: prev});
            return {data};
        }
    );
}

function removeSectorInvolved(id) {
    return Promise.resolve().then(
        ()=>{
            const dataToStore = getStore().sectorInvolved.filter(x => x.id != id);
            addToStore({sectorInvolved: dataToStore});
            return {data: id}
        }
    );
}


function getAllSectorInvolved() {
    return Promise.resolve({data : getStore().sectorInvolved}).then((data) => data.data);
}

function getSectorInvolved(id) {
    const value = getStore().sectorInvolved.find(x => x.id == id) || {};
    return Promise.resolve({data : value}).then(
        (data) => data.data
    );
}
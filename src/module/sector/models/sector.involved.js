
export class SectorInvolvedModel {
    id;
    name;
    sectorName;
    sectorId;
    isAgreeTerm;
    
    constructor(id = -1, name ='', sectorName = '', sectorId = -1, isAgreeTerm = false){
        this.id =  id
        this.name = name
        this.sectorName = sectorName
        this.sectorId = sectorId
        this.isAgreeTerm = isAgreeTerm
    }
}
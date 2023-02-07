import { useEffect, useState } from 'react';
import { SectorInvolvedModel } from '../models/sector.involved';
import services from '../services';


export function SectorCreateUpdateForm({sectorInvolvedId, isNew, closeCreateUpdateForm, refresh}) {
  const [sectorInvolved, setSectorInvolved] = useState(new SectorInvolvedModel());
  const [sector, setSector] = useState([{key:-1, value:'-- select sector --'}]);
  const [error, setError] = useState ({});

  useEffect(()=>{
    getSector();
    if(!isNew()){
      getSectorInvolved(sectorInvolvedId);
    }
  },[]);

  const onFormValidate = ()=>{
    return Promise.resolve().then(()=>{
      const error = {};
      const {name, sectorId, isAgreeTerm } = sectorInvolved;
      if(name=='') error['name']=true;
      if(sectorId=='-1') error['sectorId']=true;
      if(isAgreeTerm == false) error['isAgreeTerm']=true;
      setError(error);
      return error;
    });
  }
  

  const save = () =>{
    onFormValidate().then((e)=>{
      if(Object.keys(e).length == 0){
        sectorInvolved.sectorName = sector.find(x=> x.key == sectorInvolved.sectorId).value;
        (isNew() ? services.addSectorInvolved(sectorInvolved) : services.updateSectorInvolved(sectorInvolved)).then(()=>{
          closeCreateUpdateForm();
          refresh();
        });
      }
    })
  }

  const onChange = (value)=>{
    setSectorInvolved({...sectorInvolved, ...value});
  }

  const getSectorInvolved = (id) => {
    services.getSectorInvolved(id).then((data)=>{
      setSectorInvolved({...sectorInvolved, ...data});
    });
  }

  const getSector = () => {
    services.getAllSectorAsKeyValue().then((data)=>{
      setSector([...sector, ...data]);
    });
  }

  return (
    <div>

      <div className='form-group mb-3'>
        <label for='name'>Name</label>
        <input type='text' className='form-control' value={sectorInvolved.name} id='name' onChange={(e)=>{onChange({name: e.target.value})}} placeholder='Enter name'/>
        {'name' in error && <small id='form-error' className='form-text text-danger'>required.</small>}  
      </div>

      <div className='form-group mb-3'>
        <label for='sector'>Sector</label>
        <select className='form-control' id='sector' value={sectorInvolved.sectorId} onChange={(e)=>{onChange({sectorId: e.target.value})}}>
          {sector.map((v) => <option value={v.key} key={v.key}>{v.value}</option>)}
        </select>
        {'sectorId' in error && <small id='form-error' className='form-text text-danger'>required.</small>}
      </div>

      <div className='form-group d-flex flex-column mb-3 '>
        <input type='checkbox' className='form-check-input ' id='agree-term' checked={sectorInvolved.isAgreeTerm} onChange={()=>{ onChange({isAgreeTerm: !sectorInvolved.isAgreeTerm}) }}/>
        <label className='form-check-label' for='agree-term'> Agree to terms</label>
        {'isAgreeTerm' in error && <small id='form-error' className='form-text text-danger'>required.</small>}
      </div>

      <button className='btn btn-primary w-100' onClick={save}>Save</button>

    </div>
  );
}

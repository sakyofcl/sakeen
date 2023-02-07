import { SectorHeader } from '../components/header';
import { ListingCard } from '../components/card';
import { useState, useEffect } from 'react';
import { Popup } from '../../../core/components/popup';
import { SectorCreateUpdateForm } from '../components/form';
import service from '../services';
export const SectorListing = ()=>{
    const [item, setItem] = useState([]);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [sectorInvolvedId, setSectorInvolvedId] = useState(-1);
    const isNew = () => sectorInvolvedId == -1 || sectorInvolvedId == null ;

    useEffect(()=>{
        fetchAllSectorInvolved();
    },[]);
    
    
    const openCreateUpdateForm = (id = -1)=>{
        setSectorInvolvedId(id);
        setIsShowPopup(true);
    }
    const closeCreateUpdateForm = ()=> {
        setIsShowPopup(false);
    } 

    const headerProps={
        onClick :()=> openCreateUpdateForm()
    }

    const popupProps = {
        show : isShowPopup,
        title :isNew() ? 'Add sector involved' : 'Edit sector involved',
        handleClose : closeCreateUpdateForm
    }

    const removeSectorInvolved = (id)=>{
        service.removeSectorInvolved(id).then(()=>{
            fetchAllSectorInvolved();
        }); 
    }

    const fetchAllSectorInvolved = ()=>{
        service.getAllSectorInvolved().then((data)=>{
            setItem(data);
        });
    }
    const renderRow = (value)=>{
        return (
            <div className='col-md-3 mb-4'>
                <ListingCard {...value} onClickEdit = {() => openCreateUpdateForm(value.id) } onClickDelete={()=>{removeSectorInvolved(value.id)}}/>
            </div>
        )
    }
    return (
        <>
            <SectorHeader {...headerProps}/>
            <div className='row mt-4'>
                {item.map((v) => renderRow(v))}
            </div>
            <Popup {...popupProps} children={<SectorCreateUpdateForm sectorInvolvedId={sectorInvolvedId} isNew={isNew} closeCreateUpdateForm={closeCreateUpdateForm} refresh={fetchAllSectorInvolved} />} />
        </>
    )
}


export const ListingCard = ({name, sectorName, onClickEdit, onClickDelete})=>{
    return (
        <div className="listing-card">
            <div className="title">{name}</div>
            <div className="sub-title">{sectorName}</div>
            <div className="action-area">
                <button className='btn btn-primary' onClick={onClickEdit}><i className="fa-sharp fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-danger' onClick={onClickDelete}><i className="fa-sharp fa-solid fa-trash"></i></button>
            </div>
        </div>
    );
}
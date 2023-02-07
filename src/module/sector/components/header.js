
export const SectorHeader = ({onClick})=>{
    return (
        <div className='sector-head'>
            <span>Sector involved listing</span>
            <button className='btn btn-primary' onClick={onClick}><i class="fa-solid fa-plus"></i>Add</button>
        </div>
    )
}
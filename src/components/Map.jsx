import React from 'react'
import Iframe from 'react-iframe'
import useMapStore from '../Store'

function MapItem(props) {
    return <div className='border border-black '>
        <div className='flex flex-col items-center justify-center mt-10 w-full '>
            <h1 className='text-3xl'>{props.title}</h1>
            {/* iframe here is used to show map */}
            <Iframe width="600" height="450"
                    url={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${encodeURIComponent(props.title)}%22%7D`}></Iframe>
        </div>
        <div className='flex flex-row items-center justify-center mt-8 w-full mb-10'>
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-32'>Bookmark
            </button>
            <button
                onClick={() => {
                    props.removeItemHandler(props.id)
                }}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Remove
            </button>
        </div>
    </div>
}


export function Map() {

    const {mapItems, removeItem} = useMapStore(
        (state) => ({
            mapItems: state.mapItems,
            removeItem: state.removeItem
        })
    )

    const mapElements = mapItems.map((mapItem, i) => {
        return <MapItem title={mapItem.title} id={mapItem.id} key={mapItem.id} removeItemHandler={removeItem}></MapItem>
    });

    return <React.Fragment>
        {mapElements}
    </React.Fragment>
}
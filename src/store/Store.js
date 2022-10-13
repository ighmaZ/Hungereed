
import create from "zustand";
import {devtools, persist} from 'zustand/middleware' // running in the browser 


const mapStore = (set) => ({
    mapItems: [],
  
    
    addMapItem: (mapItem) => {   // add map
        set((state) => ({
            mapItems: [mapItem, ...state.mapItems],
        }))
    },
    removeItem: (mapId) => {    // remove map
        set((state) => ({
            mapItems: state.mapItems.filter((c) => c.id !== mapId)
        }))
    },


})

const useMapStore = create(
    devtools(
        persist(mapStore, {
            name: "mapItems",
        })
    )
)


export default useMapStore;



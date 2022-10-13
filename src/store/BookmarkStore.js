import create from 'zustand'
import {devtools, persist} from 'zustand/middleware' // running in the browser 

const BookmarkStore = (set) => ({
    BookmarkItems: [],
    addBookmarkItem: (mapItem) => {   // add bookmark map
        set((state) => ({
            BookmarkItems: [mapItem, ...state.BookmarkItems],
        }))
    },
    removeBookmarkItem: (mapId) => {    // remove bookmark map
        set((state) => ({
            BookmarkItems: state.BookmarkItems.filter((c) => c.id !== mapId)
        }))
    },
 
})

const useBookmarkStore = create(
    devtools(
        persist(BookmarkStore, {
            name: "BookmarkItems",
        })
    )
)

export default useBookmarkStore;
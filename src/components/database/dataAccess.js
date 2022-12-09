import {database} from "./database.js"

export const getShows = () => {
    return [...database.shows]
}
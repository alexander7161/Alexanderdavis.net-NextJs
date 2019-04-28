import { data } from "./projectData";
import {
    ProjectsState,
    RestaurantListActionTypes,
    UPDATE_RESTAURANTS,
} from "./types";

export default (
    state: ProjectsState = { data },
    action: RestaurantListActionTypes,
): ProjectsState => {
    switch (action.type) {
        case UPDATE_RESTAURANTS:
            return { ...state, data: action.projects };
        default:
            return state;
    }
};

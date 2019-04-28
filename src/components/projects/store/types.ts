export interface ProjectsState {
    data: Project[];
}

export const UPDATE_RESTAURANTS = "UPDATE_RESTAURANTS";

interface UpdateRestaurantsAction {
    type: typeof UPDATE_RESTAURANTS;
    projects: Project[];
}

export type RestaurantListActionTypes = UpdateRestaurantsAction;

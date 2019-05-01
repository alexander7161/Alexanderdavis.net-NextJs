export interface ProjectsState {
    data: ProjectFromAPI[];
}

export const UPDATE_RESTAURANTS = "UPDATE_RESTAURANTS";

interface UpdateRestaurantsAction {
    type: typeof UPDATE_RESTAURANTS;
    projects: ProjectFromAPI[];
}

export type RestaurantListActionTypes = UpdateRestaurantsAction;

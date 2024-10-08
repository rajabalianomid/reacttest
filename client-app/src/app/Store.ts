import { createContext, useContext } from "react"
import ActivityStore from "./stores/ActivityStore";
import CommonStore from "./stores/CommonStore";

interface Store {
    activityStore: ActivityStore,
    commonStore: CommonStore
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
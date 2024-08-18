import { Grid } from "semantic-ui-react"
import ActivityList from "./ActivityList"
import { useStore } from "../../../Store"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import LoadingComponent from "../../../layout/LoadingComponent"
import ActivityFilter from "./ActivityFilters"

function ActivityDashboard() {

    const { activityStore } = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />


    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="6">
                <ActivityFilter />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard)
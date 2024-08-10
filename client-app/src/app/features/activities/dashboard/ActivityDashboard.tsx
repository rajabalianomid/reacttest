import { Grid } from "semantic-ui-react"
import ActivityList from "./ActivityList"
import { Activity } from "../../../models/Activity"
import ActivityDetail from "../detail/ActivityDetail"
import ActivityForm from "../form/ActivityForm"
import { useStore } from "../../../Store"
import { observer } from "mobx-react-lite"



interface Props {
    activities: Activity[];
    handleDeletedActivity: (id: string) => void;
    submiting: boolean;
}

function ActivityDashboard({ activities, submiting, handleDeletedActivity }: Props) {

    const { activityStore } = useStore();
    const { selectActivity, editForm } = activityStore;

    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList activities={activities} submiting={submiting} handleDeletedActivity={handleDeletedActivity} />
            </Grid.Column>
            <Grid.Column width="6">
                {selectActivity && !editForm && <ActivityDetail />}
                {editForm && <ActivityForm />}ّ
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard)
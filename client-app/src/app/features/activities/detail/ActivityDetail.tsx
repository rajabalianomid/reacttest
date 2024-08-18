import { Grid } from "semantic-ui-react";
import { useStore } from '../../../Store';
import LoadingComponent from "../../../layout/LoadingComponent";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

function ActivityDetail() {

    const { activityStore } = useStore();
    const { selectActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        debugger;
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    debugger;
    if (loadingInitial || !activity) return <LoadingComponent />;
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity}></ActivityDetailedHeader>
                <ActivityDetailedInfo activity={activity}></ActivityDetailedInfo>
                <ActivityDetailedChat></ActivityDetailedChat>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar></ActivityDetailedSidebar>
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDetail)

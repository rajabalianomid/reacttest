import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from '../../../Store';
import LoadingComponent from "../../../layout/LoadingComponent";

function ActivityDetail() {

    const { activityStore } = useStore();
    const { selectActivity: activity, handleOpenForm, cancelActivity: handleCancelActivity } = activityStore;

    if (!activity) return <LoadingComponent />;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity?.category}.jpg?version=123`} />
            <Card.Content>
                <Card.Header>{activity?.title}</Card.Header>
                <Card.Meta>
                    <span>{activity?.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity?.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button onClick={() => handleOpenForm(activity.id)} basic color="blue" content="Edit"></Button>
                    <Button onClick={() => handleCancelActivity()} basic color="grey" content="Cancel"></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetail
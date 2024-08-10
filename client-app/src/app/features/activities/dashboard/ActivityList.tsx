import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/Activity";
import { useStore } from "../../../Store";

interface Props {
    activities: Activity[];
    handleDeletedActivity: (id: string) => void;
    submiting: boolean;
}
function ActivityList({ activities, submiting, handleDeletedActivity }: Props) {

    const { activityStore } = useStore();

    return (
        <Segment>
            <Item.Group divided>
                {
                    activities.map(activity => (
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as='a'>{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>{activity.city},{activity.venue}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={() => activityStore.selectedActivity(activity.id)} floated="right" content="view" color="blue" />
                                    <Button loading={submiting} onClick={() => handleDeletedActivity(activity.id)} floated="right" content="delete" color="red" />
                                    <Label basic content={activity.category} />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
            </Item.Group>
        </Segment>)
}

export default ActivityList

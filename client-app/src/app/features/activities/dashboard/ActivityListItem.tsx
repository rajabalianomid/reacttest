import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/Activity";
import { Link } from "react-router-dom";
// import { useStore } from "../../../Store";

interface Props {
    activity: Activity
}

function ActivityListItem({ activity }: Props) {

    // const { activityStore } = useStore();
    // const { deleteActivity, loading } = activityStore;

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image style={{ marginBottom: 5 }} size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by <Link to={`/profiles/${activity.id}`}>{activity.title}</Link></Item.Description>
                            <Item.Description>
                                <Label basic color='orange'>
                                    Host by bob
                                </Label>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activity/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>

    )
}

export default ActivityListItem;
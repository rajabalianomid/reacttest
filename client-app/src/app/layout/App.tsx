import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../Store';

function App() {

  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [submiting, setSubmiting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  function handleDeletedActivity(id: string) {
    setSubmiting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(f => f.id !== id)]);
      setSubmiting(false);
    })

  }

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activityStore.activities}
          handleDeletedActivity={handleDeletedActivity}
          submiting={submiting} />
      </Container>
    </div>
  )
}

export default observer(App)

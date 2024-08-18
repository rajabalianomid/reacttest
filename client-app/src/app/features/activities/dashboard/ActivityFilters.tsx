import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

function ActivityFilter() {
    return (
        <>
            <Menu vertical size="large" style={{ with: '100%', marginTop: 25 }}>
                <Header vertical size="large" attached color="teal" content="filters"></Header>
                <Menu.Item content="All Activities" />
                <Menu.Item content="I'm going" />
                <Menu.Item content="I'm hosting" />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}

export default ActivityFilter;
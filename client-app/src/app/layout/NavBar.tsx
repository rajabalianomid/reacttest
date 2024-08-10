import { Button, Container, Menu } from "semantic-ui-react"
import { useStore } from "../Store"

function NavBar() {

    const { activityStore } = useStore();

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities">
                    <Button onClick={() => activityStore.handleOpenForm()} positive type='button' content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
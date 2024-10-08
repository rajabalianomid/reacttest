import { Button, Container, Menu } from "semantic-ui-react"
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Activities"></Menu.Item>
                <Menu.Item as={NavLink} to='/errors' name="Errors"></Menu.Item>
                <Menu.Item name="Activities">
                    <Button as={NavLink} to='/createActivity' positive type='button' content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
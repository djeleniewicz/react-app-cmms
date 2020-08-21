import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import {Link} from 'react-router-dom';


class User extends Component {

    constructor(props) {
        super(props);
        this.state = {users: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/api/v1/users')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/v1/update-user/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsers = [...this.state.users].filter(i => i.id !== id);
            this.setState({users: updatedUsers});
        });
    }

    render() {
        const {users, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const userList = users.map(user => {
            return <tr key={user.id}>
                <td style={{whiteSpace: 'nowrap'}}>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.enabled}</td>
                <td>{user.created}</td>
                <td>{user.lastUpdated}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"users/" + user.id}>Edit user</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(users.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button size="sm" color="danger" tag={Link} to="/users">Add new user</Button>
                    </div>
                    <h3>All users</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">login</th>
                            <th width="20%">firstName</th>
                            <th>lastname</th>
                            <th>lastname</th>
                            <th>created date</th>
                            <th>last updated date</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default User;
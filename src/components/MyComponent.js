// class component
// function component
import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component { // class đã trả thành 1 class components
    // JSX cho phép viết code js trong html

    state = {
        listUsers: [
            { id: 1, name: "Van Hoc", age: "16" },
            { id: 2, name: "Van Duc", age: "22" },
            { id: 3, name: "Van Hoa", age: "69" },

        ]
    }
    // Xử lí thêm mới User
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers] // Spread Operator [...] 
        })
    }
    render() {
        // DRY; don't repeat yourself.
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}
export default MyComponent;
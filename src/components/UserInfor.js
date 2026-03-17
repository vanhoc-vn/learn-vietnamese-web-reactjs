import React from "react";
class UserInfor extends React.Component {
    state = {
        name: 'Van Hoc',
        address: 'Quang Binh',
        age: 30
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault(); // ngan chan reload trang
        alert('Me')
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your Name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <label>Your Age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}
export default UserInfor; 
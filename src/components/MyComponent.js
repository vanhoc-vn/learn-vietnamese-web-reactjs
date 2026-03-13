// class component
// function component
import React from 'react';

class MyComponent extends React.Component { // class đã trả thành 1 class components
    state = {
        name: 'Van Hoc',
        address: 'Quang Binh',
        age: 30
    };

    handleClick(event) {
        console.log('Click me')
        console.log("Randum", Math.floor((Math.random() * 100) + 1))
        this.setState({
            name: 'Van Hoc 2.0',
            age: Math.floor((Math.random() * 100) + 1),
        })
        this.setState({
            age: Math.floor((Math.random() * 100) + 1),
        })
    }

    handleOnMoverOver(event) {
        // console.log(event.pageX)
    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickSubmit = (event) => {
        event.preventDefault(); // ngan chan reload trang
        alert('Me')
        console.log(this.state)
    }
    // JSX cho phép viết code js trong html
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleClickSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button> Submit </button>
                </form>
            </div>
        );
    }
}
export default MyComponent;
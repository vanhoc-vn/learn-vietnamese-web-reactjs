// class component
// function component
import React from 'react';

class MyComponent extends React.Component { // class đã trả thành 1 class components
    state = {
        name: 'Eric',
        address: 'Hoi Dan IT',
        age: 30
    };
    // JSX cho phép viết code js trong html
    render() {
        return (
            <div>

                My name  is {this.state.name}


            </div>
        );
    }
}
export default MyComponent;
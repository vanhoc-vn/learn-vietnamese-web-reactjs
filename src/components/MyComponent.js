// class component
// function component
import React from 'react';

class MyComponent extends React.Component { // class đã trả thành 1 class components
    // JSX cho phép viết code js trong html
    render() {
        return (
            <div>my first component

                {
                Math.random()                    
                }
            </div>
        );
    }
}
export default MyComponent;
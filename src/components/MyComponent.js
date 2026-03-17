// class component
// function component
import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component { // class đã trả thành 1 class components
    // JSX cho phép viết code js trong html
    render() {
        const myInfor = ['ab', 'c', 'c']
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor name= "Van Hoc" age = "22" />
                <hr/>
                <DisplayInfor name= {"Van Hoa"} age = {26} myInfor={myInfor} />
            </div>
        );
    }
}
export default MyComponent;
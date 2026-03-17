import React from "react";

class DisplayInfor extends React.Component {
    render() {
       // destructuring array/object
        const {name, age} = this.props
        // props = properties: Tài sản, vì nó dùng để truyền dữ liệu từ cha sang cho con.
        return (
            <div>
                <div> My name's {name}</div>
                <div> My Age is {age}</div>
            </div>
        )
    }
}
export default DisplayInfor;
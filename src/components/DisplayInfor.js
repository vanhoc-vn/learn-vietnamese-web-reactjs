import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // destructuring array/object
        const { listUsers } = this.props
        // props = properties: Tài sản, vì nó dùng để truyền dữ liệu từ cha sang cho con.
        return (
            <div className='display-infor-container'>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {
                            this.state.isShowListUser === true ? "Hide list User" : "Show list User"
                        }
                    </span>
                </div>
                {
                    this.state.isShowListUser &&

                    <div>
                        {
                            listUsers.map((user, index) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div> My name's {user.name}</div>
                                        <div> My Age is {user.age}</div>
                                        <hr />
                                    </div>

                                )
                            })}
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfor;
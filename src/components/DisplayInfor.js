import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('Call constructor: 1')
        super(props);
        this.state = {
            isShowListUser: true
        }
    }
    componentDidMount() {
        console.log('>>>> Call me component ')
        setTimeout(() => {
            document.title = ' Van Hoc '
        }, 3000);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(' >>> Call me component did Update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('Chuc mung ban da co 5 User')
            }
        }

    }




    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('Call me render ')
        // destructuring array/object
        const { listUsers } = this.props
        // props = properties: Tài sản, vì nó dùng để truyền dữ liệu từ cha sang cho con.
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {
                            this.state.isShowListUser === true ? "Hide list User" : "Show list User"
                        }
                    </span>
                </div>
                {
                    this.state.isShowListUser &&
                    <>
                        {
                            listUsers.map((user, index) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>
                                            <div> My name's {user.name}</div>
                                            <div> My Age is {user.age}</div>
                                        </div>
                                        <div>
                                            <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
                                        </div>
                                    </div>

                                )
                            })}
                    </>
                }
            </div>
        )
    }
}
export default DisplayInfor;
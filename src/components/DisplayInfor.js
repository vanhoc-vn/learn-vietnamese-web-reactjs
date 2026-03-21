import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

// stateless (k co state) vs stateful (co kiem soat data nen dung class)
// class DisplayInfor extends React.Component {
//     render() {
//         console.log('Call me render ')
//         // destructuring array/object
//         const { listUsers } = this.props
//         // props = properties: Tài sản, vì nó dùng để truyền dữ liệu từ cha sang cho con.
//         return (
//             <div className='display-infor-container'>
//                 {
//                     true &&
//                     <>
//                         {
//                             listUsers.map((user, index) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div>
//                                             <div> My name's {user.name}</div>
//                                             <div> My Age is {user.age}</div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
//                                         </div>
//                                     </div>

//                                 )
//                             })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props
    return (
        <div className='display-infor-container'>
            {
                true &&
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
                                        <button onClick={() => props.handleDeleteUser(user.id)}> Delete </button>
                                    </div>
                                </div>

                            )
                        })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;
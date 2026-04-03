import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

const DisplayInfor = (props) => {
    const { listUsers } = props; // Ojb

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // Destructuring assignment
    // this.state = {
    //     isShowHideListUser: true
    // }
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    console.log("Call me")

    useEffect(() => { // Hàm render sẽ chạy trước sau đó sẽ chạy hàm này
        if(listUsers.length === 0) {
            alert( "Bạn đã xóa hết Users")
        }
        console.log("Hello useEffect")
    }, [listUsers]
    );

    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list Users" : "Show list Users"}
                </span>
            </div>
            {
                isShowHideListUser &&
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
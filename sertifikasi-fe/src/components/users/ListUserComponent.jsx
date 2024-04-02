import React, { useEffect, useState} from "react";
import { listUsers } from "../../service/UserService";
import { useNavigate } from "react-router-dom";

function ListUserComponent(){
    const [users, setUsers] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listUsers()
            .then(response =>{
                setUsers(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });        
    }, []);

    function addNewUser(){
        navigator('/add-user')
    }

    // const dummyData = [
    //     {
    //         "id":1,
    //         "nama": "Roni Prasetyo",
    //         "username": "roni.prasetyo",
    //         "email": "roniprsty@gmail.com",
    //         "role": "Admin"
    //     },
    //     {
    //         "id":2,
    //         "nama": "Elora Manuella Amei",
    //         "username": "elora.m",
    //         "email": "eloramanuella@gmail.com",
    //         "role": "Admin" 
    //     }
    // ]
    return(
        <div className="container">
            <h2 className="text-center">List of User</h2>
            <button className="btn btn-primary mb-2" onClick={addNewUser}>Add User</button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td>{user.nama}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserComponent
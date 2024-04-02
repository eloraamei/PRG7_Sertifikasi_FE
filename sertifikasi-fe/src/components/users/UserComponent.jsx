import React, { useEffect, useState} from "react";
import { createUser } from '../../service/UserService';
import { listProdis } from '../../service/ProdiService';
import { useNavigate } from "react-router-dom";

const UserComponent = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [pro_id, setPro_id] = useState('');
    const [prodiList, setProdiList] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        // Mengambil daftar prodi dari database saat komponen dimuat
        listProdis()
            .then(response => {
                setProdiList(response.data.data); // Mengatur daftar prodi ke state
            })
            .catch(error => {
                console.error('Error fetching prodi list:', error);
            });
    }, []);

    function saveUser(e){
        e.preventDefault();
        const user  = { nama, email, username, password, role, pro_id};

        createUser(user).then((response)=>{
            navigate('/users');
        });
    }
    return(
        <div className="container">
            <br />
            <div className="row">
                <div className="card">
                    <h2 className="text-center">Add User</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Nama :</label>
                                <input type="text" name="nama" value={nama} className="form-control"
                                onChange={(e) => setNama(e.target.value)}/>

                                <label className="form-label">Email :</label>
                                <input type="email" name="email" value={email} className="form-control"
                                onChange={(e) => setEmail(e.target.value)}/>

                                <label className="form-label">Username :</label>
                                <input type="text" name="username" value={username} className="form-control"
                                onChange={(e) => setUsername(e.target.value)}/>

                                <label className="form-label">Password :</label>
                                <input type="password" name="password" value={password} className="form-control"
                                onChange={(e) => setPassword(e.target.value)}/>

                                {/* <label className="form-label">Role :</label>
                                <input type="text" name="role" value={role} className="form-control"
                                onChange={(e) => setRole(e.target.value)}/> */}

                                <label className="form-label">Role :</label>
                                <select name="role" value={role} className="form-control" onChange={(e) => setRole(e.target.value)}>
                                    <option value="Admin">Admin</option>
                                    <option value="Participant">Participant</option>
                                </select>

                                {/* <label className="form-label">Prodi :</label>
                                <input type="text" name="pro_id" value={pro_id} className="form-control"
                                onChange={(e) => setPro_id(e.target.value)}/> */}

                                <label className="form-label">Prodi :</label>
                                <select name="pro_id" value={pro_id} className="form-control"
                                        onChange={(e) => setPro_id(e.target.value)}>
                                    <option value="">Pilih Prodi</option>
                                    {prodiList.map(prodi => (
                                        <option key={prodi.id} value={prodi.id}>{prodi.nama}</option>
                                    ))}
                                </select>

                            </div>
                            <button className="btn btn-success" onClick={saveUser}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserComponent
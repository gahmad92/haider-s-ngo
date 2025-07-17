import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function SeeUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const url = 'https://api.freeapi.app/api/v1/public/randomusers/user/random';
  const options={
    mehthod:'GET',
    headers:{accept:'application/json'}
  }
  const fetchUser =async()=>{
    try{
        const respone = await fetch(url,options);
        const result = await respone.json();
        console.log(result);
        setUsers([result.data]);
        setLoading(false);
    }
    catch (err){
        console.log(err);
        setError("something goes wrong while fetching users data");
        setLoading(false)
    }
  };
  fetchUser();
 }, [])
 
  

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center py-5 text-danger">{error}</div>;
  if (!users.length) return <div className="text-center py-5">No users found</div>;

  return (
    

    <>
    
    <div className="container py-5">
        <p className='text-light' style={{fontSize:'22px'}}>Every new Donator</p>
        <br />
      <h2 className="text-danger mb-4 text-center my-3"></h2>
      <div className="row">
        {users.map((user, index) => (
          <div className="col-md-12 mb-4" key={index}>
            <div
              className="card text-light h-100"
              style={{
                backgroundColor: '#1f1f1f',
                border: 'none',
                borderRadius: '20px',
                boxShadow: '0 0 20px rgba(229, 9, 20, 0.4)',
              }}
            >
              <div className="card-body text-center">
                <img
                  src={user.picture.large}
                  alt="User Avatar"
                  className="rounded-circle mb-3 border border-3"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderColor: '#e50914',
                  }}
                />
                <h5 style={{fontFamily:'monospace',fontWeight:'800', fontSize:'62px'}}>{user.name.title} {user.name.first} {user.name.last}</h5>
                <p className="text-secondary mb-1">{user.gender} | {user.nat}</p>
                <p className="text-light">{user.email}</p>
                  <p style={{fontWeight:'900', fontFamily:'cursive',fontSize:'50px'}}>
                    Donated {Math.floor(Math.random() * (100000 - 3000+1)) +3000} PKR
                  </p>
                  <p className='text-danger'
                  style={{fontWeight:'600',fontSize:'20px'}}
                  >Remember this money is send by foriegners and converted in to PKR</p>
                <p className="text-light">Phone: {user.phone}</p>
                <p className="text-light">Cell: {user.cell}</p>
                <button className="btn btn-danger btn-sm mt-2"style={{fontFamily:'cursive',fontSize:'24px'}}>Say Thanks 😊✨ </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default SeeUser;
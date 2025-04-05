import React from 'react';

const Login1 = () => {
  return (
    <div>
      <div className="card">
        <button className="hospital-button"  onClick={() => {
                window.location.href = '/signin';
              }} >LOG AS A SELLER</button>
      </div>


      <div className="card">
        <button className="patient-button"onClick={() => {
                window.location.href = '/signin2';}} >LOG AS A BUYER</button>
      </div>
    </div>
  );
};

export default Login1;

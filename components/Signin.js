// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { signIn } from '../utils/auth';

// function Signin() {
//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <h1>Hello friends!</h1>
//       <p>Drumming for Cats is a drumming platform made for cats, helping funky felines of all shapes and sizes stay connected and organized with other drummers.</p>
//       <p>Click the button below to join our community!</p>
//       <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
//         Sign In
//       </Button>
//     </div>
//   );
// }

// export default Signin;
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome to Drumming for Cats!</h1>
      <p>Drumming for Cats is an appointment tracking app made for drumming cats, helping funky felines of all shapes and sizes stay connected and organized with other drummers.</p>
      <p>Click the button below to join our community!</p>
      <Button
        type="button"
        size="lg"
        className="copy-btn"
        onClick={signIn}
        style={{
          background: 'black',
          color: 'white',
          borderColor: 'black',
        }}
      >
        Sign In
      </Button>
    </div>
  );
}

export default Signin;

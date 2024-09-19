import React from 'react';

function Team() {
    return ( 
        <div className="container">
      <div className="row p-3  border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div className="row p-5  text-muted " style={{ lineHeight:      "1.8", fontSize:"1.2em"}}>
           <div className="col-6 p-3 text-center">
              <img src="media/images/srp2.jpg" style={{borderRadius:"100%", width: "60%"}}/>
              <h4 className="mt-5">Swayansu Ranjan Pradhan</h4>
              <h6>Founder, CEO</h6>
           </div>
           <div className="col-6 p-5">
                <p>Swayansu bootstrapped and founded Zerodha in 2023 to overcome the hurdles he faced during his decade long stint as a trader . Today,
                Zerodha has changed the landscape of the Indian broking industry.</p>
                <p> He is a member  of the GDSC and the MERN Developer.Running(Athelate) is his zen.</p> <p>Connect on <a href="" style={{ textDecoration: "none"}}>HomePage</a> / <a href="https://x.com/home" style={{ textDecoration: "none"}}>Twitter</a>.
                </p>
           </div>
      </div>
    </div>
     );
}

export default Team;
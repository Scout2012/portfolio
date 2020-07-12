import React, { Component } from 'react';

class About extends Component {
   constructor(props){
      super(props)
      this.downloadEmail = this.downloadEmail.bind(this)
   }

   // downloadEmail(){
   //    fetch(this.props.data.resumedownload)
   //    .then(resp => resp.blob())
   //    .then(blob => {
   //      const url = window.URL.createObjectURL(blob);
   //      const a = document.createElement('a');
   //      a.style.display = 'none';
   //      a.href = url;
   //      // the filename you want
   //      a.download = 'Jacob_Powell_Resume.pdf';
   //      document.body.appendChild(a);
   //      a.click();
   //      window.URL.revokeObjectURL(url);
   //    })
   //    .catch((e) => console.log(e));
   // }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Jacob Powell" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <button className="button" href={resumeDownload}><i className="fa fa-download"></i>Download Resume</button>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

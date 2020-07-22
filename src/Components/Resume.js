import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        {/* <p>{education.description}</p> */}
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.title}</h3>
            <p className="info">{work.company}<span>&bull;</span> <em className="date">{work.years}</em></p>
            {work.description.map((description)=>{
              return <li className="jacob-job-description">{description}</li>
            })}
        </div>
      })
      // var skills = this.props.data.skills.map(function(skills){
      //   var imageClassName = 'jacob-programming-image';
      //   var skillClassName = 'columns feature-item'
      //   return <div key={skills.name}className={skillClassName}><img src={"images/" + skills.image}className={imageClassName}></img><em>{skills.name}</em></div>
      // })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns bgrid-thirds">

            <p>{skillmessage}
            </p>

          {/* {skills} */}
          <div className="skill-wrapper">
            <div className="skill-icons">
              <i class="devicon-git-plain-wordmark colored icon"></i>
              <i class="devicon-nodejs-plain-wordmark colored icon "></i>
              <i class="devicon-react-original-wordmark colored icon"></i>
            </div>
            <div className="skill-icons">
              <i class="devicon-cplusplus-plain-wordmark colored icon"></i>
              <i class="devicon-mysql-plain-wordmark colored icon"></i>
              <i class="devicon-python-plain-wordmark colored icon"></i>
            </div>
          </div>
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;

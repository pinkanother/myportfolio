import React from "react";
import "./Resume.scss";

const Resume = () => {
  const contactInfo = [
    "pinkanother@gmail.com",
    "https://pinkanother.netlify.app",
    "github.com/pinkanother",
  ];
  const education = [
    {
      title: "Bachelor of Computer Science",
      duration: "2012 - 2017",
      institution: "Anadolu University",
      description:
        "During my development, I immersed myself in hands-on projects involving modern programming languages, software development tools, and system design. This practical experience helped me build a solid technical foundation and prepared me for real-world challenges in the IT field.",
    },
  ];
  const internships = [
    {
      company: "Self-employed",
      duration: "Oct 2024 - present",
      location: "Antalya, Turkey",
      responsibilities: [
        "Focused on developing responsive and dynamic web applications using React.js, Next.js, Angular.js, HTML, and CSS.",
        "Focused on learning about blockchain and trend technologies."
      ],
    },
    {
      company: "DigitExa",
      duration: "May 2022 - Sep 2024",
      location: "Istanbul, Turkey",
      responsibilities: [
        "Led multiple projects from concept to completion, ensuring timel delivery and alignment with client goals.",
        "Engineered a comprehensive cloud backup system featuring a multi-step sign-up process and asynchronous backend services using React.js and Next.js, resulting in a 40% increase in user engagement.",
        "Implemented both MongoDB and PostgreSQL to enhance data management efficiency, leading to a 25% improvement in data retrieval times.",
      ],
    },
    {
      company: "Innva,a Turk TeleKom Company",
      duration: "Septemeber 2017 - April 2022",
      location: "Istanbul, Turkey",
      responsibilities: [
        "Developed 5+ scalable web applications with React, Node.js, and MongoDB, improving system efficiency and supporting 80,000+ users.",
        "Designed and implemented 15+ RESTful APIs with Node.js and PostgreSQL, reducing data retrieval time by 30 % and improving backend performance",
        "Developed innovative front-end applications, focusing on delivering exceptional user experiences while meeting business objectives.",
        "Utilized HTML, CSS, JavaScript, jQuery, React, Next.js, Angular, WordPress, and Laravel to develop dynamic and responsive web applications.",
      ],
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <a
          href="/SaidCV.pdf"
          className="icon resume"
          target="_blank"
          download="Said Severengiz"
          aria-label="Download Resume"
        >
          <i className="bi bi-download"></i>
        </a>

        <p className="justify">
          I am an enthusiastic and dedicated IT graduate with a solid foundation
          in programming and software development. I am eager to leverage my
          skills to contribute to innovative projects and solutions. Committed
          to continuous learning and growth, I aim to apply my technical
          knowledge and problem-solving abilities in a dynamic work environment
          where I can collaborate with experienced professionals and drive
          impactful results.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Said Severengiz</h4>
              <p className="justify">
                As a Senior Full-Stack Developer with over 8 years of experience, I specialize in designing and implementing high-performance web applications.
                I am proficient in modern JavaScript frameworks, including React.js, Next.js, and Angular.js. I am also good at integrating scalable and robust backend solutions.
                My passion for innovation and emerging technologies drives me to develop efficient, accessible, and maintainable digital solutions.
                Recognized for a keen eye for detail and a commitment to delivering exceptional user experiences, I am constantly trying to enhance application performance and user satisfaction.
              </p>
              <ul>
                {contactInfo.map((contact, index) => (
                  <li key={index}>{contact}</li>
                ))}
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.duration}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p className="justify">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Work Experience</h3>
            {internships.map((internship, index) => (
              <div className="resume-item" key={index}>
                <h4>{internship.company}</h4>
                <h5>{internship.duration}</h5>
                <p>
                  <em>{internship.location}</em>
                </p>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="justify">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

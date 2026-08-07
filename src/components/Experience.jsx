const experiences = [
  {
    date: "2026 - Present",
    title: "Web Developer Intern",
    org: "Zenzio Technology Pvt. Limited",
    desc:
      "Worked as a Web Developer Intern, contributing to the development of responsive and user-friendly web applications. Built reusable UI components, integrated frontend functionalities, fixed UI issues, and collaborated with the development team to deliver clean and efficient solutions.",
    responsibilities: [
      "Developed responsive web interfaces using React.js, HTML, CSS, and JavaScript.",
      "Created reusable components and improved UI consistency across applications.",
      "Used Git and GitHub for version control and team collaboration.",
      "Debugged frontend issues and optimized user experience.",
    ],
    tags: [
      "React JS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <h2 className="section-title">
          Experience
        </h2>

        <p className="section-subtitle">
          My professional journey and hands-on development experience
        </p>


        <div className="experience-wrapper">

          {experiences.map((exp) => (

            <div className="experience-card" key={exp.title}>

              <div className="experience-header">

                <div>
                  <h3 className="exp-title">
                    {exp.title}
                  </h3>

                  <h4 className="exp-org">
                    {exp.org}
                  </h4>
                </div>


                <span className="exp-date">
                  {exp.date}
                </span>

              </div>


              <p className="exp-desc">
                {exp.desc}
              </p>


              <ul className="exp-list">
                {exp.responsibilities.map((item,index)=>(
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>


              <div className="timeline-tags">

                {exp.tags.map(tag=>(
                  <span 
                    key={tag}
                    className="timeline-tag"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
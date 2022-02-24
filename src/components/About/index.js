import "./style.css";

export default function RenderAbout() {
  return (
    <>
      <h3 className="flexbox title">
        About Me
      </h3>
      <hr />
      <section className="class_about">
        <p className="about_text">
          Achiever, relator, analytical, and highly focused on achieving
          extraordinary results through
          <strong>
            {" "}
            direct and fluid communication, proactivity, and hard work.{" "}
          </strong>
          <br />
          <br />
          At age 18, he co-founded a company where he was responsible for
          designing marketing strategies and managing the team that developed
          multiple pages, applications, digital launches, and sales funnels.
          During his participation as a manager, he generated with his team more
          than US$250,000 in revenue through digital launches, sales funnels,
          sales pages, and sales campaigns.
          <br />
          <br />
          Currently{" "}
          <strong>pursuing a front-end software engineering career</strong> to
          develop applications with the knowledge acquired in the management of
          the last company he worked for and with the training and certificates
          he has been getting, such as{" "}
          <strong>
            Full Stack Web Developer (University of Central Florida) and
            Practical Web Application Penetration Testing (EC-COUNCIL).
          </strong>
        </p>
      </section>
            <h3 className="flexbox title">Skills</h3>
      <section className="skills">
        <div>
          <p>Front-end Development</p>
          <p>HTML</p>
          <p>CSS, Bootstrap, CSS in JS, SASS</p>
          <p>Python</p>
          <p>JavaScript</p>
          <p>React.js and Next.js</p>
          <p>Node.js</p>
          <p>GraphQL and REST API</p>
        </div>
        <div>
          <p>Object-oriented programming</p>
          <p>MERN Stack and MVC</p>
          <p>MySQL and MongoDB</p>
          <p>SEO, UTM and Google Analytics</p>
          <p>Leadership</p>
          <p>Communication</p>
          <p>Problem-solver</p>
          <p>Team Collaboration</p>
        </div>
      </section>
    </>
  );
}

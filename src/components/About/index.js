import "./style.css";

export default function RenderAbout() {
  return (
    <>
      <h3 id="about_me" className="flexbox title">
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
    </>
  );
}

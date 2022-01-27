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
          At age 18, he co-founded a company where he worked in team management
          and found deep satisfaction in working with friends to achieve goals.
          During his participation as a manager, he generated with his team more
          than US$ 250,000 in revenue through digital launches, sales funnels,
          and sales campaigns.
          <br />
          <br />
          Currently <strong>pursuing a front-end software engineering career and
          focusing on Next.js and Algorithm.</strong>
          <br />
          <br />
          Gabriel can stay focused on the project, take direction, move forward,
          and make the necessary corrections to stay on track.
        </p>
      </section>
    </>
  );
}

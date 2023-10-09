import Image from "next/image";

const About = () => {
  return (
    <div className="row gy-3">
      <div className="col-md-6">
        <div className="img_container">
          <Image
            src={`./assets/choose-img.png`}
            width={500}
            height={0}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="right_col">
          <div className="header">about</div>
          <div className="logo_name">
            <span>LAKESIDE</span> GYM & FITNESS
          </div>
          <div className="text">
            Nestled near the beautiful Taal Volcano Lake, Lakeside Gym & Fitness
            is built to make you strong.
            <br />
            <br />
            As a member, you get access to beautifully designed gym space,
            top-tier equipment, and amenities—as well as digital apps, and
            experience the service that’ll make you feel cared for.
            <br />
            <br />
            Every space is cleaned consistently during the day—with a deep
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

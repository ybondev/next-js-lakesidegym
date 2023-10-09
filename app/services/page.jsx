import Image from "next/image";

const services = [
  {
    id: 1,
    src: "./assets/service1.webp",
    title: "body building",
    text: "Strengthen and enlarge the muscles of your body. Build strong muscles. Be built different.",
  },
  {
    id: 2,
    src: "./assets/service2.webp",
    title: "WEIGHT LIFTING",
    text: "Get access to premium weights and barbell for your muscle strengthening activities.",
  },
  {
    id: 3,
    src: "./assets/service3.webp",
    title: "BATTLE ROPE",
    text: "Battle ropes are a useful exercise tool for those looking to lose weight and gain muscle mass.",
  },
  {
    id: 4,
    src: "./assets/service4.webp",
    title: "YOGA",
    text: "Yoga improves strength, balance and flexibility. Slow movements and deep breathing increase blood flow.",
  },
];

const Services = () => {
  return (
    <div className="row gy-3">
      <div className="header">our services</div>
      {services &&
        services.map((x) => {
          return (
            <div className="col-12 col-md-6 col-lg-3">
              <div className="img_container">
                <Image
                  src={x.src}
                  width={0}
                  height={0}
                  alt=""
                  className="img-fluid"
                />
                <div className="overlay">
                  <div className="title">{x.title}</div>
                  <div className="text">{x.text}</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Services;

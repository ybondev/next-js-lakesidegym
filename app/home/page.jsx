import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="row gy-3">
      <div className="col-md-6">
        <div className="left_col">
          <div className="header">
            MAKE YOUR <span>BODY SHAPE</span>
          </div>
          <div className="text">
            “You dream. You plan. You reach. There will be obstacles. There will
            be doubters. There will be mistakes. But with hard work, with
            belief, with confidence and trust in yourself and those around you,
            there are no limits.”
          </div>
          <div className="btn_container">
            <Link href={``}>
              <button>become a member</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="img_container">
          <Image
            src={`./assets/home-img.png`}
            width={700}
            height={0}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

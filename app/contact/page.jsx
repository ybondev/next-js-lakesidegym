import Link from "next/link";
import { FaEnvelope, FaMap, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="row gy-3">
      <div className="header">contact us</div>
      <div className="col-md-5">
        <div className="left_col">
          <div className="info">
            <Link
              href={`https://maps.app.goo.gl/c1Q3WZzHwA3VNsye6`}
              target="_blank"
              className="link"
            >
              <FaMap className="fa_icon" />
              Parkville Pointe, Park Avenue, Balete Batangas
            </Link>

            <Link href={`tel: 0917 1895 623`} className="link">
              <FaPhoneAlt className="fa_icon" /> 0917 1895 623
            </Link>

            <Link
              href={`mailto: lakesidegymfitness@gmail.com`}
              className="link"
            >
              <FaEnvelope className="fa_icon" />
              lakesidegymfitness@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div className="form">
          <form action="">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="btn_submit">
              <button>send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

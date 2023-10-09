import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Lakeside Gym & Fitness",
  description:
    "Nestled near the beautiful Taal Volcano Lake, Lakeside Gym & Fitness is built to make you strong.",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default layout;

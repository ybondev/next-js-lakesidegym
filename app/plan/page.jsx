const plan = [
  {
    id: 1,
    title: "black membership",
    price: 500,
    text: "Inclusions: Black Member will be able to use all equipment from 6am to 9pm (Monday, Tuesday, Wednesday, Thursday, and Saturday) for a maximum of 6 visits monthly.",
    btn: "purchase now",
  },
  {
    id: 2,
    title: "platinum membership",
    price: 1500,
    text: "Inclusions: Exclusive use of the equipment every day from 9 p.m. to 11 p.m. (you can still come everyday from opening time but Platinum Members have the privilege to use the facility from 9pm until closing time) Exclusive use every FRIDAY and SUNDAY",
    popular: "most popular",
    btn: "purchase now",
  },
  {
    id: 3,
    title: "gold membership",
    price: 800,
    text: "Inclusions: Gold Member will be able to use all equipment from 6am to 9pm (Monday, Tuesday, Wednesday, Thursday, and Saturday) for a maximum of 12 visits monthly.",
    btn: "purchase now",
  },
];

const Plan = () => {
  return (
    <div className="row gy-3">
      <div className="header">our special plan</div>
      {plan &&
        plan.map((x) => {
          return (
            <div className="col-12 col-md-4">
              <div className="wrapper">
                <div className="title">{x.title}</div>
                <div className="price">PHP {x.price.toLocaleString()}</div>
                <div className="text">{x.text}</div>
                <div className="popular">{x.popular}</div>
                <div className="btn_purchase">
                  <button>{x.btn}</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Plan;

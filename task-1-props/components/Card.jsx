import React from "react";
import "../components/Card.css"

function Card() {
  const myCards = [
    {
      id: 100,
      img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHwwfDB8fHwy",
      title: "Mountain-1",
      subTitle: "Mountain -1 Text",
      buttonText: "Click Me",
      buttonColor:"click"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW58ZW58MHwwfDB8fHwy",
      title: "Mountain-2",
      subTitle: "Mountain -2 Text",
      buttonText: "Reset Me",
      buttonColor:"reset"

    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHwwfDB8fHwy",
      title: "Mountain-3",
      subTitle: "Mountain -3 Text",
      buttonText: "Event Me",
      buttonColor:"event",

    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHwwfDB8fHwy",
      title: "Mountain-4",
      subTitle: "Mountain -4 Text",
      buttonText: " Me",
    },
  ];

  return (
    <React.Fragment>
      {myCards.map((item) => (
        <div key={item.id} className="card">
          <div className="card-img">
            <img src={item.img}  alt="" />
          </div>
          <div className="card-body">
            <div className="title">
              <h3>{item.title}</h3>

              <p>
                {item.subTitle}
              </p>
              <button className={item.buttonColor}>{item.buttonText}</button>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Card;

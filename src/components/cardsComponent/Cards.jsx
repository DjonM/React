import React from "react";
import Items from "./Items";

//Основаная карточка.
const Cards = (props) => {
  return (
    <div>
      {props.items.map((obj) => {
        return (
          <Items
            key={obj.id}
            id={obj.id}
            myid={obj.myId}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            img={obj.img}
          />
        );
      })}
    </div>
  );
};

export default Cards;

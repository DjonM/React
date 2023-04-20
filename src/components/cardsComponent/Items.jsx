import React from "react";


const Items = (props) => {
  return (
    <div className="conteiner py-3">
      <main>
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center">
          <div className="col py-3">
            <div className="card md-6 rounded">
              <div className="card-header">
                <h3>{props.title}</h3>
                <img
                  className="rounded"
                  src={props.img}
                  alt="Картинка гор"
                  width={"85%"}
                />
                <hr />
                <p>
                  <b>{props.description}</b>
                </p>
                <p>{props.price}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Items;

import React from "react";
import { Link } from "react-router-dom";
import clothing from "../../assets/images/clothing.jpg";
import electronics from "../../assets/images/electronics.jpg";
import jewelry from "../../assets/images/jewelry.jpg";

const InfoCards: React.FC = () => {
  return (
    <>
      <div className="p-4">
        <div className="relative">
          <img
            src={clothing}
            alt="Info Card"
            className="w-full max-h-96 object-cover"
          />
          <div className="absolute top-0 left-0 bg-white bg-opacity-0 text-white p-2">
            <div className="flex flex-col">
              <Link to="/">
                <strong
                  className="text-4xl uppercase tracking-widest hover:underline"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Clothing
                </strong>
              </Link>
              <div className="flex">
                <Link to="/">
                  <strong
                    className="text-4xl tracking-widest hover:underline"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Women{" "}
                  </strong>
                </Link>
                <strong
                  className="text-4xl tracking-widest"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {" "}
                  /{" "}
                </strong>
                <Link to="/">
                  <strong
                    className="text-4xl tracking-widest ml-4 hover:underline"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Men
                  </strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Row Below */}
        <div className="flex h-96 relative">
          <div className="w-2/3 p-2 pr-1 pl-0">
            <img
              src={electronics}
              alt="Left Image"
              className="w-full h-full object-cover"
            />
             <div className="absolute bottom-0 left-0 bg-white bg-opacity-0 text-white p-2">
             <Link to="/">
              <strong
                className="text-4xl uppercase tracking-widest hover:underline"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Electronics
              </strong>
              </Link>
            </div>
          </div>  

          {/* Right Image (1/3 width) */}
          <div className="w-1/3 p-2 pl-1 pr-0">
            <img
              src={jewelry}
              alt="Right Image"
              className="w-full h-full object-cover"
            />
              <div className="absolute bottom-0 right-0 bg-white bg-opacity-0 text-white p-2">
              <Link to="/">  
              <strong
                className="text-4xl uppercase tracking-widest hover:underline"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Jewelry
              </strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCards;

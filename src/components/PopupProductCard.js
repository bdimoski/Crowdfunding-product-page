import React, { useState } from "react";
import styled from "styled-components";
import cross from "../images/icon-close-modal.svg";
import crossDark from "../images/icon-close-modal.svg";
import PopupProducts from "./PopupProducts";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .crossImg {
    position: absolute;
    top: 2rem;
    right: 2rem;
    transition: all 220ms ease-in-out;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 768px) {
      top: 2.2rem;
    }
  }
  .whiteBackground {
    position: relative;
    background: white;
    width: 700px;
    max-height: 99vh;
    padding: 3rem;
    border-radius: 7px;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */

    @media (max-width: 768px) {
      width: 330px;
      padding: 2rem;
      margin-top: 7rem;
      height: 80%;
    }
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
    .textP {
      color: hsl(0, 0%, 48%);
      font-weight: 400;
      line-height: 1.5rem;
      margin-bottom: 2rem;
      font-size: 0.95rem;
      @media (max-width: 768px) {
        font-size: 0.85rem;
      }
    }
  }
  .cards {
    .freeCard {
      border: 1px solid hsl(0, 0%, 80%);
      border-radius: 10px;
      padding: 1.8rem;
      transition: all 300ms ease-in-out;
      @media (max-width: 768px) {
        padding: 1.5rem;
      }
      .topRow {
        display: flex;
        flex-direction: row;
        .checkBox {
          width: 1.6rem;
          height: 1.6rem;
          background: white;
          border: 1px solid;
          border-radius: 100%;
          border-color: hsl(0, 0%, 80%);
          position: relative;
          bottom: 2px;
          transition: all 220ms ease-in-out;
          .checkedButton {
            width: 60%;
            height: 60%;
            background: hsl(176, 50%, 47%);
            border-radius: 100%;
            margin-left: auto;
            margin-right: auto;
            transition: all 220ms ease-in-out;
          }
        }
        h4 {
          margin-left: 1.5rem;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 220ms ease-in-out;
          &:hover {
            color: hsl(176, 50%, 47%);
          }
          @media (max-width: 768px) {
            font-size: 0.95rem;
          }
        }
      }
      .description {
        margin-left: 3rem;
        margin-top: 0.5rem;
        font-size: 0.87rem;
        margin-bottom: 0;
        color: hsl(0, 0%, 48%);
        line-height: 1.5rem;
        @media (max-width: 768px) {
          margin-left: 0px;
          margin-top: 1.5rem;
          font-size: 0.85rem;
        }
      }
    }
    .boxChecked {
      border: 2px solid hsl(176, 50%, 47%);
      transition: all 220ms ease-in-out;
    }
  }
`;
const Payment = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  margin-top: 1.8rem;
  transition: all 300ms ease-in-out;
  hr {
    background-color: white;
    border: none;
    border-top: 0.5px solid hsl(0, 0%, 80%);
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .hiddenPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    .pledge,
    textarea {
      background: white;
      color: hsl(0, 0%, 48%);
      font-family: "Commissioner", "sans serif";
      font-size: 0.95rem;
      font-weight: 400;
      width: 120px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 220ms ease-in-out;
      &::placeholder {
        color: hsl(0, 0%, 48%);
        font-family: "Commissioner", "sans serif";
        font-size: 0.95rem;
        font-weight: 400;
        background: white;
        outline: none;
        border: none;
      }
      @media (max-width: 768px) {
        font-size: 0.85rem;
        margin-left: 1rem;
        &::placeholder {
          font-size: 0.85rem;
        }
      }
    }
    .continueButton {
      width: 6rem;
      height: 2.8rem;
      border-style: none;
      background: hsl(176, 50%, 47%);
      border-radius: 50px;
      color: white;
      font-weight: 500;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 220ms ease-in-out;
      &:hover {
        background: hsl(176, 72%, 28%);
      }
      @media (max-width: 768px) {
        margin-top: 1.5rem;
        width: 100%;
      }
    }
  }
`;
const CardPopup = (props) => {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    return setClicked(!clicked);
  };
  const [image, setImage] = useState(cross);
  const mouseOverHandler = () => {
    setImage(crossDark);
  };
  const mouseOutHandler = () => {
    setImage(cross);
  };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return props.trigger ? (
    <Container>
      <div className="whiteBackground">
        <img
          src={image}
          alt="close"
          className="crossImg"
          onClick={props.crossPopup}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        />
        <div className="about">
          <h3>Back this project</h3>
          <p className="textP">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        <div className="cards">
          <div className={clicked ? "freeCard boxChecked" : "freeCard"}>
            <div>
              <div className="topRow">
                <button className="checkBox">
                  <div className={clicked ? "checkedButton" : null} />
                </button>
                <h4
                  onClick={toggle}
                  className={clicked ? "checkedTitle" : null}
                >
                  Pledge with no reward
                </h4>
              </div>
              <p className="description">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
            {clicked ? (
              <Payment>
                <hr />
                <div className="hiddenPart">
                  <input
                    type="number"
                    name="numberInput"
                    placeholder="Enter your pledge"
                    className="pledge"
                    onChange={(event) => {
                      props.freeChange(event);
                    }}
                  />
                  <button className="continueButton" onClick={props.freePay}>
                    Continue
                  </button>
                </div>
              </Payment>
            ) : null}
          </div>
          <div className="paidCards">
            {props.source.map((item, index) => {
              return (
                <PopupProducts
                  key={index}
                  index={index}
                  product={item.product}
                  minPledge={formatter.format(item.minPledge)}
                  itemsLeft={item.itemsLeft}
                  description={item.description}
                  payChange={props.change}
                  payMin={props.payMin}
                  pay={props.payButton}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  ) : (
    ""
  );
};
export default CardPopup;

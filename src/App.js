import React, { useState } from "react";
import styled from "styled-components";
import TopImage from "./components/TopImage";
import NavigationBar from "./components/NavigationBar";
import TitleCard from "./components/TitleCard";
import Status from "./components/Status";
import ThankYouPopUp from "./components/ThankYouPopUp";
import Products from "./components/Products";
import About from "./components/About";
import ProductCard from "./components/ProductCard";
import PopupProductCard from "./components/PopupProductCard";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 0;
  
`;
const Container = styled.div`
  margin-top: 13rem;
  width: 700px;
  @media (max-width: 768px) {
    width: 330px;
    margin-top: 10rem;
    margin-bottom: 6rem;
  }
`;
const MainComponent = styled.div`
  padding: 3rem;
  box-shadow: 1px 1px 100px hsl(0, 0%, 90%);
  margin-top: 1.5rem;
  border-radius: 7px;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;
const App = () => {
  //* JS Class to format numbers into currency
  //** Returns the value with currency symbol ($ for USD)*/
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  const [totalAmount, setTotalAmount] = useState(89914);
  const [totalBakers, setTotalBakers] = useState(5007);
  const [Data, setData] = useState(Products);
  const [cardTrigger, setCardTrigger] = useState(false);
  const [thankYouTrigger, setThankYouTrigger] = useState(false);
  const [freeValue, setFreeValue] = useState(0);
  //* TO open the {PopupProductCard} page (modal) onClick {Rewards} button
  const openRewardsPage = (index) => {
    if (Data[index].itemsLeft > 0) {
      setCardTrigger(true);
    } else {
      setCardTrigger(false);
    }
  };
  //* To close {PopupProductCard} page (modal)
  const crossRewardsPage = () => {
    setCardTrigger(false);
  };
  //* To close {ThankYouPopup} (modal)
  const gotItHandler = () => {
    setThankYouTrigger(false);
    setCardTrigger(false);
  };
  //* Updates the value of "pay" inside {Data} onChange in number input in {PopupProducts}
  const payChangeHandler = (event, index) => {
    let newValue = event.target.value;
    setData((prevData) => {
      prevData[index].pay = newValue;
      return prevData;
    });
  };
  //* To pay the "minimum pledge" onClick white button in {PopupProducts}
  const minPayment = (index) => {
    setTotalAmount(totalAmount + Data[index].minPledge);
    setTotalBakers(totalBakers + 1);
    setData((prevData) => {
      prevData[index].itemsLeft--;
      return prevData;
    });
    setThankYouTrigger(true);
  };
  //* Update value for "Free Card" pay in {PopupProductCard.jsx}
  const freeChangeHandler = (event) => {
    let newValue = event.target.value;
    setFreeValue(newValue);
  };
  //* Payment handler for "Free Card" in {PopupProductCard}
  const freePayHandler = () => {
    setThankYouTrigger(true);
    setTotalAmount(totalAmount + parseFloat(freeValue));
    setTotalBakers(totalBakers + 1);
    setFreeValue(0);
  };
  //* Pay the value of "pay" in {Data} and then set it to 0 for another use
  const payHandler = (index) => {
    if (Data[index].pay < Data[index].minPledge) {
      alert("Minimum pledge for this product is $" + Data[index].minPledge);
    } else {
      setThankYouTrigger(true);
      setTotalAmount(totalAmount + parseFloat(Data[index].pay));
      setTotalBakers(totalBakers + 1);
      setData((prevData) => {
        prevData[index].pay = 0;
        prevData[index].itemsLeft--;
        return prevData;
      });
    }
  };
  //* Open {PopupProductCard} onClick {Backer} button in {TitleCard}
  const handleBacker = () => {
    setCardTrigger(true);
  };
  return (
    <Body>
      <TopImage />
      <NavigationBar />
      <Container>
        <TitleCard backerButton={handleBacker} />
        <Status
          amount={formatter.format(totalAmount)}
          backers={formatter.format(totalBakers).substring(1)}
          daysLeft={56}
          amountWOFormat={totalAmount}
        />
        <MainComponent>
          <About />
          <div id="getStarted">
            {Data.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  id={index}
                  product={item.product}
                  minPledge={formatter.format(item.minPledge)}
                  description={item.description}
                  itemsLeft={item.itemsLeft}
                  rewardsButton={openRewardsPage}
                />
              );
            })}
          </div>
        </MainComponent>
        <PopupProductCard
          source={Data}
          trigger={cardTrigger}
          crossPopup={crossRewardsPage}
          change={payChangeHandler}
          payMin={minPayment}
          payButton={payHandler}
          freeChange={freeChangeHandler}
          freePay={freePayHandler}
        />
        <ThankYouPopUp trigger={thankYouTrigger} gotItButton={gotItHandler} />
      </Container>
    </Body>
  );
};
export default App;

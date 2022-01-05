import { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Form from "../common/form";
import List from "./List";
import Modal from "../common/modal";
import ModalOrder from "../common/modal/modalOrder";
import { useWallet } from "../../../hooks/web3";
import Breadcrumbs from "../common/breadcrumbs";



const MarketPlace = () => {

  const LINKS = [
    {
      href: "",
      value: "Buy",
    },
        {
      href: "owned",
      value: "My own NFT",
    },
        {
      href: "allorders",
      value: "All orders",
    },
  ];
  
  const onFormSubmit = e => {
      e.preventDefault();
      // mint(value);
  }


  
    return (
      <div className="home-container">
        <Form submit ={onFormSubmit}/>
        <Breadcrumbs
          links={LINKS}
        />   
        <Outlet />
      </div>
    )
}
export default MarketPlace;

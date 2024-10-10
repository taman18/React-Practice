"use client";
import HomePage from "@/container/homePage";
import TableListing from "@/container/tableListing";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
        <TableListing />
      </Provider>
    </>
  );
}

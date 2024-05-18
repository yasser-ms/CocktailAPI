import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  const navigation = useNavigation();
  const IsPageLoading = navigation.state === "Loading";
  const value = "value";
  return (
    <>
      <Navbar />
      <section className="page">
        {IsPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={value} />
        )}
      </section>
    </>
  );
}

export default HomeLayout;

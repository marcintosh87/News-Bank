import React, { useState, useEffect } from "react";
import Featured from "./Featured";
import Nav from "./Nav";
import NewsSection from "./NewsSection";

export default function MainContent() {
  const [featured, setFeatured] = useState([]);
  const [newsData, setNewsData] = useState([]);
  //FETCH utilities
  const baseURL = "https://newsapi.org/v2/";
  const apiKey = "bbe7b286e5174990ae246ea1fca3bc51";
  //   const generalCat = "";

  useEffect(() => {
    fetch(
      `${baseURL}top-headlines?country=us&pageSize=1&apiKey=${apiKey}`
    ).then((res) => res.json().then((data) => setFeatured(data)));
  }, []);

  useEffect(() => {
    fetch(
      `${baseURL}top-headlines?country=us&pageSize=20&apiKey=${apiKey}`
    ).then((res) => res.json().then((data) => setNewsData(data)));
  }, []);

  return (
    <div className="container">
      <Featured featured={featured} />
      <Nav />
      <NewsSection newsData={newsData} />
    </div>
  );
}

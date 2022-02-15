import React, { useState, useEffect } from "react";
import Featured from "./Featured";
import Nav from "./Nav";
import NewsSection from "./NewsSection";
import BusinessSection from "./categories/BusinessSection";
import Entertainment from "./categories/Entertainment";
import Health from "./categories/Health";
import Science from "./categories/Science";
import Sports from "./categories/Sports";
import Technology from "./categories/Technology";
import Spotlight from "./categories/Spotlight";
import { Routes, Route } from "react-router-dom";
import { projectFirestore } from "./firebase/config";
import { Container } from "@mui/material";

export default function MainContent() {
  const [featured, setFeatured] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [business, setBusiness] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [sports, setSports] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [health, setHealth] = useState([]);
  const [science, setScience] = useState([]);
  const [spotlight, setSpotlight] = useState([]);
  //FETCH utilities
  const baseURL = "https://newsapi.org/v2/top-headlines?";
  const apiKey = "apiKey=bbe7b286e5174990ae246ea1fca3bc51"; //bbe7b286e5174990ae246ea1fca3bc51"
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // //FEATURED
  useEffect(() => {
    fetch(`${baseURL}country=us&pageSize=1&${apiKey}`).then((res) =>
      res.json().then((data) => {
        setFeatured(data);
      })
    );
  }, []);
  //HOMEPAGE
  useEffect(() => {
    fetch(`${baseURL}country=us&pageSize=20&${apiKey}`).then((res) =>
      res.json().then((data) => {
        setNewsData(data);
      })
    );
  }, []);
  //BUSINESS
  useEffect(() => {
    fetch(`${baseURL}category=business&country=us&pageSize=20&${apiKey}`).then(
      (res) =>
        res.json().then((data) => {
          setBusiness(data);
        })
    );
  }, []);
  //ENTERTAINMENT
  useEffect(() => {
    fetch(
      `${baseURL}category=entertainment&country=us&pageSize=20&${apiKey}`
    ).then((res) =>
      res.json().then((data) => {
        setEntertainment(data);
      })
    );
  }, []);
  //SPORTS
  useEffect(() => {
    fetch(`${baseURL}category=sports&country=us&pageSize=20&${apiKey}`).then(
      (res) =>
        res.json().then((data) => {
          setSports(data);
        })
    );
  }, []);
  //TECHNOLOGY
  useEffect(() => {
    fetch(
      `${baseURL}category=technology&country=us&pageSize=20&${apiKey}`
    ).then((res) =>
      res.json().then((data) => {
        setTechnology(data);
      })
    );
  }, []);
  //HEALTH
  useEffect(() => {
    fetch(`${baseURL}category=health&country=us&pageSize=20&${apiKey}`).then(
      (res) =>
        res.json().then((data) => {
          setHealth(data);
        })
    );
  }, []);
  //SCIENCE
  useEffect(() => {
    fetch(`${baseURL}category=science&country=us&pageSize=20&${apiKey}`).then(
      (res) =>
        res.json().then((data) => {
          setScience(data);
        })
    );
  }, []);
  //SPOTLIGHT -FIREBASE FETCH
  useEffect(() => {
    const db = projectFirestore
      .collection("spotlight")
      .orderBy("votes", "desc")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          alert("Nothing here");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) =>
            results.push({ id: doc.id, ...doc.data() })
          );
          setSpotlight(results);
          setLoading(false);
        }
      });
  }, []);

  if (loading) return <h1>fetching news...</h1>;
  return (
    <>
      <Nav />
      <Featured featured={featured} spotlight={spotlight} />

      <Container style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<NewsSection newsData={newsData} />} />
          <Route
            path="/business"
            element={<BusinessSection newsData={business} />}
          />
          <Route
            path="/entertainment"
            element={<Entertainment newsData={entertainment} />}
          />
          <Route path="/sports" element={<Sports newsData={sports} />} />
          <Route
            path="/technology"
            element={<Technology newsData={technology} />}
          />
          <Route path="/health" element={<Health newsData={health} />} />
          <Route path="/science" element={<Science newsData={science} />} />
          <Route
            path="/spotlight"
            element={<Spotlight spotlight={spotlight} />}
          />
        </Routes>
      </Container>
    </>
  );
}

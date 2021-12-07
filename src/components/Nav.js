import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Container from "@mui/material/Container";

export default function Nav() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ flexWrap: "wrap" }} style={{ paddingBottom: "10px" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value={0} label="General" to="/" component={Link} />
        <Tab value={1} label="Business" to="/business" component={Link} />
        <Tab
          value={2}
          label="Entertainment"
          to="/entertainment"
          component={Link}
        />
        <Tab value={3} label="Sports" to="/sports" component={Link} />
        <Tab value={4} label="Technology" to="/technology" component={Link} />
        <Tab value={5} label="Health" to="/health" component={Link} />
        <Tab value={6} label="Science" to="/science" component={Link} />
        <Tab value={7} label="Spotlight" to="/spotlight" component={Link} />
      </Tabs>
    </Container>
  );
}

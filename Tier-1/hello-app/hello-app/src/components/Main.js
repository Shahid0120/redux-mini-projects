import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
var endpoint = "http://ip-api.com/json/?fields=status,message,countryCode";

export default function Main() {
  const [language, setLanguage] = useState("US");
  useEffect(() => {
    axios
      .get(
        "http://ip-api.com/json/{query}?fields=status,message,country,countryCode,region,regionName,city,org,as,query"
      )
      .then((response) => {
        // var response = JSON.parse(response);
        switch (response.countryCode) {
          case "CA":
            setLanguage("Hi");
            break;
          case "JP":
            setLanguage("こんにちは");
            break;
          case "DE":
            setLanguage("Hallo");
            break;
          case "SPAN":
            setLanguage("Hola");
            break;
          default:
            setLanguage("hi");
            break;
        }
      });
  }, []);

  return (
    <div>
      <h1>{language}</h1>
    </div>
  );
}

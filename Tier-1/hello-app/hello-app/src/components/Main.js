import React from "react";
import store from "../app/store";

function Main() {
    var endpoint = "http://ip-api.com/json/?fields=status,message,countryCode";
var xhr = newXMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(this.responseText);
		if(response.status !== 'success') {
			console.log('query failed: ' + response.message);
			return
		}
        if(response.countryCode == "US") {
			
		}
        if(response.countryCode == "AUS") {

        }
  return (
    <div>
      <h1>{console.log(store.getState())}</h1>
    </div>
  );
}

export default Main;

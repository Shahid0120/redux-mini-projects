// form that submits
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Offline, Online } from "react-detect-offline";

function DataMain() {
  const [names, setNames] = useState({ firstname: "", lastname: "" });
  useEffect(() => {
    // the data for the objectStore
    const customerData = [
      {
        ssn: "444-44-4444",
        name: "Bill",
        age: 35,
        email: "bill@company.com",
      },
      { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
    ];

    // open the database version 1
    const request = window.indexedDB.open("FirstIndexedDB", 1);
    // on sucess
    request.onsucess = function (event) {
      const db = event.target.result;
      // error handling making sure event doesnt bubble to tranactions
      db.error = function (event) {
        console.log("Database error " + event.target.errorCode);
      };

      // search for particule thing in a indexed database is called index
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      // for upgrading the database / creating new database
      // onupgradedneeded only place to change database structure
      request.onupgradeneeded = function (event) {
        const db = event.target.event;
        const objectStore = db.objectStore("customer", { keyPath: "ssn" });
        // this is for puting customer into a objectStore
        objectStore.transaction.oncomplete = function (event) {
          const customerObjectStore = db
            .transaction("customers", "readwrite")
            .objectStore("customers");
          customerData.forEach(function (customer) {
            customerObjectStore.add(customer);
          });
        };
      };
    };
    // on failure
    request.onerror = function (event) {
      console.log("Failure in loading indexed Database");
    };
    //database version 2 using incrementing key values for object store
    const request = indexedDB.open("FirstIndexedDB", 2);
    request.onupgradeneeded = function (event) {
      const db = event.target.value;
      //
      // increments
      const objStore = db.objectStore("names", { autoIncrement: true });
      customerData.forEach((customer) => {
        objStore.add(customer.name);
      });
    };

    // making transaction
    // readwrite vs readyonly
    const request = indexedDB.open("FirstIndexedDB", 3);
    request.onsuccess = function (event) {
      const db = event.target.value;
      const transaction = db.transaction(["customer"], "readwrite");
      transaction.oncomplete = function (event) {
        console.log("This transaction is completed...");
      };
      transaction.onerror = function (event) {
        console.log("Error occured on tranctions" + event.errorCode);
      };
      var objectStore = transaction.objectStore("customers");
      customerData.forEach(function (customer) {
        var request = objectStore.add(customer);
        request.onsuccess = function (event) {
          // event.target.result === customer.ssn;
        };
      });
    };

    // finding name in objectStore

    const request = indexedDB.open("FirstIndexedDB", 4);
    request.onsuccess = function(event) {
        const db = event.target.value
        const index = objectStore.index("name")
        index.get("Donna").onsuccess = function(event) {
            console.log("Donna index search was sucessful" + event.target.result)
        }
 
    }
  });
  return (
    <div>
      <form>
        <span>First Name:</span>
        <br />
        <input type="text" name="firstname" />
        <br />
        <span>Last Name:</span>
        <br />
        <input type="text" name="lastname" />
        <br />
        <br />
        <Online>
          <input type="submit" value="Submit" />
        </Online>
        <Offline>You are currently offline!</Offline>
      </form>
    </div>
  );
}

export default DataMain;

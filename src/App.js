import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import Papa from "papaparse";
import readXlsxFile from "read-excel-file";

export default function App() {
  const [data, setdata] = useState({
    alldata: [],
    name: "",
  });
  const [show, setshow] = useState(false);

  const inputChange = (value) => {
    console.log(value);

    readXlsxFile(value)?.then((rows) => {
      rows?.map((w) => {
        console.log(w[0]);
      });
    });
  };
  return (
    <div>
      {show ? <></> : <><input
        type="file"
        id="input"
        onChange={(e) => {
          inputChange(e.target.files[0]);
        }}
      /></>}
      
    </div>
  );
}

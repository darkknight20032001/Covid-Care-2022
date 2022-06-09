import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BedStates.css";
import DisabledModal from "./DisabledModal";
import EnabledModal from "./EnabledModal";
import Alert from "@mui/material/Alert";
const BedStates = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [disabledClick, setDisabledClick] = useState(false);
  const [hospitalName, setHospitalName] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [hospitalBooked, setHospitalBooked] = useState("");
  const stateBedData = location.state;

  if (showModal === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowMsg(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }, [showMsg]);

  return (
    <>
      {showModal &&
        (!disabledClick ? (
          <EnabledModal
            setShowModal={setShowModal}
            hospitalName={hospitalName}
            setShowMsg={setShowMsg}
            setHospitalBooked={setHospitalBooked}
          />
        ) : (
          <DisabledModal
            setShowModal={setShowModal}
            hospitalName={hospitalName}
          />
        ))}

      <div className="bed_states">
        {showMsg && (
          <Alert severity="success" style={{ width: "100%" }}>
            Your form is successfully submitted
          </Alert>
        )}
        <h1>{stateBedData[0].state.toUpperCase()}</h1>
        <table>
          <tbody>
            <tr>
              <th>Hospitals &#38; Colleges</th>
              <th>Bed Available</th>
              <th>City</th>
              <th>Register</th>
            </tr>
            {stateBedData.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>
                    {hospitalBooked === item.name
                      ? item.hospitalBeds - 1
                      : item.hospitalBeds}
                  </td>
                  <td>{item.city}</td>
                  {item.hospitalBeds > 0 ? (
                    <td>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setDisabledClick(false);
                          setHospitalName(item.name);
                        }}
                      >
                        Register for bed
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setDisabledClick(true);
                          setHospitalName(item.name);
                        }}
                        className="disabled_btn"
                      >
                        Register for bed
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BedStates;

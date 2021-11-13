import React, { useState, useEffect } from "react";
import InputTag from "../InputTag/InputTag";
import './Form.scss';
import { checkValidity,updateObject } from "../../HighOrderFunctions/utility";
import { Button } from "@material-ui/core";
import db from "../../firebase";

const Form = (props) => {
    const [formIsValid,setFormIsValid] = useState(false);
    
  
  const [revenueForm, setRevenueForm] = useState({
    company: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
      },
    },
    country: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
      },
    },
    january: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
      },
    },
    february: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
      },
    },
    march: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
      },
    },
    april: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    may: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    june: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    july: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    august: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    september: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    october: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    november: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
    december: {
      value: "",
      valid: false,
      clicked: false,
      validations: {
        required: true,
        isNumeric: true,
      },
    },
  });

  // function to update covid Form
  const inputChangedHandler = (value, inputIdentifier) => {
    let valuePassed = value;
    let valueForValidityCheck = value;

    const updatedFormElement = updateObject(revenueForm[inputIdentifier], {
      value: valuePassed,
      clicked: true,
      valid: checkValidity(
        valueForValidityCheck,
        revenueForm[inputIdentifier].validations
      ),
    });
    const updatedRevenueList = updateObject(revenueForm, {
      [inputIdentifier]: updatedFormElement,
    });


    let formIsValid = true;
    for (let inputIdentifier in updatedRevenueList) {
      formIsValid =
        updatedRevenueList[inputIdentifier].valid && formIsValid;
    }
    setRevenueForm(updatedRevenueList);
    setFormIsValid(formIsValid);
  };
  const insertDocument = async () => {
    const collection = db.collection("revenues");
    const revenue = {
     company:revenueForm["company"].value,
     country:revenueForm["country"].value,
     january:revenueForm["january"].value,
     february:revenueForm["february"].value,
     march:revenueForm["march"].value,
     april:revenueForm["april"].value,
     may:revenueForm["may"].value,
     june:revenueForm["june"].value,
     july:revenueForm["july"].value,
     august:revenueForm["august"].value,
     september:revenueForm["september"].value,
     october:revenueForm["october"].value,
     november:revenueForm["november"].value,
     december:revenueForm["december"].value,
    };
    const ref = await collection.add(revenue);
    console.log(ref.id + " got added");
    props.setShowModal(false)
  };

return (
  <div className="form__container">
    <InputTag
      displayName="company"
      name="company"
      setValue={inputChangedHandler}
      value={revenueForm["company"].value}
      helperText=""
    />
    <InputTag
      displayName="country"
      name="country"
      setValue={inputChangedHandler}
      value={revenueForm["country"].value}
      helperText=""
    />
    <InputTag
      displayName="january"
      name="january"
      setValue={inputChangedHandler}
      value={revenueForm["january"].value}
      helperText=""
    />
    <InputTag
      displayName="february"
      name="february"
      setValue={inputChangedHandler}
      value={revenueForm["february"].value}
      helperText=""
    />
    <InputTag
      displayName="march"
      name="march"
      setValue={inputChangedHandler}
      value={revenueForm["march"].value}
      helperText=""
    />
    <InputTag
      displayName="april"
      name="april"
      setValue={inputChangedHandler}
      value={revenueForm["april"].value}
      helperText=""
    />
    <InputTag
      displayName="may"
      name="may"
      setValue={inputChangedHandler}
      value={revenueForm["may"].value}
      helperText=""
    />
    <InputTag
      displayName="june"
      name="june"
      setValue={inputChangedHandler}
      value={revenueForm["june"].value}
      helperText=""
    />
    <InputTag
      displayName="july"
      name="july"
      setValue={inputChangedHandler}
      value={revenueForm["july"].value}
      helperText=""
    />
    <InputTag
      displayName="august"
      name="august"
      setValue={inputChangedHandler}
      value={revenueForm["august"].value}
      helperText=""
    />
    <InputTag
      displayName="september"
      name="september"
      setValue={inputChangedHandler}
      value={revenueForm["september"].value}
      helperText=""
    />
    <InputTag
      displayName="october"
      name="october"
      setValue={inputChangedHandler}
      value={revenueForm["october"].value}
      helperText=""
    />
    <InputTag
      displayName="november"
      name="november"
      setValue={inputChangedHandler}
      value={revenueForm["november"].value}
      helperText=""
    />
    <InputTag
      displayName="december"
      name="december"
      setValue={inputChangedHandler}
      value={revenueForm["december"].value}
      helperText=""
    />
  <Button onClick ={insertDocument} style={{backgroundColor:"blue"}}>Submit Data</Button>
  </div>
);
}
export default Form;

"use client";
import { Navbar2 } from "@/components/navbar";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";

interface RadioProps {
  label: string;
  name: string;
  value: string;
  value2: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioButtonsGroup({
  label,
  name,
  value,
  value2,
  selectedValue,
  onChange,
}: RadioProps) {
  return (
    <FormControl className="text-black">
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={selectedValue} onChange={onChange}>
        <FormControlLabel value={value} control={<Radio />} label={value} />
        <FormControlLabel value={value2} control={<Radio />} label={value2} />
      </RadioGroup>
    </FormControl>
  );
}

function BasicTextFields({ label, type, name, value, onChange }: TextProps) {
  return (
    <TextField
      id={name}
      type={type}
      label={label}
      variant="outlined"
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
}

export default function Quote() {
  const [form, setForm] = useState({
    Name: "",
    Company_Name: "",
    Phone: "",
    Email: "",
    PickUp: "",
    Datee: new Date().toISOString().slice(0, 16),
    Pallets: "",
    Weight: "",
    Delivery_address: "",
    Shipment_Type: "",
    High_Value_Load: "",
  });

  const {
    Name,
    Company_Name,
    Phone,
    Email,
    PickUp,
    Datee,
    Pallets,
    Weight,
    Delivery_address,
    Shipment_Type,
    High_Value_Load,
  } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !Name ||
      !Company_Name ||
      !Phone ||
      !Email
) {
      alert("Please fill in all fields before submitting.");
      return; // Stop form submission
    }








    const response = await axios.post(`/api/sendEmail`, {
      to: "anshik091@gmail.com",
      subject: "Quote Request",
      html: `<p>You have a new quote request:</p>
             <p><strong>Name:</strong> ${Name}</p>
             <p><strong>Company Name:</strong> ${Company_Name}</p>
             <p><strong>Phone:</strong> ${Phone}</p>
             <p><strong>Email:</strong> ${Email}</p>
             <p><strong>Pickup Address:</strong> ${PickUp}</p>
             <p><strong>Pallets:</strong> ${Pallets}</p>
             <p><strong>Date:</strong> ${Datee}</p>
             <p><strong>Weight:</strong> ${Weight}</p>
             <p><strong>Delivery Address:</strong> ${Delivery_address}</p>
             <p><strong>Shipment Type:</strong> ${Shipment_Type}</p>
             <p><strong>High Value Load:</strong> ${High_Value_Load}</p>`,
    });
    console.log(response.data)
    if (response.status === 200) {
      alert("Quote request sent successfully!");
    } else {
      alert("Something went wrong, please try again.");
    }
setForm(({
  Name: "",
  Company_Name: "",
  Phone: "",
  Email: "",
  PickUp: "",
  Datee: new Date().toISOString().slice(0, 16),
  Pallets: "",
  Weight: "",
  Delivery_address: "",
  Shipment_Type: "",
  High_Value_Load: "",
}))
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Navbar2 />
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl mt-18 mb-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Request a Quote
        </h2>

        <form className="flex flex-col gap-4">
          <BasicTextFields
            label="Name"
            type="text"
            name="Name"
            value={Name}
            onChange={handleChange}
          />
          <BasicTextFields
            label="Company Name"
            type="text"
            name="Company_Name"
            value={Company_Name}
            onChange={handleChange}
          />
          <BasicTextFields
            label="Phone"
            type="tel"
            name="Phone"
            value={Phone}
            onChange={handleChange}
          />
          <BasicTextFields
            label="Email"
            type="email"
            name="Email"
            value={Email}
            onChange={handleChange}
          />
          <BasicTextFields
            label="Pickup Address"
            type="text"
            name="PickUp"
            value={PickUp}
            onChange={handleChange}
          />
          <BasicTextFields
            label="Pick Date/Time"
            type="datetime-local"
            name="Datee"
            value={Datee}
            onChange={handleChange}
          />

          <RadioButtonsGroup
            label="Shipment Type"
            name="Shipment_Type"
            value="LTL"
            value2="FTL"
            selectedValue={Shipment_Type}
            onChange={handleChange}
          />

          <BasicTextFields
            label="Number of Pallets"
            type="number"
            name="Pallets"
            value={Pallets}
            onChange={handleChange}
          />

          <RadioButtonsGroup
            label="High Value Load"
            name="High_Value_Load"
            value="Yes"
            value2="No"
            selectedValue={High_Value_Load}
            onChange={handleChange}
          />

          <BasicTextFields
            label="Weight (kg)"
            type="number"
            name="Weight"
            value={Weight}
            onChange={handleChange}
          />
          <BasicTextFields
            label="Delivery Address"
            type="text"
            name="Delivery_address"
            value={Delivery_address}
            onChange={handleChange}
          />

          <button
            onClick={clickHandler}
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

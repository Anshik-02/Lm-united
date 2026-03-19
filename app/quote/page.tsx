"use client";
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
      return;
    }

    const response = await axios.post(`/api/sendEmail`, {
      to: "info@lmunitedtransport.com",
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
    <div className="bg-slate-50 min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-8 md:p-16 w-full max-w-2xl mx-auto border border-slate-100 overflow-hidden relative">
          {/* Accent decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-orange-500" />

          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Request a Quote
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
            <p className="mt-6 text-slate-500 font-light text-lg">
              Fill out the form below and our team will get back to you with a tailored quote for your shipment.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BasicTextFields
                label="Full Name"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BasicTextFields
                label="Phone Number"
                type="tel"
                name="Phone"
                value={Phone}
                onChange={handleChange}
              />
              <BasicTextFields
                label="Email Address"
                type="email"
                name="Email"
                value={Email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-6 pt-6 border-t  border-slate-100">
              <div className="">
                <BasicTextFields
                label="Pickup Address"
                type="text"
                name="PickUp"
                value={PickUp}
                onChange={handleChange}
              />
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BasicTextFields
                  label="Pickup Date/Time"
                  type="datetime-local"
                  name="Datee"
                  value={Datee}
                  onChange={handleChange}
                />
                <BasicTextFields
                  label="Number of Pallets"
                  type="number"
                  name="Pallets"
                  value={Pallets}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-4 px-6 bg-slate-50 rounded-2xl">
              <RadioButtonsGroup
                label="Shipment Type"
                name="Shipment_Type"
                value="LTL"
                value2="FTL"
                selectedValue={Shipment_Type}
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BasicTextFields
                label="Total Weight (kg)"
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
            </div>

            <button
              onClick={clickHandler}
              className="mt-8 bg-orange-600 text-white font-bold py-5 px-8 rounded-2xl hover:bg-orange-700 transition duration-300 shadow-lg shadow-orange-900/20 active:scale-[0.98]"
            >
              SUBMIT QUOTE REQUEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


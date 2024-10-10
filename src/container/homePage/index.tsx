"use client";
import { CountryDataType } from "@/interface/countryData.type";
import { setCountryName } from "@/store/slice/countrySlice";
import { COUNTRIES } from "@/utils/mockData";
import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const handleCountryName = (
    event: SyntheticEvent<Element, Event>,
    value: CountryDataType | null
  ) => {
    value?.Name && dispatch(setCountryName(value));
  };
  return (
    <div className="flex justify-center py-8">
      <Autocomplete
        disablePortal
        options={COUNTRIES}
        getOptionLabel={(option) => option.Name}
        sx={{ width: 300 }}
        onChange={(event, value) => handleCountryName(event, value)}
        renderInput={(params) => (
          <TextField {...params} label="Select Country" />
        )}
      />
    </div>
  );
};

export default HomePage;

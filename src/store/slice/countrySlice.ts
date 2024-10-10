import { CountryData } from "@/interface/countryData.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedCountryName: "",
};

const countrySlice = createSlice({
  name: "CountryData",
  initialState,
  reducers: {
    setCountryName: (state, action: PayloadAction<CountryData>) => {
      state.selectedCountryName = action.payload.Name;
    },
  },
});

export const { setCountryName } = countrySlice.actions;
export default countrySlice.reducer;

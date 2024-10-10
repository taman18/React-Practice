import { CountryData } from "@/interface/countryData.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UniversityData } from "@/interface/countryData.type";

interface CountryState {
  selectedCountryName: string;
  countryData: UniversityData[];
}
const initialState: CountryState = {
  selectedCountryName: "",
  countryData: [],
};

const countrySlice = createSlice({
  name: "CountryData",
  initialState,
  reducers: {
    setCountryName: (state, action: PayloadAction<CountryData>) => {
      state.selectedCountryName = action.payload.Name;
    },
    setCountryData: (state, action: PayloadAction<UniversityData[]>) => {
    state.countryData = action.payload;
    }
  },
});

export const { setCountryName, setCountryData } = countrySlice.actions;
export default countrySlice.reducer;
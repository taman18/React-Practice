import { CountryData } from "@/interface/countryData.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UniversityData } from "@/interface/countryData.type";

interface CountryState {
  selectedCountryName: string;
  countryData: UniversityData[];
  searchedData: string;
}
const initialState: CountryState = {
  selectedCountryName: "",
  countryData: [],
  searchedData: "",
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
    },
    setSearchedData: (state, action: PayloadAction<string>) => {
      state.searchedData = action.payload;
    },
  },
});

export const { setCountryName, setCountryData, setSearchedData } =
  countrySlice.actions;
export default countrySlice.reducer;


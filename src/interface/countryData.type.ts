export interface CountrySliceState {
    countrySlice: {
      selectedCountryName: string;
    };
  }
 export interface UniversityData {
    alpha_two_code: string;
    country: string;
    domains: string[];
    "state-province": string | null;
    name: string;
    web_pages: string[];
  }

  export interface CountryDataType {
    Name: string;
    Code: string;
  }
  
  export interface CountryData {
    Name: string,
    Code: string
}


export interface StoreType {
  countrySlice: {
    countryData: [];
    searchedData: string;
    selectedCountryName: string;
  };
}
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setSearchedData } from "@/store/slice/countrySlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchedValue, setSearchedValue] = React.useState<string>('');
  React.useEffect(() => {
    const searchInfo = setTimeout(()=> {
        dispatch(setSearchedData(searchedValue));
    }, 1000);
    return () => clearTimeout(searchInfo);
  }, [searchedValue, dispatch])
  const SearchCountryData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {value} = event.target;
    setSearchedValue(value.trim());
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Search"
          id="outlined-size-normal"
          onChange={(event) => SearchCountryData(event)}
        />
      </div>
    </Box>
  );
}

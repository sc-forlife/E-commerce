import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchComponent() {
  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        sx={{
          "& .MuiInputBase-root": { height: "40px", width: "450px" },
        }}
        freeSolo
        //   onChange={(event, newValue) => setDisplayValue(newValue)}
        // onInputChange={(event, newInputValue) =>
        //   setDisplayValue(newInputValue)
        // }
        // options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} placeholder="Search" />}
      />
    </>
  );
}

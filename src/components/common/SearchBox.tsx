import React from "react";
import MotionBlock from "./motion-block";
import MotionButton from "./motion-button";
import {
    Divider,
    Box,
    FormControl,
    Select,
    MenuItem,
    FilledInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const SearchBox: React.FC = () => {
    return (
        <MotionBlock>
            <Box
                sx={{
                    marginTop: "1rem",
                    width: "100%",
                    height:"100%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0 1.5rem",
                    boxShadow: "0rem 0.375rem 0.4375rem 0.1875rem #80808066",
                    background: "#fff",
                    color: "#000",
                }}
            >

                <Box
                    sx={{
                        width: "100%",
                        gap: "0.3125rem",
                        display: "flex",
                        alignItems: "flex-end",
                    }}
                >
                    <SearchIcon
                        style={{ fill: "#25324B", fontSize: "2.5rem", fontWeight: 100 }}
                    />
                    <FilledInput
                        sx={{ width: "100%", background: "#fff",
                            color: "#000", 
                            "&::placeholder": { color: "#000", opacity: 1 },
                         }}
                        placeholder="Company Name or Keyword"
                    />
                </Box>


                <Divider
                    sx={{ height: "3rem", alignSelf: "center", borderColor: "#0000005c" }}
                    orientation="vertical"
                />


                <Box
                    sx={{
                        width: "100%",
                        gap: "0.5rem",
                        display: "flex",
                        alignItems: "baseline",
                    }}
                >
                    <FormControl
                        variant="standard"
                        sx={{
                            my: 2,
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            background: "#fff",
                        }}
                    >
                        <LocationOnOutlinedIcon
                            style={{ fill: "#25324B", fontSize: "2.5rem", fontWeight: 100 }}
                        />
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            sx={{
                                width: "100%",
                                color: "#000", 
                                "& .MuiSelect-icon": { color: "#000" }, 
                                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#000" }, 
                                "& .MuiSelect-select:focus": { backgroundColor: "transparent" }, 
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Search Button */}
                <MotionButton>Search</MotionButton>
            </Box>
        </MotionBlock>
    );
};

export default SearchBox;
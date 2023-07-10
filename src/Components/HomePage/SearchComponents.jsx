import React, { useState } from "react";
import SearchComponentsStyles from './SearchComponents.module.css'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
// const { MongoClient } = require("mongodb");

//const uri = "mongodb+srv://anujnb2112:cCOO3BZyl20xddMQ@cluster0.65apm5c.mongodb.net/hotel-management-system-uiivk?retryWrites=true&w=majority";


const SearchComponents =  () => {
    const [persons, setPersons] = useState(0);
   
    const handlePersonsChange =  (e) => {

        // mongoose.connect(uri, connectionParams).then(() => console.log("conn")).catch((e) => console.log(e));
    }
    return (
        <>
            <div className={SearchComponentsStyles.parentDiv}>
                <div className={SearchComponentsStyles.searchComponentStyle}>
                    <div className={SearchComponentsStyles.dateTimeRangeStyles}>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoItem
                                component="DateRangePicker"
                            >
                                <DateRangePicker
                                    localeText={{ start: 'Check-in', end: 'Check-out' }}
                                />
                            </DemoItem>


                        </LocalizationProvider>

                    </div>
                    <FormControl sx={{ width: "150px", paddingLeft: '20px', paddingRight: "20px" }}>
                        <InputLabel id="demo-simple-select-label">Persons</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={persons}

                            label="Persons"
                            onChange={handlePersonsChange}
                        >
                            <MenuItem disabled defaultValue={0}>Select number of persons</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>

                        </Select>
                    </FormControl>

                    <button className={SearchComponentsStyles.buttonStyle}
                    >
                        Find Now
                    </button>


                </div>
            </div>
        </>
    );

}
export default SearchComponents;
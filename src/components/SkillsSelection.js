import React from 'react'
import MultiSelect from "react-multi-select-component";

const options = [
    { label: "Skating", value: "Skating" },
    { label: "Passing", value: "Passing" },
    { label: "1 vs 1", value: "1vs1" },
    { label: "2 vs 2", value: "2vs2" },
    { label: "Breakout", value: "Breakout" },
    { label: "Forecheck", value: "Forecheck" },
  ];

function SkillsSelection(props) {
    
    const { selected, setSelected, labelledBy, overrideStrings, onClick, ...other } = props

    return (
 
     
        <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy={labelledBy}
            overrideStrings={overrideStrings} 
            {...other}        
            />      

    )
}

export default SkillsSelection

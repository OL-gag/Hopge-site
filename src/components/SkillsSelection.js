import React from 'react'
import MultiSelect from "react-multi-select-component";

function SkillsSelection(props) {
    
    const { options, selected, setSelected, labelledBy, overrideStrings, onClick, ...other } = props

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

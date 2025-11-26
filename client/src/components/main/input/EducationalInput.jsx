import { useState } from "react";

import EducationalInputItem from "./EducationalInputItem.jsx";

function EducationalInput(props) {

    const [items, setItems] = useState(props.data);

    function addEducationItem(e) {
        // Check current item properties
    }
    
    function deleteEducationItem(e) {
        
    }

    return (
        <fieldset>
            <caption>Educational Details</caption>
        </fieldset>
    );
}

export default EducationalInput;

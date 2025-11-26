import { useState } from "react";

import ExperienceInputItem from "./ExperienceInputItem.jsx";

function ExperienceInput(props) {
    const setData = props.setData;

    // Use this to update props
    const [experience, setExperience] = useState(props.data);
    const [currentId, setCurrentId] = useState(1);

    const [startYear, setStartYear] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [role, setRole] = useState("");
    const [outline, setOutline] = useState("");
    const [responsibilityOne, setResponsibilityOne] = useState("");
    const [responsibilityTwo, setResponsibilityTwo] = useState("");
    const [responsibilityThree, setResponsibilityThree] = useState("");

    const currentYear = new Date().getFullYear();

    function addExperienceItem(e) {
        /*
            - start year must not be empty
            - start year must be an integer
            - start year must be greater than or equal to 1900
            - start year must be less than or equal to current year
        */

        if (startYear.trim() === "") {
            return;
        }

        if (isNaN(startYear)) {
            return;
        }

        if (startYear < 1900) {
            return;
        }

        if (startYear > currentYear) {
            return;
        }

        /*
            - end year must not be empty
            - end year must be an integer
            - end year must be greater than or equal to 1900
            - end year must be greater than or equal to start year
            - end year must be less than or equal to current year
        */

        if (endYear.trim() === "") {
            return;
        }

        if (isNaN(endYear)) {
            return;
        }

        if (endYear < 1900) {
            return;
        }

        if (endYear > currentYear) {
            return;
        }

        if (endYear < startYear) {
            return;
        }

        /*
            - start month must not be empty
            - start month must be a valid month
        */

        if (startMonth === "---" || startMonth === "") {
            return;
        }

        /*
            - end month must not be empty
            - end month must be a valid month
            - if start year and end year are equal: end month must be greater
                than start month
        */
        
        if (endMonth === "---" || endMonth === "") {
            return;
        }

        if (startYear === endYear && parseInt(endMonth) < parseInt(startMonth)) {
            return;
        }

        /*
            - role must not be empty
            - role must be less than or equal 40 characters
        */

        if (role === "") {
            return;
        }

        if (role.length > 40) {
            return;
        }

        /*
            - outline must not be empty
            - outline must be less than or equal 250 characters
        */

        if (outline === "") {
            return;
        }

        if (outline.length > 250) {
            return;
        }

        /*
            - all responsibilities must not be empty
            - all responsibilities must be less than 100 characters
        */

        if (responsibilityOne === "") {
            return;
        }
        
        if (responsibilityTwo === "") {
            return;
        }
        
        if (responsibilityThree === "") {
            return;
        }

        if (responsibilityOne.length > 100) {
            return;
        }
        
        if (responsibilityTwo.length > 100) {
            return;
        }
        
        if (responsibilityThree.length > 100) {
            return;
        }

        if (e.type === "keyup") {
            if (e.key !== "Enter") {
                return;
            }
        }

        setExperience([...experience, {
            id: currentId,
            startYear: startYear,
            startMonth: startMonth,
            endYear: endYear,
            endMonth: endMonth,
            role: role,
            outline: outline,
            responsibilityOne: responsibilityOne,
            responsibilityTwo: responsibilityTwo,
            responsibilityThree: responsibilityThree,
        }]);

        setData([...experience, {
            id: currentId,
            startYear: startYear,
            startMonth: startMonth,
            endYear: endYear,
            endMonth: endMonth,
            role: role,
            outline: outline,
            responsibilityOne: responsibilityOne,
            responsibilityTwo: responsibilityTwo,
            responsibilityThree: responsibilityThree,
        }]);

        setCurrentId(currentId + 1);
 
        setStartYear("");
        setEndYear("");
        setStartMonth("");
        setEndMonth("");
        setRole("");
        setOutline("");
        setResponsibilityOne("");
        setResponsibilityTwo("");
        setResponsibilityThree("");
    }

    function deleteExperienceItem(id) {
        setExperience(experience.filter(function (item) {
            return item.id !== id;
        }));
        
        setData(experience.filter(function (item) {
            return item.id !== id;
        }));
    }
    
    function updateStartYear(e) {
        setStartYear(e.target.value);
    }

    function updateStartMonth(e) {
        setStartMonth(e.target.value);
    }

    function updateEndYear(e) {
        setEndYear(e.target.value);
    }

    function updateEndMonth(e) {
        setEndMonth(e.target.value);
    }

    function updateRole(e) {
        setRole(e.target.value);
    }

    function updateOutline(e) {
        setOutline(e.target.value);
    }

    function updateResponsibility(index, e) {
        switch (index) {
            case 1:
                setResponsibilityOne(e.target.value);
                break;
            case 2:
                setResponsibilityTwo(e.target.value);
                break;
            case 3:
                setResponsibilityThree(e.target.value);
                break;
            default:
                break;
        };
    }

    return (
        <fieldset>
            <caption>Work Experience Details</caption>

            <fieldset>
                <label htmlFor="experience-field-date-start-year">
                    <span className="experience-field-label">Start Year</span>

                    <input
                            type="number"
                            minLength="4"
                            maxLength="4"
                            min="1900"
                            max={ currentYear }
                            onChange={ updateStartYear }
                            value={ startYear } />
                </label>

                <label htmlFor="experience-field-date-start-month">
                    <span className="experience-field-label">Start Month</span>

                    <select
                            name="start-month"
                            id="experience-field-date-start-month"
                            onChange={ updateStartMonth }
                            value={ startMonth }>
                        <option value="---">---</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                </label>

                <label htmlFor="experience-field-date-end-year">
                    <span className="experience-field-label">End Year</span>

                    <input
                            type="number"
                            minLength="4"
                            maxLength="4"
                            min="1900"
                            max={ currentYear }
                            onChange={ updateEndYear }
                            value={ endYear } />
                </label>

                <label htmlFor="experience-field-date-end-month">
                    <span className="experience-field-label">End Month</span>

                    <select
                            name="end-month"
                            id="experience-field-date-end-month"
                            onChange={ updateEndMonth }
                            value={ endMonth }>
                        <option value="---">---</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                </label>
            </fieldset>

            <label htmlFor={ "experience-field-role" }>
                <span className={ "experience-field-label" }>Role</span>

                <input
                        id={ "experience-field-role" }
                        className={ "experience-field-input" }
                        type={ "text" }
                        onChange={ updateRole }
                        value={ role } />
            </label>

            <label htmlFor={ "experience-field-outline" }>
                <span className={ "experience-field-label" }>Outline</span>

                <input
                        id={ "experience-field-outline" }
                        className={ "experience-field-input" }
                        type={ "text" }
                        onChange={ updateOutline }
                        value={ outline } />
            </label>

            <fieldset>
                <caption className={ "experience-field-label" }>Key Responsibilities</caption>

                <label htmlFor={ "experience-field-responsibility-1" }>
                    <span className={ "experience-field-label" }>Responsibility #1</span>

                    <input
                            id={ "experience-field-responsibility-1" }
                            className={ "experience-field-input" }
                            type={ "text" }
                            onChange={ (e) => updateResponsibility(1, e) }
                            value={ responsibilityOne } />
                </label>

                <label htmlFor={ "experience-field-responsibility-2" }>
                    <span className={ "experience-field-label" }>Responsibility #2</span>

                    <input
                            id={ "experience-field-responsibility-2 "}
                            className={ "experience-field-input" }
                            type={ "text" }
                            onChange={ (e) => updateResponsibility(2, e) }
                            value={ responsibilityTwo } />
                </label>

                <label htmlFor={ "experience-field-responsibility-3" }>
                    <span className={ "experience-field-label" }>Responsibility #3</span>

                    <input
                            id={ "experience-field-responsibility-3" }
                            className={ "experience-field-input" }
                            type={ "text" }
                            onChange={ (e) => updateResponsibility(3, e) }
                            value={ responsibilityThree } />
                </label>

            </fieldset>

            <button 
                    type={ "button" }
                    onClick={ addExperienceItem }
                    onKeyUp={ addExperienceItem }>
                Add Experience
            </button>

            <ul>
                {
                    experience.map(function (item) {
                        return (
                                <ExperienceInputItem
                                        key={ item.id }
                                        dataId={ item.id }
                                        startYear={ item.startYear }
                                        endYear={ item.endYear }
                                        startMonth={ item.startMonth }
                                        endMonth={ item.endMonth }
                                        role={ item.role }
                                        deleteFunction={ deleteExperienceItem } />
                        );
                    })
                }
            </ul>
        </fieldset>
    );
}

export default ExperienceInput;

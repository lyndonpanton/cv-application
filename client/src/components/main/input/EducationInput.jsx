import { useState } from "react";

import EducationInputItem from "./EducationInputItem.jsx";

function EducationInput(props) {
    const setData = props.setData;

    const [education, setEducation] = useState(props.data);
    const [currentId, setCurrentId] = useState(1);

    const [school, setSchool] = useState("");
    const [course, setCourse] = useState("");
    const [startYear, setStartYear] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const [endMonth, setEndMonth] = useState("");

    const currentYear = new Date().getFullYear();

    function addEducationItem(e) {
        if (school.trim() === "") return;
        if (school.length > 100) return;

        if (course.trim() === "") return;
        if (course.length > 100) return;

        if (startYear.trim() === "") return;
        if (isNaN(startYear)) return;
        if (startYear < 1900) return;
        if (startYear > currentYear) return;

        if (endYear.trim() === "") return;
        if (isNaN(endYear)) return;
        if (endYear < startYear) return;

        if (startMonth === "---" || startMonth === "") return;
        if (endMonth === "---" || endMonth === "") return;
        if (startYear === endYear && parseInt(endMonth) < parseInt(startMonth))
            return;

        if (e.type === "keyup") {
            if (e.key !== "Enter") return;
        }

        setEducation([...education, {
            id: currentId,
            school: school,
            course: course,
            startYear: startYear,
            startMonth: startMonth,
            endYear: endYear,
            endMonth: endMonth
        }]);

        setData([...education, {
            id: currentId,
            school: school,
            course: course,
            startYear: startYear,
            startMonth: startMonth,
            endYear: endYear,
            endMonth: endMonth
        }]);

        setCurrentId(currentId + 1);

        setSchool("");
        setCourse("");
        setStartYear("");
        setStartMonth("");
        setEndYear("");
        setEndMonth("");
    }
    
    function deleteEducationItem(id) {
        setEducation(education.filter(function (item) {
            return item.id !== id;
        }));

        setData(education.filter(function (item) {
            return item.id !== id;
        }));
    }

    function updateCourse(e) {
        setCourse(e.target.value);
    }

    function updateStartYear(e) {
        setStartYear(e.target.value)
    }

    function updateStartMonth(e) {
        setStartMonth(e.target.value);
    }

    function updateSchool(e) {
        setSchool(e.target.value);
    }

    function updateEndYear(e) {
        setEndYear(e.target.value);
    }

    function updateEndMonth(e) {
        setEndMonth(e.target.value);
    }

    return (
        <fieldset>
            <caption>Educational Details</caption>

            <fieldset>
                <label htmlFor={ "education-input-date-start-year" }>
                    <span id={ "education-input-date-start-year-label"}>
                        Start Year
                    </span>
                    <input
                            id={ "education-input-date-start-year"}
                            type={ "number" }
                            onChange={ updateStartYear }
                            value={ startYear }/>
                </label>

                <label htmlFor={ "education-input-date-start-month" }>
                    <span id={ "education-input-date-start-month-label"}>
                        Start Month
                    </span>

                    <select
                            id={ "education-input-date-start-month" }
                            onChange={ updateStartMonth }
                            value={ startMonth }>
                        <option value={ "---" }>---</option>
                        <option value={ "january" }>January</option>
                        <option value={ "february" }>February</option>
                        <option value={ "march" }>March</option>
                        <option value={ "april" }>April</option>
                        <option value={ "may" }>May</option>
                        <option value={ "june" }>June</option>
                        <option value={ "july" }>July</option>
                        <option value={ "august" }>August</option>
                        <option value={ "september" }>September</option>
                        <option value={ "october" }>October</option>
                        <option value={ "november" }>November</option>
                        <option value={ "december" }>December</option>
                    </select>
                </label>

                <label htmlFor={ "education-input-date-end-year" }>
                    <span id={ "education-input-date-end-year-label"}>
                        End Year
                    </span>
                    <input
                            id={ "education-input-date-end-year"}
                            type={ "number" }
                            onChange={ updateEndYear }
                            value={ endYear }/>
                </label>
                
                <label htmlFor={ "education-input-date-end-month" }>
                    <span id={ "education-input-date-end-month-label"}>
                        End Month
                    </span>
                    
                    <select
                            id={ "education-input-date-end-month" }
                            onChange={ updateEndMonth }
                            value={ endMonth }>
                        <option value={ "---" }>---</option>
                        <option value={ "january" }>January</option>
                        <option value={ "february" }>February</option>
                        <option value={ "march" }>March</option>
                        <option value={ "april" }>April</option>
                        <option value={ "may" }>May</option>
                        <option value={ "june" }>June</option>
                        <option value={ "july" }>July</option>
                        <option value={ "august" }>August</option>
                        <option value={ "september" }>September</option>
                        <option value={ "october" }>October</option>
                        <option value={ "november" }>November</option>
                        <option value={ "december" }>December</option>
                    </select>
                </label>
            </fieldset>

            <label htmlFor={ "education-input-school" }>
                <span id={ "education-input-school-label" }>
                    School Name
                </span>
                <input
                        id={ "education-input-school" }
                        type={ "text" }
                        onChange={ updateSchool }
                        value={ school } />
            </label>

            <label htmlFor={ "education-input-course" }>
                <span id={ "education-input-course-label" }>
                    Course Name
                </span>
                <input
                        id={ "education-input-course" }
                        type={ "text" }
                        onChange={ updateCourse }
                        value={ course } />
            </label>

            <button
                    type={ "button" }
                    onClick={ addEducationItem }
                    onKeyUp={ addEducationItem }>
                Add Education Item
            </button>

            <ul>
                {
                    education.map(function (item) {
                        return (
                                <EducationInputItem
                                        key={ item.id }
                                        dataId={ item.id }
                                        startYear={ item.startYear }
                                        endYear={ item.endYear }
                                        school={ item.school }
                                        course={ item.course }
                                        deleteFunction={ deleteEducationItem } />
                        );
                    })
                }
            </ul>
        </fieldset>
    );
}

export default EducationInput;

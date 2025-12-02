function EducationResultItem(props) {
    const { startYear, startMonth, endYear, endMonth, course, school }
            = props.data;
    return (
        // May want to add modules to output
        <li>
            <span>{ startMonth } { startYear } - { endMonth } { endYear }</span>
            <h3>{ course } ({ school })</h3>
        </li>
    );
}

export default EducationResultItem;

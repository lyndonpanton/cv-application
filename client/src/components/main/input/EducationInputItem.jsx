function EducationInputItem(props) {
    const { school, course } = props;
    console.log(school);
    console.log(course);

    return (
        <li>
            <span>{ course }</span> (<span>{ school }</span>)
            <button>Delete</button>
        </li>
    );
}

export default EducationInputItem;

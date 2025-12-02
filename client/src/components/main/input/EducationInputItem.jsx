function EducationInputItem(props) {
    const { dataId, school, course, deleteFunction } = props;
    console.log(school);
    console.log(course);

    return (
        <li>
            <span>{ course }</span> (<span>{ school }</span>)
            <button onClick={ () => deleteFunction(dataId) }>Delete</button>
        </li>
    );
}

export default EducationInputItem;

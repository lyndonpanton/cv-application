function ExperienceInputItem(props) {
    const { dataId, startYear, endYear, startMonth, endMonth, role, deleteFunction }
            = props;

    return (
        <li>
            <div>
                <span>{ startMonth }</span> <span>{ startYear }</span>
                <span> - </span>
                <span>{ endMonth }</span> <span>{ endYear }</span>
            </div>

            <p>{ role }</p>

            <button type={ "button" } onClick={ () => deleteFunction(dataId) }>Delete</button>
        </li>
    );
}

export default ExperienceInputItem;

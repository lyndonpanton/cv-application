import EducationResultItem from "./EducationResultItem.jsx";

function EducationalResult(props) {
    const education = props.data;

    return (
        <article>
            <h2>Education</h2>

            {
                education.map(function (item) {
                    return (
                            <EducationResultItem
                                    key={ item.id }
                                    data={ item } />
                    );
                })
            }
        </article>
    );
}

export default EducationalResult;

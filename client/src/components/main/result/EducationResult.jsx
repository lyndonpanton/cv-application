import EducationResultItem from "./EducationResultItem.jsx";

function EducationalResult(props) {
    const data = props.data;

    return (
        <article>
            <h2>Education</h2>

            {
                data.map(function (course) {
                    <EducationResultItem />
                })
            }
        </article>
    );
}

export default EducationalResult;

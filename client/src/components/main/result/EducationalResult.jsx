import EducationalResultItem from "./EducationalResultItem.jsx";

function EducationalResult(props) {
    const data = props.data;

    return (
        <article>
            <h2>Education</h2>

            {
                data.map(function (course) {
                    <EducationalResultItem />
                })
            }
        </article>
    );
}

export default EducationalResult;

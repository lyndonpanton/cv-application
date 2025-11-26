import ExperienceResultItem from "./ExperienceResultItem";

function ExperienceResult(props) {
    const experience = props.data;

    return (
        <article>
            <h3>Work Experience</h3>

            {
                experience.map(function (item) {
                    return (
                            <ExperienceResultItem
                                    key={ item.id }
                                    data={ item } />
                    );
                })
            }
        </article>
    );
}

export default ExperienceResult;

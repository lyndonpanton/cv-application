function SkillsResult(props) {
    const data = props.data;

    return (
        <article>
            <h3>Key Skills</h3>

            <ul>
                {
                    data.map(function(skill) {
                        return (
                            <li key={ skill.id }>{ skill.title }</li>
                        );
                    })
                }
            </ul>
        </article>
    );
}

export default SkillsResult;

function ExperienceResultItem(props) {
    const {
            startYear,
            startMonth,
            endYear,
            endMonth,
            role,
            outline,
            responsibilityOne,
            responsibilityTwo,
            responsibilityThree
    } = props.data;
    
    return (
        <li>
            <div>
                <span>{ startMonth } { startYear } - { endMonth } { endYear }</span>
                <h3>{ role }</h3>

                <article>
                    <section>
                        <h4>Outline</h4>

                        <p>
                            { outline }
                        </p>
                    </section>

                    <section>
                        <h4>Key Responsibilities</h4>

                        <ul>
                            <li>{ responsibilityOne }</li>
                            <li>{ responsibilityTwo }</li>
                            <li>{ responsibilityThree }</li>
                        </ul>
                    </section>
                </article>
            </div>
        </li>
    );
}

export default ExperienceResultItem;

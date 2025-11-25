function SkillsInputItem(props) {
    const { dataId, title, deleteKeySkill } = props;

    return (
        <li dataid={ dataId } className={ "key-skills-input-list-item"}>
            <span className={ "key-skills-input-list-item-title"}>{ title }</span>
            { /* Attribute for changing assistive title. Change text content to "X"
            icon afterwards */ }
            <button
                    type={ "button" }
                    className={ "key-skills-input-list-item-button" }
                    onClick={ deleteKeySkill }
                    onKeyDown={ deleteKeySkill }>
                        Delete
            </button>
        </li>
    )
}

export default SkillsInputItem;

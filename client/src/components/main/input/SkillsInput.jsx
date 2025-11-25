import { useState } from "react";

import SkillsInputItem from "./SkillsInputItem";

function SkillsInput(props) {
    const setData = props.setData;
    // Use this to update props
    const [skills, setSkills] = useState(props.data);
    const [currentId, setCurrentId] = useState(1);

    function deleteKeySkill(e) {
        const id = parseInt(e.target.parentElement.getAttribute("dataid"));

        setSkills(skills.filter(function (skill) { return skill.id !== id }));
        setData(skills.filter(function (skill) { return skill.id !== id }));
    }

    function addKeySkill(e) {
        let newSkill = { };

        if (e.type === "keyup") {
            if (e.key === "Enter") {
                e.preventDefault();

                if (e.target.value.trim() === "") {
                    return;
                }

                newSkill = {
                    id: currentId,
                    title: e.target.value
                };

                e.target.value = "";
            } else {
                return
            }
        } else if (e.type === "keydown") {
            if (e.key === "Enter") e.preventDefault();
            return;
        } else {
            const field = document.getElementById("key-skills-input");

            if (field.value.trim() === "") {
                return;
            }

            newSkill = {
                id: currentId,
                title: field.value
            };

            field.value = "";
        }

        setCurrentId(currentId + 1);

        setData([...skills, newSkill]);
        setSkills([...skills, newSkill]);
    }

    return (
        <fieldset>
            <caption>Key Skills Details</caption>

            <label htmlFor={ "key-skills-input" }>
                <span>Key Skill</span>

                <input
                        id={ "key-skills-input" }
                        type={ "text" }
                        name={ "key-skills-input" }
                        onKeyDown={ addKeySkill } 
                        onKeyUp={ addKeySkill } />
            </label>

            <button type={ "button" } onClick={ addKeySkill }>
                Add Key Skill
            </button>

            <ul id={ "key-skills-input-list" }>
                {
                    skills.map(function (skill) {
                        return (
                                <SkillsInputItem
                                        key={ skill.id }
                                        dataId={ skill.id }
                                        title={ skill.title }
                                        deleteKeySkill={ deleteKeySkill } />
                        );
                    })
                }
            </ul>
        </fieldset>
    );
}

export default SkillsInput;

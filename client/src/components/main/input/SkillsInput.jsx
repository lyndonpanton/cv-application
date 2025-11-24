function SkillsInput(props) {
    // Use this to update props
    let skills = [];
    let currentId = 1;

    function deleteKeySkill(e) {
        const id = e.target.parentElement["data-id"];

        // Update skills list in data
        skills = skills.filter(function (skill) {
            return skill.id !== id;
        });

        // Update skills list in ui
        const list = document.getElementById("key-skills-input-list");

        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        skills.forEach(function (skill) {
            const listItem = document.createElement("li");
            listItem.classList.add("key-skills-input-list-item");
            listItem["data-id"] = skill.id;

            const listItemTitle = document.createElement("span");
            listItemTitle.classList.add("key-skills-input-list-item-title");
            listItem.textContent = skill.title;

            const listItemDelete = document.createElement("button");
            listItemDelete.classList.add("key-skills-input-list-item-button");
            // Attribute for changing assistive title. Change text content to "X"
            // icon afterwards
            listItemDelete.textContent = "Delete";
            listItemDelete.type = "button";
            listItemDelete.addEventListener("click", deleteKeySkill);
            listItemDelete.addEventListener("keydown", deleteKeySkill);

            listItem.appendChild(listItemTitle);
            listItem.appendChild(listItemDelete);

            list.appendChild(listItem);
        });
    }

    function updateKeySkills(e) {
        let newSkill = { };

        if (e.type === "keyup") {
            if (e.key === "Enter") {
                e.preventDefault();

                if (e.target.value.trim() === "") {
                    return;
                }

                newSkill = {
                    id: currentId++,
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
                id: currentId++,
                title: field.value
            };

            field.value = "";
        }

        skills.push(newSkill);

        const list = document.getElementById("key-skills-input-list");

        const newListItem = document.createElement("li");
        newListItem.classList.add("key-skills-input-list-item");
        newListItem["data-id"] = newSkill.id;

        const newListItemTitle = document.createElement("span");
        newListItemTitle.classList.add("key-skills-input-list-item-title");
        newListItem.textContent = newSkill.title;

        const newListItemDelete = document.createElement("button");
        newListItemDelete.classList.add("key-skills-input-list-item-button");
        // Attribute for changing assistive title. Change text content to "X"
        // icon afterwards
        newListItemDelete.textContent = "Delete";
        newListItemDelete.type = "button";
        newListItemDelete.addEventListener("click", deleteKeySkill);
        newListItemDelete.addEventListener("keydown", deleteKeySkill);

        newListItem.appendChild(newListItemTitle);
        newListItem.appendChild(newListItemDelete);

        list.appendChild(newListItem);
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
                        onKeyDown={ updateKeySkills } 
                        onKeyUp={ updateKeySkills } />
            </label>

            <button type={ "button" } onClick={ updateKeySkills }>
                Add Key Skill
            </button>

            <ul id={ "key-skills-input-list" }>

            </ul>
        </fieldset>
    );
}

export default SkillsInput;

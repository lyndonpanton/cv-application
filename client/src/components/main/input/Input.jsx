import GeneralInput from "./GeneralInput.jsx";
import ProfileInput from "./ProfileInput.jsx";
import SkillsInput from "./SkillsInput.jsx";
import EducationalInput from "./EducationalInput.jsx";
import ExperienceInput from "./ExperienceInput.jsx";
import AchievementsInput from "./AchievementsInput.jsx";
import ReferencesInput from "./ReferencesInput.jsx";

function Input(props) {
    const {
            isInputVisible,
            setIsInputVisible,
            dataGeneral,
            setDataGeneral,
            dataPersonalProfile,
            setDataPersonalProfile,
            dataKeySkills,
            setDataKeySkills,
            dataWorkExperience,
            setDataWorkExperience,
            dataEducation,
            setDataEducation,
            dataAchievementsAndAwards,
            setDataAchievementsAndAwards,
            dataReferences,
            setDataReferences
    } = props;

    function updateVisibility(e) {
        e.preventDefault();
        
        setIsInputVisible(false);
    }

    if (isInputVisible) {
        return (
            <section>
                <h2>Input Details</h2>

                <form>
                    <GeneralInput
                            data={ dataGeneral }
                            setData={ setDataGeneral } />
                    <ProfileInput
                            data={ dataPersonalProfile }
                            setData={ setDataPersonalProfile } />
                    <SkillsInput />
                    <EducationalInput />
                    <ExperienceInput />
                    <AchievementsInput />
                    <ReferencesInput />

                    <input
                            type="submit"
                            onClick={ updateVisibility }
                            value="Submit" />
                </form>
            </section>
        );
    }

    return null;
}

export default Input;

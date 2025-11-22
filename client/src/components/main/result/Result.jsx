import GeneralResult from "./GeneralResult.jsx";
import ProfileResult from "./ProfileResult.jsx";
import SkillsResult from "./SkillsResult.jsx";
import EducationalResult from "./EducationalResult.jsx";
import ExperienceResult from "./ExperienceResult.jsx";
import ReferencesResult from "./ReferencesResult.jsx";
import AchievementsResult from "./AchievementsResult.jsx";

function Result(props) {
    const {
            isInputVisible,
            setIsInputVisible,
            dataGeneral,
            dataPersonalProfile,
            dataKeySkills,
            dataEducation,
            dataWorkExperience,
            dataAchievementsAndAwards,
            dataReferences
    } = props;

    function updateVisibility() {
        setIsInputVisible(true);
    }

    if (!isInputVisible) {
        return (
            <section>
                <h2>Your Generated CV</h2>

                <GeneralResult data={ dataGeneral } />
                <ProfileResult data={ dataPersonalProfile } />
                <SkillsResult data={ dataKeySkills } />
                <EducationalResult data={ dataEducation } />
                <ExperienceResult data={ dataWorkExperience } />
                <AchievementsResult data={ dataAchievementsAndAwards } />
                <ReferencesResult data={ dataReferences } />

                <button onClick={ updateVisibility }>Edit</button>
            </section>
        );
    }

    return null;
}

export default Result;

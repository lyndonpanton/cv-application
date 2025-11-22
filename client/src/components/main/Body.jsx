import Input from "./input/Input.jsx";
import Result from "./result/Result.jsx";

import { useState } from "react";

function Body() {
    const [isInputVisible, setIsInputVisible] = useState(true);

    // const [data, setData] = useState({});
    const [dataGeneral, setDataGeneral] = useState({
        fullName: "",
        homeAddress: "",
        phoneNumber: "",
        email: "",
        linkedIn: "",
        website: ""
    });
    const [dataPersonalProfile, setDataPersonalProfile] = useState("");
    const [dataKeySkills, setDataKeySkills] = useState([]);
    const [dataWorkExperience, setDataWorkExperience] = useState([]);
    const [dataEducation, setDataEducation] = useState([]);
    const [dataAchievementsAndAwards, setDataAchievementsAndAwards]
            = useState([]);
    const [dataReferences, setDataReferences] = useState([]);

    return (
        <main>
            <Input
                    isInputVisible={ isInputVisible }
                    setIsInputVisible={ setIsInputVisible }
                    dataGeneral={ dataGeneral }
                    setDataGeneral={ setDataGeneral }
                    dataPersonalProfile={ dataPersonalProfile }
                    setDataPersonalProfile={ setDataPersonalProfile }
                    dataKeySkills={ dataKeySkills }
                    setDataKeySkills={ setDataKeySkills }
                    dataWorkExperience={ dataWorkExperience }
                    setDataWorkExperience={ setDataWorkExperience }
                    dataEducation={ dataEducation }
                    setDataEducation={ setDataEducation }
                    dataAchievementsAndAwards={ dataAchievementsAndAwards }
                    setDataAchievementsAndAwards={ setDataAchievementsAndAwards }
                    dataReferences={ dataReferences }
                    setDataReferenes={ setDataReferences } />
            <Result
                    isInputVisible={ isInputVisible }
                    setIsInputVisible={ setIsInputVisible }
                    dataGeneral={ dataGeneral }
                    dataPersonalProfile={ dataPersonalProfile }
                    dataKeySkills={ dataKeySkills }
                    dataWorkExperience={ dataWorkExperience }
                    dataEducation={ dataEducation }
                    dataAchievementsAndAwards={ dataAchievementsAndAwards }
                    dataReferences={ dataReferences } />
        </main>
    );
}

export default Body;

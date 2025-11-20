import GeneralResult from "./GeneralResult.jsx";
import EducationalResult from "./EducationalResult.jsx";
import PracticalResult from "./PracticalResult.jsx";

function Result(props) {
    const { isInputVisible, setIsInputVisible } = props;

    function updateVisibility() {
        setIsInputVisible(true);
    }

    if (!isInputVisible) {
        return (
            <section>
                <h2>Your Generated CV</h2>

                <GeneralResult />
                <EducationalResult />
                <PracticalResult />

                <button onClick={ updateVisibility }>Edit</button>
            </section>
        );
    }

    return null;
}

export default Result;

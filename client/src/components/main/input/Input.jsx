import GeneralInput from "./GeneralInput.jsx";
import EducationalInput from "./EducationalInput.jsx";
import PracticalInput from "./PracticalInput.jsx";

function Input(props) {
    const { isInputVisible, setIsInputVisible } = props;

    function updateVisibility(e) {
        e.preventDefault();
        
        setIsInputVisible(false);
    }

    if (isInputVisible) {
        return (
            <section>
                <h2>Input Details</h2>

                <form>
                    <GeneralInput />
                    <EducationalInput />
                    <PracticalInput />

                    <input
                            type="submit"
                            onClick={ updateVisibility }
                            value="Submit" />
                </form>
            </section>
        )
    }

    return null;
}

export default Input;

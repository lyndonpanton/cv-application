function ProfileInput(props) {
    function updatePersonalProfile(e) {
        console.log(e.target.value);
        props.setData(e.target.value);
    }

    return (
        <fieldset>
            <caption>Personal Profile</caption>

            {/* Restrict word count (not character count) */}
            <textarea
                    cols={ 100 }
                    rows={ 25 }
                    placeholder={ "Enter your personal profile here..." }
                    onChange={ updatePersonalProfile }>
                
            </textarea>
        </fieldset>
    );
}

export default ProfileInput;

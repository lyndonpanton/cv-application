function GeneralInput(props) {
    const { fullName, homeAddress, phoneNumber, email, linkedIn, website }
            = props.data;
    const setData = props.setData;
    
    function updateFullName(e) {
        setData({ ...props.data, fullName: e.target.value });
    }
    
    function updateHomeAddress(e) {
        setData({ ...props.data, homeAddress: e.target.value });
    }
    
    function updatePhoneNumber(e) {
        setData({ ...props.data, phoneNumber: e.target.value });
    }
    
    function updateEmail(e) {
        setData({ ...props.data, email: e.target.value });
    }
    
    function updateLinkedIn(e) {
        setData({ ...props.data, linkedIn: e.target.value });
    }
    
    function updateWebsite(e) {
        setData({ ...props.data, website: e.target.value });
    }

    return (
        <fieldset>
            <caption>General Details</caption>

            <label htmlFor="cv-fullname">
                <span>Full Name (required)</span>
                <input
                        id="cv-fullname"
                        type="string"
                        required
                        value={ fullName }
                        onChange={ updateFullName } />
            </label>
            <label htmlFor="cv-home-address">
                <span>Home Address (required)</span>
                <input
                        id="cv-home-address"
                        type="string"
                        required
                        value={ homeAddress }
                        onChange={ updateHomeAddress } />
            </label>
            <label htmlFor="cv-phone-number">
                <span>Phone Number (required)</span>
                <input
                        id="cv-phone-number"
                        type="tel"
                        required
                        value={ phoneNumber }
                        onChange={ updatePhoneNumber } />
            </label>
            <label htmlFor="cv-email">
                <span>Email (required)</span>
                <input
                        id="cv-email"
                        type="email"
                        required
                        value={ email }
                        onChange={ updateEmail } />
            </label>
            <label htmlFor="cv-linkedin">
                <span>LinkedIn Profile (optional)</span>
                <input
                        id="cv-linkedin"
                        type="text"
                        value={ linkedIn }
                        onChange={ updateLinkedIn } />
            </label>
            <label htmlFor="cv-website">
                <span>Personal Website (option)</span>
                <input
                        id="cv-website"
                        type="text"
                        value={ website }
                        onChange={ updateWebsite } />
            </label>
        </fieldset>
    );
}

export default GeneralInput;

function GeneralResult(props) {
    const data = props.data;

    return (
        <article>
            <p>{ data.fullName }</p>
            <p>{ data.homeAddress }</p>
            <p>{ data.phoneNumber }</p>
            <p>{ data.email }</p>
            <p>{ data.linkedIn }</p>
            <p>{ data.website }</p>
        </article>
    );
}

export default GeneralResult;

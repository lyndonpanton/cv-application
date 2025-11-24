function ProfileResult(props) {
    const data = props.data.trim();

    return (
        <article>
            <h3>Personal Profile</h3>

            <p>{ data }</p>
        </article>
    );
}

export default ProfileResult;

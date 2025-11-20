function CopyrightInformation(props) {
    const { year, author, rights } = props.copyrightInformation;

    return (
        <section>
            <p>&copy; { year } { author } | { rights }</p>
        </section>
    );
}

export default CopyrightInformation;

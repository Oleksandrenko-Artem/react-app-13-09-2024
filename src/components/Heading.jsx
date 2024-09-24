function Heading(props) {
    const { titleContent, userName } = props;
    return (
        <h2>
            {titleContent}
            {userName}
        </h2>
    );
}
export default Heading;
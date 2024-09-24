function Link(props) {
    const {href, content} = props;
    return (
        <a href={href}>{content}</a>
    );
}
export default Link;
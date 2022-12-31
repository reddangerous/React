const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
        <p>CopyRight &copy; {year}</p>
        </footer>
    );
    }
    export default Footer;
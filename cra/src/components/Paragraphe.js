import PropsType from 'prop-types';

export const Paragraphe = (props) => {
    return <>
        <h1>{props.title}</h1>
        <p>
        </p>
    </>
};

Paragraphe.propTypes = {
    title : PropsType.string.isRequired 
}


Paragraphe.defaultProps = {
    text: 'Texte par defaultProps'
}

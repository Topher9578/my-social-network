import './Text.css';

const Text = ({children, size='m', type, isBold, isItalic}) => {
  return (
    <p className={`text text-size-${size} text-type-${type} ${isBold && 'text-bold'} ${isItalic && 'text-italic'}`}> {children} </p>
  );
};

export default Text;

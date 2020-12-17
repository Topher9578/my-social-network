import './Text.css';

const Text = ({children, size='m', type, isBold, isItalic}) => {
  return (
    <p className={`text size-${size} type-${type} ${isBold && 'bold'} ${isItalic && 'italic'}`}> {children} </p>
  );
};

export default Text;

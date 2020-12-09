import './Avatar.css';

const Avatar = ({ uri, size = 48 }) => {
  const style = {
    width: size,
    height: size,
    backgroundImage: `url(${uri})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div style={style} className="avatar"/>
  );
};

export default Avatar;

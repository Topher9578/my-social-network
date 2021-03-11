import './Header.css';
import Avatar from './Avatar';
import Text from './Text';

const AVATAR_HEIGHT = 36;
const PADDING_VERTICAL = 12;
export const HEIGHT = AVATAR_HEIGHT + PADDING_VERTICAL * 2;

const Header = ({children, avatar, author}) => {
  return (
    <div className="header" style={{height: HEIGHT}}>
      <Avatar uri={author.avatar} size={AVATAR_HEIGHT} />
      <div className="header-author">
        <Text size="s" type="caption">@{author.nickname}</Text>
      </div>
    </div>
  );  
};

export default Header

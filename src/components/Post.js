import './Post.css';
import Avatar from './Avatar';
import Text from './Text';

const Post = ({children, author, date}) => {
  return (
    <div className="post">
      <div className="header">
        <Avatar uri={author.avatar}/>
        <div className="author">
          <Text size="m" isBold>{author.firstName} {author.lastName}</Text>
          <Text size="s" type="caption">@{author.nickname}</Text>
        </div>
      </div>
      <div className="content">
        <Text size="l">{children}</Text>
      </div>
      <div>
        <Text size="s" isItalic type="caption">{date}</Text>
      </div>
    </div>
  );
};

export default Post;

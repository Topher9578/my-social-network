import {parse, format, parseISO} from 'date-fns';
import frLocale from 'date-fns/locale/fr'

import './Post.css';
import Avatar from './Avatar';
import Text from './Text';

export const Post = ({children, author, date}) => {
const dateObject = parseISO(date, new Date())
const formattedDate = format(dateObject, 'dd MMM yyyy à k:mm', {locale: frLocale})
  //parse(dateString, formatString, referenceDate, [options])//
  return (
    <div className="post">
      <div className="post-header">
        <Avatar uri={author.avatar}/>
        <div className="post-author">
          <Text size="m" isBold>{author.firstName} {author.lastName}</Text>
          <Text size="s" type="caption">@{author.nickname}</Text>
        </div>
      </div>
      <div className="post-content">
        <Text size="l">{children}</Text>
      </div>
      <div>
        <Text size="s" isItalic type="caption">{formattedDate}</Text>
      </div>
    </div>
  );
};

export default Post;

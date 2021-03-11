import './App.css';
import userFactory from './__mocks__/user';
import postFactory from './__mocks__/post';
import Post from './components/Post';
import List from './components/List';
import Card from './components/Card';
import Header, { HEIGHT as HEADER_HEIGHT } from './components/Header';


const post1 = postFactory({
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam imperdiet erat. Quisque aliquet lobortis arcu, ut lacinia nisl auctor id. Ut a interdum turpis. Suspendisse in turpis ullamcorper, sodales sapien sit amet, efficitur magna. Duis at pulvinar nisl. Proin finibus nulla nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget posuere lectus. Nullam ullamcorper, nibh a laoreet pulvinar, elit erat elementum tortor, non gravida nisl lectus ac magna. Aenean ultrices augue vel sapien facilisis consectetur.',
});

const post2 = postFactory({
  content: '(soit 3 items de moins qu\'en l\'an 2002) portant sur deux textes, à savoir un texte informatif de 115 lignes (approximativement 1000 mots), intitulé « La dernière tortue géante de l\'île Pinta », et un texte narratif de 185 lignes (environ 2000 mots), intitulé « Mon problème ».',
  date: '1990-02-16T19:32:00+01:00.000Z'
});

const post3 = postFactory({
  content: 'Un texte de fondation en quatre lignes est gravé sur une table sacramentelle en marbre en forme de fer-à-cheval encastrée dans l\'iwan oriental. ',
  date: '1992-05-27T15:56:00+01:00.000Z'
});

const post4 = postFactory({
  content: 'Bonjour bonjour',
  date: '1994-05-15T08:42:00+01:00.000Z'
});

const post5 = postFactory({
  content: 'Technical manuals and product catalogues may need to be amended from time to time, whether minorly or extensively. ',
  date: '1990-05-17T11:17:00+01:00.000Z'
});

const posts = [post1, post2, post3, post4, post5];

const user = userFactory({
  posts
});

const users = [user];

const App = () => {
  const renderPost = post => (
    <Card>
      <Post author={user} date={post.date}>{post.content}</Post>
    </Card>
  );

  const renderPostSeparator = () => (
    <div className="app-separator"/>
  );

  return (
    <>
      <Header author={user} />
      <div className="app">
        <div className="app-content"  style={{paddingTop: HEADER_HEIGHT}}>
          <List items={user.posts} renderItem={renderPost} renderItemSeparator={renderPostSeparator}/>
        </div>
      </div>
    </>
  );
};

export default App;

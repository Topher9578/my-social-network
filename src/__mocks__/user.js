const userFactory = ({ firstName = 'Christopher', lastName = 'Albrecht', avatar = 'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg', posts = [], nickname = 'Topher' }) => ({
  firstName,
  lastName,
  avatar,
  posts,
  nickname,
});

export default userFactory;

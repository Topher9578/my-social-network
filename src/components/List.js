import './List.css';

const List = ({items, renderItem}) => {
  return items.map(renderItem);
};

export default List;

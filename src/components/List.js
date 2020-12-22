import './List.css';

const List = ({items, renderItem, renderItemSeparator}) => {
  return items.map((item, index) => (
    <div>
      {index > 0 && !!renderItemSeparator && renderItemSeparator()}
      {renderItem(item)}
    </div>
  ));
};

export default List;

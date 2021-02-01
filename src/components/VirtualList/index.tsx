import React from 'react';
import { useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { getBooks } from '../../mock';
import { bookSelector } from '../../store/selector';
export interface IVirtualList {}

const PREFIX = 'VirtualList';
const Item = ({ index, style }: { index: number; style: any }) => {
  let content;
  return <div style={style}>{content}</div>;
};
const VirtualList: React.FC<IVirtualList> = (props) => {
  const books = useSelector(bookSelector);
  console.info(books);
  return (
    <div className={PREFIX}>
      <InfiniteLoader
        isItemLoaded={(index: number) => false}
        itemCount={1000}
        loadMoreItems={(startIndex: number, stopIndex: number) => {
          return Promise.resolve(getBooks());
        }}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            height={150}
            itemCount={1000}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
            itemData={books}
            width={300}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
};
export default VirtualList;

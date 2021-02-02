import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FixedSizeList as List, ListOnScrollProps } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { getBooks } from "../../mock";
import {
  cancelPollingBooksAction,
  getBooksAction,
  startPollingBooksAction,
  updateCachedScrollOffset,
  updateState,
} from "../../store/action";
import { bookSelector, rootSelector } from "../../store/selector";
import BookCard from "../BookCard";
export interface IVirtualList {}

const PREFIX = "VirtualList";
const Item = (props: any) => {
  const { index, style, data } = props;
  let content;
  return <BookCard style={style} book={data[index]} />;
};
const VirtualList: React.FC<IVirtualList> = (props) => {
  const dispatch = useDispatch();
  const books = useSelector(bookSelector);
  const { scrollOffset, cachedBooks } = useSelector(rootSelector);
  const handleVirtualListScroll = useCallback(
    (scrollInfo: ListOnScrollProps) => {
      console.info(scrollInfo);
      if (scrollInfo.scrollOffset < 600 && cachedBooks.length > 0) {
        dispatch(
          updateState({
            books: [...cachedBooks, ...books],
            scrollOffset: 0,
            cachedBooks: [],
          })
        );
      } else {
        dispatch(updateCachedScrollOffset(scrollInfo.scrollOffset));
      }
    },
    [dispatch, cachedBooks]
  );
  const listRef = useRef<List>(null);
  useEffect(() => {
    dispatch(startPollingBooksAction());
    return () => {
      dispatch(cancelPollingBooksAction());
    };
  }, []);
  useLayoutEffect(() => {
    listRef.current?.scrollTo(scrollOffset);
  }, [scrollOffset]);
  return (
    <div className={PREFIX}>
      <InfiniteLoader
        isItemLoaded={(index: number) => false}
        itemCount={books.length}
        loadMoreItems={(startIndex: number, stopIndex: number) => {
          return Promise.resolve(getBooks());
        }}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            layout="vertical"
            height={900}
            itemCount={books.length}
            itemSize={276}
            onItemsRendered={onItemsRendered}
            ref={listRef}
            itemData={books}
            onScroll={handleVirtualListScroll}
            width={300}
            itemKey={(index: number) => books[index]?.id || index}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
};
export default VirtualList;

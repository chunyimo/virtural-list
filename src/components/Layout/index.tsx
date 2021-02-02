import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getBooksAction, updateCachedScrollOffset } from "../../store/action";
import VirtualList from "../VirtualList";
import { rootSelector } from "../../store/selector";
export interface ILayout {}
const useSteyles = makeStyles({
  layout: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
});
let cachedBufferFlag = 0;
const PREFIX = "Layout";
const Layout: React.FC<ILayout> = (props) => {
  const classes = useSteyles();
  const dispatch = useDispatch();
  const { cachedScrollOffset: scrollOffset } = useSelector(rootSelector);
  const handleGetBooks = useCallback(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  const handleScrollDown = useCallback(() => {
    dispatch(updateCachedScrollOffset(scrollOffset + 256));
  }, [scrollOffset]);
  return (
    <div className={classes.layout}>
      <div className={classes.left}>
        <Button onClick={handleGetBooks}>Get Books</Button>
        <Button onClick={handleScrollDown}>Scroll down</Button>
      </div>
      <div className={classes.center}>
        <VirtualList />
      </div>
      <div className={classes.right}></div>
    </div>
  );
};
export default Layout;

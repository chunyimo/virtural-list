import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getBooksAction } from '../../store/action';
import VirtualList from '../VirtualList';
export interface ILayout {}
const useSteyles = makeStyles({
  layout: {
    display: 'flex',
    flexDirection: 'row',
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
const PREFIX = 'Layout';
const Layout: React.FC<ILayout> = (props) => {
  const classes = useSteyles();
  const dispatch = useDispatch();
  const handleGetBooks = useCallback(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  return (
    <div className={PREFIX}>
      <div className={classes.left}>
        <Button onClick={handleGetBooks}>Get Books</Button>
      </div>
      <div className={classes.center}>
        <VirtualList />
      </div>
      <div className={classes.right}></div>
    </div>
  );
};
export default Layout;

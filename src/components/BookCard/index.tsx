import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { IBook } from "../../store/reducer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderBottom: "16px solid black",
    boxSizing: "border-box",
  },
  media: {
    height: 140,
  },
});

export interface IBookCard {
  book: IBook;
  style: Object;
}
const PREFIX = "BookCard";
const BookCard: React.FC<IBookCard> = (props) => {
  const { book, style } = props;
  const classes = useStyles();
  return (
    <Card style={style} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={book?.cover}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {book?.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default BookCard;

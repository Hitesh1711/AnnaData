import React from "react";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const ArticleItem = (props) => {
  const classes = useStyles();
  const { article } = props;
  return (
    <Link
      to={{ pathname: article.url }}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          title={article.title}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <div>
              <Typography variant="h5" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {article.publishedAt.split("T")[0]}
                {"..."}
                {article.description}
                <br />
                <strong>Source:</strong>
                <strong>{article.source.name}</strong>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const ArticleList = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={2} className={classes.root}>
      {props.articles.map((article, index) => (
        <Grid item key={article.title + index} xs={12}>
          <ArticleItem article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleList;

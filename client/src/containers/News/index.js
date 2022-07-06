import React from "react";
import useStyles from "./styles";
import News from "./news";

const NewsApp = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <News />
    </main>
  );
};

export default NewsApp;

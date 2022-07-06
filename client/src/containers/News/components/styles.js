import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  card: {
    width: "100%",
    display: "flex",
  },
  media: {
    height: 150,
    width: 250,
    display: "flex",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

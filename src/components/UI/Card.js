import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className; // dont forget to put a space after the basic class name like this "card "
  return <div className={classes}>{props.children}</div>;
};
export default Card;

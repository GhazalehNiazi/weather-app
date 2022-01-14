import classes from './SearchBox.module.css';

const SearchBox = () => {
  return <input type="text" placeholder="search new places" className={classes.input}></input>;
};
export default SearchBox;

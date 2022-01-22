import classes from './SearchBox.module.css';
import React , {useContext} from 'react';
import weatherContext from '../../../store/weather-context';
const SearchBox = () => {
  const {api_call} = useContext(weatherContext)
  return <div>
<form onSubmit={api_call}>


<input type="text" placeholder="search new places" className={classes.input}></input>;
<button >&rarr;</button>
</form>
  </div>
};
export default SearchBox;

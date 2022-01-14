const Api = () => {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3960092f469b92d98917ccf6db87f3ba";
    
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data.current;
    }).then(function(current){
        console.log(current);
        console.log(current.temp);
    })
    // todo turn the temp from kelvin to c
    // todo turn the time from ms to hour

  return <div>hey</div>;
};
export default Api;

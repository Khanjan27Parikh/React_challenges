import React from "react";


function App() {
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let currDate = new Date(2022, 8, 16, 20);
currDate = currDate.getHours();
let greeting = '';
const cssStyle = { };

if(currDate >= 1 && currDate < 12){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if(currDate >= 12 && currDate < 16){
  greeting = 'Good Afternoon';
  cssStyle.color = 'red';
}
else if(currDate >= 16 && currDate < 20){
  greeting = 'Good Evening';
  cssStyle.color = 'orange';
}
else{
  greeting = 'Good Night';
  cssStyle.color = 'blue';
}

return(
    <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>
);

}

export default App;
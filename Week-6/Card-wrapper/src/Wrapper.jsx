import React from "react";
import "./App.css";



// This is sort of heavy stuff --> There is a cleaner way to do this


// function App() {
//   return (
//     <CardWrapper innerComponent={<TextComponent />} />
//   );
// }
// function CardWrapper({ innerComponent }) {
//   return (
//     <div className="container">
//       {innerComponent}
//     </div>
//   );
// }

// function TextComponent() {
//   return (
//     <div>
//       <p>Hi There</p>
//     </div>
//   );
// }



// CLEANER WAY TO MAKE A WRAPPER COMPONENT


function App() {
  return (
    <div>
      <CardWrapper>
        <div>
          hi there
        </div>
      </CardWrapper>

      <CardWrapper>
        <div>
          hellow buddy
        </div>
      </CardWrapper>
    </div>
  );
}
function CardWrapper({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
export default App;

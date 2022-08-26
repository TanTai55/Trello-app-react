import React from "react";
import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoardBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="trello-master">
      <Header/>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </div>
  );
}


export default App;

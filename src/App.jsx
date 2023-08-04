import { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import History from "./components/History";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="max-w-7xl mx-auto bg-purple-200 p-[4rem] h-[100vh]">
      <History list={list} setList={setList} />
      <Form list={list} setList={setList} />
    </div>
  );
}

export default App;

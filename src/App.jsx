import { CreateTastk } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

function App() {
  return (
    <div>
      <Header />
      <CreateTastk/>
      <Task/>
    </div>
  );
}

export default App;

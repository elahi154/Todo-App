import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Header />
      <main className="pt-20"> {/* Padding to prevent overlap with fixed header */}
        <Todo />
      </main>
    </div>
  );
}

export default App;

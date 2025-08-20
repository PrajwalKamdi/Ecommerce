import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white fixed h-full">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 ml-64">
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

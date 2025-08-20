import { DollarSign, ShoppingBag, Users, Package } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 ">
      {/* Dashboard Heading */}
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h2 className="text-2xl font-bold">₹1,25,000</h2>
          </div>
          {/* <DollarSign className="text-green-600 w-10 h-10" /> */}
        </div>

        {/* Orders */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Orders</p>
            <h2 className="text-2xl font-bold">450</h2>
          </div>
          <ShoppingBag className="text-blue-600 w-10 h-10" />
        </div>

        {/* Products */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Products</p>
            <h2 className="text-2xl font-bold">320</h2>
          </div>
          <Package className="text-purple-600 w-10 h-10" />
        </div>

        {/* Users */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Users</p>
            <h2 className="text-2xl font-bold">1,200</h2>
          </div>
          <Users className="text-orange-600 w-10 h-10" />
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Dashboard;

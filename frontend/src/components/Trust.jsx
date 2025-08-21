import { Box, IndianRupee, RotateCcw, Shield, Truck } from 'lucide-react';
import React from 'react';

const trustItems = [
  {
    icon: <Truck color="white" size={28} />,
    bgIcon: 'bg-blue-600',
    bgCard: 'bg-blue-100',
    title: 'Free Delivery',
    desc: (
      <span className="flex items-center gap-1">
        On orders above <IndianRupee size={15} />499
      </span>
    ),
  },
  {
    icon: <RotateCcw color="white" size={28} />,
    bgIcon: 'bg-green-600',
    bgCard: 'bg-green-100',
    title: 'Easy Return',
    desc: '7-day return policy',
  },
  {
    icon: <Shield color="white" size={28} />,
    bgIcon: 'bg-purple-600',
    bgCard: 'bg-purple-100',
    title: 'Secure Payment',
    desc: '100% secure checkout',
  },
  {
    icon: <Box color="white" size={28} />,
    bgIcon: 'bg-orange-600',
    bgCard: 'bg-orange-100',
    title: 'Quality Assured',
    desc: 'Premium products',
  },
];

const Trust = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:flex-row items-center gap-4 p-6 ${item.bgCard} rounded-xl shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            <div className={`${item.bgIcon} p-3 rounded-full shadow-md flex items-center justify-center`}>
              {item.icon}
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-lg mb-1 text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;

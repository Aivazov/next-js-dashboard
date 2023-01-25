import React from 'react';
import { persons } from '../api/fakeAPI';
import { FaShoppingBag } from 'react-icons/fa';

export default function RecentOrders() {
  return (
    <div className="w-full relative col-span-1 lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll">
      <h1>RecentOrders</h1>
      <ul>
        {persons.map((order, id) => (
          <li
            key={id}
            className="cursor-pointer bg-gray-50 hover:bg-gray-100 my-2 p-3 rounded-lg flex items-center"
          >
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div>
              <p>${order.total}</p>
              <p>{order.name.first}</p>
            </div>
            <p>{order.date}</p>
          </li>
        ))}
      </ul>
      {/* <FaShoppingBag /> */}
    </div>
  );
}

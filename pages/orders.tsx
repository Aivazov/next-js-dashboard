import React from 'react';
import Header from '../components/Header';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { persons } from '../pages/api/fakeAPI';

export default function orders() {
  const headerTitle = 'Orders';
  return (
    <div className="bg-gray-200 min-h-screen">
      <div>
        <Header title={headerTitle} />
      </div>
      <div className="p-4">
        <div className="p-4 bg-white rounded-lg w-full overflow-y-auto m-auto border">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden md:grid">Pay Method</span>
          </div>
          <ul>
            {persons.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">${order.total}</p>
                    <p className="text-gray-700 text-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:pl-16 md:pl-0 sm:text-left text-right max-sm:text-sm">
                  <span
                    className={
                      order.status === 'Processing'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : order.status === 'Completed'
                        ? 'bg-blue-200 p-2 rounded-lg'
                        : 'bg-yellow-200 p-2 rounded-lg'
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="hidden md:flex items-center justify-between">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

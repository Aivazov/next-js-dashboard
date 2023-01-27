import React from 'react';
import Header from '../components/Header';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { persons } from '../api/fakeAPI';

export default function customers() {
  const headerTitle = 'Customers';
  return (
    <div className="bg-gray-200 min-h-screen">
      <div>
        <Header title={headerTitle} />
      </div>
      <div className="p-4">
        <div className="bg-white w-full m-auto p-4 border rounded-lg overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Date</span>
            <span className="hidden sm:grid">Pay Method</span>
          </div>
          <ul>
            {persons.map((person, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="px-4">
                    {person.name.first} {person.name.last}
                  </p>
                </div>
                <p className="text-gray-500 sm:text-left text-right">
                  {person.status}
                </p>
                <p className="hidden md:flex">{person.date}</p>
                <div className="sm:flex items-center justify-between hidden">
                  <p>{person.method}</p>
                  <BsThreeDotsVertical className="bg-gray-50 hover:bg-gray-200 rounded-lg" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

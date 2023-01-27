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
            <span className="hidden md:grid">Pay Method</span>
          </div>
        </div>
      </div>
    </div>
  );
}

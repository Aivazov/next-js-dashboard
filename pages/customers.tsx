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
        <div className="bg-white f-full m-auto p-4 border rounded-lg overflow-y-auto">
          <div>
            <span>Name</span>
            <span>Status</span>
            <span>Date</span>
            <span>Pay Method</span>
          </div>
        </div>
      </div>
    </div>
  );
}

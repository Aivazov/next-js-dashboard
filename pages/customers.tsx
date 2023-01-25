import React from 'react';
import Header from '../components/Header';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { persons } from '../api/fakeAPI';

export default function customers() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div>
        <Header />
      </div>
      <div className="p-4">
        <div className="bg-white f-full m-auto p-4 border rounded-lg overflow-y-auto"></div>
      </div>
    </div>
  );
}

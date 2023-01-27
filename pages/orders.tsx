import React from 'react';
import Header from '../components/Header';
import { persons } from '../api/fakeAPI';

export default function orders() {
  const headerTitle = 'Orders';
  return (
    <div className="bg-gray-200 min-h-screen">
      <div>
        <Header title={headerTitle} />
      </div>
      <div className="p-4">
        <div className="flex justify-between p-4 bg-white rounded-lg"></div>
      </div>
    </div>
  );
}

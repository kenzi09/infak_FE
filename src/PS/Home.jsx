// eslint-disable-next-line no-unused-vars
import React from 'react';
import './index.css';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-medium text-gray-700">Total Yang Terkumpul</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-4">Rp 10,000,000</p>
          <div className="mt-4">
            <p className="text-gray-500">Total amount donated over the past year.</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-medium text-gray-700">Recent Donations</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between text-gray-600">
              <span>John donated</span>
              <span>Rp 1,000,000</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Jane donated</span>
              <span>Rp 500,000</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Michael donated</span>
              <span>Rp 750,000</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <h2 className="text-xl font-medium text-gray-700">Upcoming Events</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-gray-600">
              <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-indigo-200" />
              Charity Walk - 5th Sep
            </div>
            <div className="flex items-center text-gray-600">
              <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-indigo-200" />
              Fundraising Gala - 20th Sep
            </div>
            <div className="flex items-center text-gray-600">
              <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-indigo-200" />
              Community Service - 15th Oct
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

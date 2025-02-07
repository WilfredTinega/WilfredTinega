import React from 'react';

function Blogs() {
  return (
    <div className="blog-page flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Blogs <span className="text-blue-600">Coming Soon...</span>
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        We're working hard to bring you amazing content! Stay tuned for updates.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
        Subscribe for Updates
      </button>
    </div>
  );
}

export default Blogs;

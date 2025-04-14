'use client'; 

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
      <div className="w-16 h-16 border-8 border-t-8 border-blue-500 border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-xl font-semibold text-blue-500">Loading...</p>
    </div>
  );
};

export default Loading;

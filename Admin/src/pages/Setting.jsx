import React from 'react'

const Setting = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h2 className="mb-6 text-2xl font-semibold">Settings</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Setting

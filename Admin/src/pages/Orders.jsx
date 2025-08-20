import React from 'react'

const Orders = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="No Orders"
        style={{ width: '120px', marginBottom: '20px', opacity: 0.7 }}
      />
      <h2>No Orders Yet</h2>
      <p>Your orders will appear here once you make a purchase.</p>
    </div>
  )
}

export default Orders

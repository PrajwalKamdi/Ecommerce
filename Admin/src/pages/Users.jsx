import React from 'react'

const Users = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Users List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Amit Sharma</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>amit.sharma@example.com</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Admin</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Priya Singh</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>priya.singh@example.com</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>User</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Rahul Verma</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>rahul.verma@example.com</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>User</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Users

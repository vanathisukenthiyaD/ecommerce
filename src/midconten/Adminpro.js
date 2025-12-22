import { useState } from "react";
const AdminProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Gold", product: "Ring", price: 2500 },
    { id: 2, title: "Diamond", product: "Necklace", price: 5000 }
  ]);

  return (
    <div className="admin-content">

      {/* 🔹 TOP ADD BUTTON */}
      <div className="top-bar">
        <button className="add-btn">+ Add Item</button>
      </div>

      {/* 🔹 TABLE */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.product}</td>
              <td>₹{item.price}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔹 SUBMIT BUTTON */}
      <div className="bottom-bar">
        <button className="submit-btn">Submit</button>
      </div>

    </div>
  );
};

export default AdminProducts;
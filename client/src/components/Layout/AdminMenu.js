import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div class="list-group">
          <h4>Admin Panel</h4>
          <NavLink to="/dashboard/admin/create-category" class="list-group-item list-group-item-action">
            Create a Catagory
          </NavLink>
          <NavLink to="/dashboard/admin/Products" class="list-group-item list-group-item-action">
            Products
          </NavLink>
          <NavLink to="/dashboard/admin/orders" class="list-group-item list-group-item-action">
            Orders
          </NavLink>
          <NavLink to="/dashboard/admin/create-product" class="list-group-item list-group-item-action">
            Create a Product
          </NavLink>
          <NavLink to="/dashboard/admin/users" class="list-group-item list-group-item-action">
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;

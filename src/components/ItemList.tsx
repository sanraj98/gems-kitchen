import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../styles/itemlist.css";

import { getMenus } from "../services/GemsKitchenService";
import type { Menu } from "../types/menus";

export default function ItemList() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMenus = async () => {
    try {
      setLoading(true);

      const response = await getMenus();

      setMenus(response.data);
    } catch (error) {
      console.error("Failed to load menus", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMenus();
  }, []);

  return (
    <div className="my-items-card">
      <div className="items-header">
        <div>
          <h3>My Items</h3>
          <p>Recently added recipes</p>
        </div>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="items-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          menus.map((menu) => (
            <div className="food-card" key={menu.id}>
              <img
                src={`http://localhost:8080/api/menu/image/${menu.id}`}
                alt={menu.itemName}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/no-image.png";
                }}
              />

              <div className="food-info">
                <h5>{menu.itemName}</h5>
                <span>{menu.mealType}</span>
                <small>₹{menu.price}</small>
              </div>

              <button className="edit-btn">
                <FaPen />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
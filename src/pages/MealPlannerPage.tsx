import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMenusByMealType } from "../services/GemsKitchenService";
import type { Menu } from "../types/menus";
import "../styles/mealplannerpage.css";
import { createPlanner } from "../services/GemsKitchenService";


export default function MealPlannerPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { mealDate, mealType } = location.state as {
    mealDate: string;
    mealType: string;
  };

  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMenus, setSelectedMenus] = useState<number[]>([]);

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = async () => {
    try {
      setLoading(true);

      const response = await getMenusByMealType(mealType);
        console.log("Menus fetched:", response.data);
      setMenus(response.data);
    } catch (error) {
      console.error("Failed to load menus", error);
      alert("Failed to load menus");
    } finally {
      setLoading(false);
    }
  };
const toggleMenu = (menuId: number) => {
  setSelectedMenus((prev) =>
    prev.includes(menuId)
      ? prev.filter((id) => id !== menuId)
      : [...prev, menuId]
  );
};
const handleSave = async () => {

    if (selectedMenus.length === 0) {
        alert("Please select at least one menu");
        return;
    }

    try {

        const request = {

            plannedDate: mealDate,

            mealType,

            menuIds: selectedMenus

        };

        await createPlanner(request);

        alert("Meal plan saved successfully");

        navigate("/");

    } catch (error) {

        console.error(error);

        alert("Failed to save meal plan");

    }

};
  return (
    <div className="planner-page container py-4">

      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h2>Meal Planner</h2>

      <div className="planner-info mb-4">
        <p>
          <strong>Date :</strong> {mealDate}
        </p>

        <p>
          <strong>Meal Type :</strong> {mealType}
        </p>
      </div>

      {loading ? (
        <h5>Loading...</h5>
      ) : (
        <div className="row">
          {menus.map((menu) => (
            <div className="col-md-3 mb-4" key={menu.id}>
              <div
  className={`planner-menu-card ${
    selectedMenus.includes(menu.id) ? "selected" : ""
  }`}
  onClick={() => toggleMenu(menu.id)}
>
  {selectedMenus.includes(menu.id) && (
  <div className="selected-badge">✓</div>
)}

                <img
                  src={`http://localhost:8080/api/menu/image/${menu.id}`}
                  alt={menu.itemName}
                  className="img-fluid"
                />

                <h5 className="mt-3">{menu.itemName}</h5>

                <p>{menu.mealType}</p>

                <h6>₹{menu.price}</h6>

              </div>
            </div>
          ))}
        </div>
      )}
      {!loading && menus.length > 0 && (
  <div className="text-center mt-4">
    <button
    className="btn btn-success px-5"
    disabled={selectedMenus.length === 0}
    onClick={handleSave}
>
    Save Meal Plan
</button>
  </div>
)}
    </div>
  );
}
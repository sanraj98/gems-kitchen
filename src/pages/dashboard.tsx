import AddItemForm from "../components/AddItemForm";
import ItemsList from "../components/ItemList";
import MealPlanList from "../components/MealPlanList";
import MealPlanner from "../components/MealPlanner";
import "../styles/dashboard.css";
import { useState } from "react";
export default function Dashboard() {
  const [, setMenuRefresh] = useState(0);
  return (
    <>

      <div className="dashboard-container">

        {/* Breadcrumb */}
        <div className="breadcrumb-box">
          🏠 Home &nbsp; &gt; &nbsp; Meal Planner
        </div>

        {/* Top Row */}
        <div className="row g-4 mt-2">

          <div className="col-lg-5">
            <AddItemForm onSuccess={() => setMenuRefresh(prev => prev + 1)}/>
            {/* <div className="dashboard-card">
              <h2>Add New Item</h2>
            </div> */}
          </div>

          <div className="col-lg-7">
            <MealPlanner/>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="row g-4 mt-1">

          <div className="col-lg-5">
            <ItemsList/>
          </div>

          <div className="col-lg-7">
            <MealPlanList/>
          </div>

        </div>

      </div>
    </>
  );
}

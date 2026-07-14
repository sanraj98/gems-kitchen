import '../styles/mealplanner.css'
import 'animate.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function MealPlanner() {
  const [mealDate, setMealDate] = useState("");
const [mealType, setMealType] = useState("BREAKFAST");
const navigate = useNavigate();
  return (
    <div className="plan-card animate__animated animate__zoomIn">

      <h2 className="mb-4">Plan Your Meals</h2>

      <div className="row g-3 align-items-center">

        <div className="col-md-4">
          <input
              type="date"
              className="form-control"
              value={mealDate}
              onChange={(e) => setMealDate(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
        >
            <option value="BREAKFAST">Breakfast</option>
            <option value="LUNCH">Lunch</option>
            <option value="SNACKS">Snacks</option>
            <option value="DINNER">Dinner</option>
        </select>
        </div>

        <div className="col-md-2">
          <button
            className="btn go-btn w-100"
            onClick={() => {
              if (!mealDate) {
                alert("Please select a date");
                return;
              }

              navigate("/planner/select", {
                state: {
                  mealDate,
                  mealType,
                },
              });
            }}
          >
            Go
          </button>
        </div>

      </div>

      <div className="mt-4">
        <p className="text-muted mb-2">
          Suggested meal types
        </p>

        <div className="d-flex gap-3 flex-wrap">

          <button className="meal-chip">
            Breakfast
          </button>

          <button className="meal-chip">
            Lunch
          </button>

          <button className="meal-chip">
            Snack
          </button>

          <button className="meal-chip">
            Dinner
          </button>

        </div>
      </div>

    </div>
  );
}
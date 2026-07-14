import "../styles/mealplanlist.css";

export default function MealPlanList() {
  return (
    <div className="meal-plan-card">

      <div className="meal-plan-header">
        <div>
          <h3>Today's Meal Plan</h3>
          <p>June 13, 2026</p>
        </div>

        <span className="plan-badge">
          3 Meals
        </span>
      </div>

      <div className="meal-list">

        <div className="meal-item">
          <div className="meal-time breakfast">
            Breakfast
          </div>

          <div className="meal-details">
            <h5>Healthy Salad</h5>
            <span>8:00 AM</span>
          </div>
        </div>

        <div className="meal-item">
          <div className="meal-time lunch">
            Lunch
          </div>

          <div className="meal-details">
            <h5>Chicken Biryani</h5>
            <span>1:00 PM</span>
          </div>
        </div>

        <div className="meal-item">
          <div className="meal-time dinner">
            Dinner
          </div>

          <div className="meal-details">
            <h5>Cheese Burger</h5>
            <span>8:00 PM</span>
          </div>
        </div>

      </div>

    </div>
  );
}
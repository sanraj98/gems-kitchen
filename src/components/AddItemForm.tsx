import { useState } from "react";
import "../styles/additemform.css"
import 'animate.css';
import { createMenu } from "../services/GemsKitchenService";
interface AddItemFormProps {
  onSuccess: () => void;
}
export default function AddItemForm({ onSuccess }: AddItemFormProps) {
  const [itemName, setItemName] = useState("");
  const [mealType, setMealType] = useState("BREAKFAST");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const handleSubmit = async () => {
    if (!itemName.trim()) {
    alert("Please enter item name");
          return;
      }

    if (!price || Number(price) <= 0) {
        alert("Please enter a valid price");
        return;
    }

    if (!image) {
        alert("Please select an image");
        return;
    }

    try {

        setSaving(true);

       const formData = new FormData();

      const menu = {
          itemName,
          mealType,
          price: Number(price)
      };

      formData.append("menu", JSON.stringify(menu));

      if (image) {
          formData.append("image", image);
      }

        await createMenu(formData);

        alert("Menu added successfully");

        setItemName("");
        setMealType("BREAKFAST");
        setPrice("");
        setImage(null);

        onSuccess();

    } catch (error) {

        console.error(error);

        alert("Failed to save menu");

    } finally {

        setSaving(false);

    }

};
  return (
    <div className="add-item-card animate__animated animate__bounceInLeft">

      <div className="card-header-orange">
        <h2>Add New Item</h2>
      </div>

      <div className="card-body p-4">

        <div className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Item Name</label>
            <input
              type="text" 
              className="form-control"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Category</label>

            <select className="form-select"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            >
              <option value="BREAKFAST">Breakfast</option>
              <option value="LUNCH">Lunch</option>
              <option value="SNACKS">Snacks</option>
              <option value="DINNER">Dinner</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Price</label>

            <input
              type="number"
              className="form-control"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Image</label>

            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => {
                  if (e.target.files?.length) {
                      setImage(e.target.files[0]);
                  }
              }}
             />
          </div>

        </div>

       <button
            className="btn add-btn mt-4"
            onClick={handleSubmit}
            disabled={saving}
        >
            {saving ? "Saving..." : "+ Add Item"}
        </button>

      </div>

    </div>
  );
}
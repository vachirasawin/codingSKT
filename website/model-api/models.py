# Import Library
import pandas as pd
import pickle
from fastapi import FastAPI, Query

# Load Models from Pickle
with open("./model-pkl/models.pkl", "rb") as f:
    modelArray = pickle.load(f)

# Models to API
app = FastAPI()
@app.post("/api/models/")
def predict(data: dict, model_index: int = Query(0, ge = 0, le = 4)):
    df = pd.DataFrame([data["features"]])
    model = modelArray[model_index]
    y_pred = model.predict(df)
    return {"prediction": float(y_pred[0])}
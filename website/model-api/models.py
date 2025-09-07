# Import Library
import pandas as pd
from pydantic import BaseModel
import pickle
from fastapi import FastAPI, Query

# Load Models from Pickle
with open("./model-pkl/models.pkl", "rb") as f:
    modelArray = pickle.load(f)

# Pydantic model
class Features(BaseModel):
    features: list
    
app = FastAPI()

# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to codingSKT API! Use /docs to test the models."}

# Models to API
@app.post("/api/models/")
def predict(data: Features, model_index: int = Query(0, ge = 0, le = 3)):
    df = pd.DataFrame([data.features])
    model = modelArray[model_index]
    y_pred = model.predict(df)
    return {"prediction": float(y_pred[0])}
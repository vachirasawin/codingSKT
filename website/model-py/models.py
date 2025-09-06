# Import Library
import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import Ridge

# Data preprocessing & Data cleansing & Handling Missing 
data = pd.read_csv(".\\dataset.csv")
data = data.drop(columns = ["gen", "code"])
data = data.drop(0)
data = data.replace("-", pd.NA)
data.infer_objects(copy = False)
data.fillna(0, inplace = True)
for col in data.columns:
    data[col] = pd.to_numeric(data[col], errors = "coerce")

# Define Feature & Label
X1 = ["thai_1", "english_basic_1", "english_add_1", "math_basic_1", "math_add_1", "science_1", "physics_1", "chemistry_1", "biology_1", "computer_1", "robot_1", "project_1", "social1_1", "social2_1", "health_1", "pe_1", "art_1", "career_1", "credits_studied_1", "credits_earned_1", "gpa_1"]
X2 = ["thai_2", "english_basic_2", "english_add_2", "math_basic_2", "math_add_2", "science_2", "physics_2", "chemistry_2", "biology_2", "computer_2", "robot_2", "project_2", "social1_2", "social2_2", "health_2", "pe_2", "art_2", "career_2", "credits_studied_2", "credits_earned_2", "gpa_2"]
X3 = ["thai_3", "english_basic_3", "english_add_3", "math_basic_3", "math_add_3", "science_3", "physics_3", "chemistry_3", "biology_3", "computer_3", "robot_3", "project_3", "social1_3", "social2_3", "health_3", "pe_3", "art_3", "career_3", "credits_studied_3", "credits_earned_3", "gpa_3"]
X4 = ["thai_4", "english_basic_4", "english_add_4", "math_basic_4", "math_add_4", "science_4", "physics_4", "chemistry_4", "biology_4", "computer_4", "robot_4", "project_4", "social1_4", "social2_4", "health_4", "pe_4", "art_4", "career_4", "credits_studied_4", "credits_earned_4", "gpa_4"]
X5 = ["thai_5", "english_basic_5", "english_add_5", "math_basic_5", "math_add_5", "science_5", "physics_5", "chemistry_5", "biology_5", "computer_5", "robot_5", "project_5", "social1_5", "social2_5", "health_5", "pe_5", "art_5", "career_5", "credits_studied_5", "credits_earned_5", "gpa_5"]
X2 += X1
X3 += X2
X4 += X3
X5 += X4
X_array = [X5, X5, X5, X5]
y_array = ["gpa_6", "gpa_6", "gpa_6", "gpa_6"]

# Train-Test Split
random_state_split_array = [42, 42, 42, 45]
X_train_array = []
X_test_array = []
y_train_array = []
y_test_array = []
for i in range(len(X_array)):
    X_train, X_test, y_train, y_test = train_test_split(data[X_array[i]], data[y_array[i]], test_size = 0.2, random_state = random_state_split_array[i])
    X_train = X_train.apply(pd.to_numeric, errors = "coerce").fillna(0)
    X_test = X_test.apply(pd.to_numeric, errors = "coerce").fillna(0)
    y_train = y_train.apply(pd.to_numeric, errors = "coerce").fillna(0)
    y_test = y_test.apply(pd.to_numeric, errors = "coerce").fillna(0)
    X_train_array.append(X_train)
    X_test_array.append(X_test)
    y_train_array.append(y_train)
    y_test_array.append(y_test)

# Model Training
modelDecisionTreeRegression = DecisionTreeRegressor(random_state = 44, max_depth = 5)
modelDecisionTreeRegression.fit(X_train_array[0], y_train_array[0])
modelLinearRegression = LinearRegression()
modelLinearRegression.fit(X_train_array[1], y_train_array[1])
modelPolynomialRegression = make_pipeline(PolynomialFeatures(degree = 2), LinearRegression())
modelPolynomialRegression.fit(X_train_array[2], y_train_array[2])
modelRegularizedLinearRegression_Ridge = Ridge(alpha = 1, random_state = 42)
modelRegularizedLinearRegression_Ridge.fit(X_train_array[3], y_train_array[3])
modelArray = [modelDecisionTreeRegression, modelLinearRegression, modelPolynomialRegression, modelRegularizedLinearRegression_Ridge]

# Model Prediction
y_preds = []
for i in range(len(modelArray)):
    y_pred = modelArray[i].predict(X_test_array[i])
    y_preds.append(y_pred)

# Python to Pickle
with open("../model-api/model-pkl/models.pkl", "wb") as f:
    pickle.dump(modelArray, f)
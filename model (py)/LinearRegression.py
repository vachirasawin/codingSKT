# Linear Regression

# Import Library
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Data preprocessing & Data cleansing & Handling Missing Values
data = pd.read_csv("C:\\Users\\DELL\\Desktop\\codingSKT\\dataset.csv")
data = data.drop(columns = ["gen", "code", "robot_5", "project_2", "project_3", "project_4", "project_5", "project_6", "career_5", "career_6"])
data = data.drop(0)
data = data.replace("-", pd.NA)
data.fillna(0, inplace = True)
for col in data.columns:
    data[col] = pd.to_numeric(data[col], errors = "coerce")

# Define Feature & Label
X1 = ["thai_1", "english_basic_1", "english_add_1", "math_basic_1", "math_add_1", "science_1", "physics_1", "chemistry_1", "biology_1", "computer_1", "robot_1", "project_1", "social1_1", "social2_1", "health_1", "pe_1", "art_1", "career_1", "credits_studied_1", "credits_earned_1"]
X2 = ["thai_2", "english_basic_2", "english_add_2", "math_basic_2", "math_add_2", "science_2", "physics_2", "chemistry_2", "biology_2", "computer_2", "robot_2", "social1_2", "social2_2", "health_2", "pe_2", "art_2", "career_2", "credits_studied_2", "credits_earned_2", "gpa_1"]
X3 = ["thai_3", "english_basic_3", "english_add_3", "math_basic_3", "math_add_3", "science_3", "physics_3", "chemistry_3", "biology_3", "computer_3", "robot_3", "social1_3", "social2_3", "health_3", "pe_3", "art_3", "career_3", "credits_studied_3", "credits_earned_3", "gpa_1", "gpa_2"]
X4 = ["thai_4", "english_basic_4", "english_add_4", "math_basic_4", "math_add_4", "science_4", "physics_4", "chemistry_4", "biology_4", "computer_4", "robot_4", "social1_4", "social2_4", "health_4", "pe_4", "art_4", "career_4", "credits_studied_4", "credits_earned_4", "gpa_1", "gpa_2", "gpa_3"]
X5 = ["thai_5", "english_basic_5", "english_add_5", "math_basic_5", "math_add_5", "science_5", "physics_5", "chemistry_5", "biology_5", "computer_5", "social1_5", "social2_5", "health_5", "pe_5", "art_5", "credits_studied_5", "credits_earned_5", "gpa_1", "gpa_2", "gpa_3", "gpa_4"]
y1 = "gpa_2"
y2 = "gpa_3"
y3 = "gpa_4"
y4 = "gpa_5"
y5 = "gpa_6"
X_array = [X1, X2, X3, X4, X5]
y_array = [y1, y2, y3, y4, y5]

# Train-Test Split
random_state_array = [44, 45, 41, 42, 42]
X_train_array = []
X_test_array = []
y_train_array = []
y_test_array = []
for i in range(len(X_array)):
    X_train, X_test, y_train, y_test = train_test_split(data[X_array[i]], data[y_array[i]], test_size = 0.2, random_state = random_state_array[i])
    X_train = X_train.apply(pd.to_numeric, errors = "coerce").fillna(0)
    X_test = X_test.apply(pd.to_numeric, errors = "coerce").fillna(0)
    y_train = y_train.apply(pd.to_numeric, errors = "coerce").fillna(0)
    y_test = y_test.apply(pd.to_numeric, errors = "coerce").fillna(0)
    X_train_array.append(X_train)
    X_test_array.append(X_test)
    y_train_array.append(y_train)
    y_test_array.append(y_test)

# Model Training
modelArray = []
for i in range(len(X_array)):
    model = LinearRegression()
    model.fit(X_train_array[i], y_train_array[i])

    modelArray.append(model)
# codingSKT

# Machine Learning | Supervised Learning | Regression
- Linear Regression
- Polynomial Regression
- Regularized Linear Regression (Ridge)
- Decision Tree Regression

# Input from User to API
    const inputs = [
        ["subject1", credit1, subject1_1, subject1_2, subject1_3, subject1_4, subject1_5],
        ["subject2", credit2, subject2_1, subject2_2, subject2_3, subject2_4, subject2_5],
        ["subject3", credit3, subject3_1, subject3_2, subject3_3, subject3_4, subject3_5]
    ]

# Process of Converting Input to Array in API
- Define list

    let credits_studied = [[], [], [], [], []]
    let credits_earned = [[], [], [], [], []]
    let gpa = [[], [], [], [], []]
    let api = []

- Fill credit in credits_studied[] & credits_earned[]

    for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < credits_studied.length; j++) {
            credits_studied[j].push(inputs[i][1]);
            credits_earned[j].push(inputs[i][1]);
        }
    }

- Fill gpa in gpa[]

    for i in range(len(inputs)):
        for j in range(len(gpa)):
            gpa[j].append(inputs[i][j + 2])

- Transform credit to credit earned in credits_earned[]

    for i in range(len(credits_earned)):
        for j in range(len(credits_earned[i])):
            credits_earned[i][j] = credits_earned[i][j] * (1 if gpa[i][j] > 0 else 0)

- Sum credits_studied[] & credits_earned[]

    for i in range(len(credits_studied)):
        credits_studied[i] = sum(credits_studied[i])
        credits_earned[i] = sum(credits_earned[i])

- Fill gpa[] & credits_studied[] & credits_earned[] in api[]

    for i in range(len(gpa)):
        api.append(gpa[i] + [credits_studied[i], credits_earned[i]])
            
# Data set (Features: 2D | Labels: 1D)
## GPA 1
    Features = ["Thai_1", "English_basic_1", "English_add_1", ..., "credits_studied_1", credit_earned_1"]
    Labels = "gpa_2"
## GPA 2
    Features = ["Thai_2", "English_basic_2", "English_add_2", ..., "credits_studied_2", credit_earned_2", "gpa_2"]
    Labels = "gpa_3"
## GPA 3
    Features = ["Thai_3", "English_basic_3", "English_add_3", ..., "credits_studied_3", credit_earned_3", "gpa_3"]
    Labels = "gpa_4"
## GPA 4
    Features = ["Thai_4", "English_basic_4", "English_add_4", ..., "credits_studied_4", credit_earned_4", "gpa_4"]
    Labels = "gpa_5"
## GPA 5
    Features = ["Thai_5", "English_basic_5", "English_add_5", ..., "credits_studied_5", credit_earned_5", "gpa_5"]
    Labels = "gpa_6"

# Library / Function
- pandas: Library สำหรับอ่านข้อมูลจากตาราง (.csv)
- matplotlib: Library สำหรับสร้างกราฟเพื่อดูว่ารูปแบบการทำงานของโมเดลตรงกับข้อมูลจริงไหม
- train_test_split: Function ของ scikit-learn ที่แบ่งข้อมูลเป็ฯ Training set & Testing set
- mean_squared_error (MSE): Library สำหรับแสดงความคลาดเคลื่อนของผลลัพธ์จากโมเดลและข้อมูลจริง
- r2_score: Library สำหรับแสดงความแม่นยำของผลลัพธ์จากโมเดลและข้อมูลจริง
- LinearRegression: Function ของ scikit-learn ที่ใช้สร้างโมเดล Linear Regression
- PolynomialFeatures: Function ของ scikit-learn ที่แปลง Features ให้มีพจน์ยกกำลัง
- make_pipeline: Function ของ scikit-learn
- Ridge: Function ของ scikit-learn
- DecisionTreeRegressor: Function ของ scikit-learn ที่ใช้สร้างโมเดล Decision Tree Regression

# Linear Regression | การถดถอยเชิงเส้น
- 
- Highlights (+): เหมาะกับการพยากรณ์เบื้องต้นข้อมูลเป็นลักษณะกราฟเส้นตรง
- Weakness (-): อาจพยากรณ์ผลคลาดเคลื่อนถ้าข้อมูลไม่เป็นลักษณะกราฟเส้นตรง
![Linear Regression Graph](modelGraph/LinearRegression.png)

# Polynomial Regression | การถดถอยเชิงพหุคณิต
- 
- Highlights (+): เหมาะกับการพยากรณ์ที่ข้อมูลเป็นลักษณะกราฟเพิ่ม/ลด
- Weakness (-): ถ้าเลือกเลขชี้กำลัง (degree) ของ features สูงไปทำให้เรียนรู้มากเกินไป แต่ถ้าน้อยไปทำให้เรียนรู้น้อยเกินไป
![Polynomial Regression](modelGraph/PolynomialRegression.png)

# Regularized Linear Regression (Ridge) | การถดถอยเชิงเส้นแบบมีการปรับค่าลงโทษ
- 
- Highlights (+): ลดความซับซ้อนของโมเดล ทำงานได้ดีกว่า Linear Regression ถ้า features บางตัวคล้ายกัน
- Weakness (-): ถ้าข้อมูลไม่ซับซ้อนก็ไม่ต่างจาก Linear Regression
![Regularized Linear Regression (Ridge)](modelGraph/RegularizedLinearRegression_Ridge.png)

# Decision Tree Regression | การถดถอยแบบต้นไม้ตัดสินใจ
- 
- Highlights (+): จับความสัมพันธ์ซับซ้อนและไม่เชิงเส้นได้ดี
- Weakness (-): ไม่เสถียร ไม่เหมาะกับข้อมูลต่อเนื่อง
![Decision Tree Regression](modelGraph/DecisionTreeRegression.png)

# Source
- https://pandas.pydata.org/
- https://matplotlib.org/
- https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html
- https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_squared_error.html
- https://scikit-learn.org/stable/modules/generated/sklearn.metrics.r2_score.html
- https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html
- https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html
- https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.make_pipeline.html
- https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html
- https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html
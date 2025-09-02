## Machine Learning | Supervised Learning | Regression
- Linear Regression
- Polynomial Regression
- Regularized Linear Regression
- Decision Tree Regression

## Data set (Features: 2D | Labels: 1D)
# GPA 1
	Features = ["Thai_1", "English_basic_1", "English_add_1", ..., "credits_studied_1", credit_earned_1"]
    Labels = "gpa_1"
# GPA 2
	Features = ["Thai_2", "English_basic_2", "English_add_2", ..., "credits_studied_2", credit_earned_2"]
    Labels = "gpa_2"
# GPA 3
	Features = ["Thai_3", "English_basic_3", "English_add_3", ..., "credits_studied_3", credit_earned_3"]
    Labels = "gpa_3"
# GPA 4
	Features = ["Thai_4", "English_basic_4", "English_add_4", ..., "credits_studied_4", credit_earned_4"]
    Labels = "gpa_4"
# GPA 5
	Features = ["Thai_5", "English_basic_5", "English_add_5", ..., "credits_studied_5", credit_earned_5"]
    Labels = "gpa_5"
# GPA 6
	Features = ["Thai_6", "English_basic_6", "English_add_6", ..., "credits_studied_6", credit_earned_6"]
    Labels = "gpa_6"
	

## Library / Function
- pandas: Library สำหรับอ่านข้อมูลจากตาราง (.csv)
- pyplot: Library สำหรับสร้างกราฟเพื่อดูว่ารูปแบบการทำงานของโมเดลตรงกับข้อมูลจริงไหม
- train_test_split: Function ของ scikit-learn ที่แบ่งข้อมูลเป็ฯ Training set & Testing set
- mean_squared_error (MSE): Library สำหรับแสดงความคลาดเคลื่อนของผลลัพธ์จากโมเดลและข้อมูลจริง
- r2_score: Library สำหรับแสดงความแม่นยำของผลลัพธ์จากโมเดลและข้อมูลจริง
- LinearRegression: Function ของ scikit-learn ที่ใช้สร้างโมเดล Linear Regression
- PolynomialFeatures: Function ของ scikit-learn ที่แปลง Features ให้มีพจน์ยกกำลัง
- make_pipeline: Function ของ scikit-learn
- Ridge: Function ของ scikit-learn
- DecisionTreeRegressor: Function ของ scikit-learn ที่ใช้สร้างโมเดล Decision Tree Regression

## Linear Regression
- 
- 
- 
# GPA 1
	R²: 0.9989295978030881
	MSE: 0.000272773535445111
# GPA 2
	R²: 0.9936121276813261
	MSE: 0.0016293721589730307
# GPA 3
	R²: 0.9928781596347651
	MSE: 0.018252351016849418
# GPA 4
	R²: 0.9999251845403541
	MSE: 0.00023159394869065375
# GPA 5
	R²: 0.9999940533497274
	MSE: 1.2423860682624368e-05
# GPA 6
	R²: 0.9999940168699875
	MSE: 1.2290514260300633e-05

## Polynomial Regression
- 
- 
- 
# GPA 1
	R²: 0.9975293479626919
	MSE: 0.00046826020997897693
# GPA 2
	R²: 0.9940005188628118
	MSE: 0.0015303041522357248
# GPA 3
	R²: 0.9930737441758088
	MSE: 0.020842108082085756
# GPA 4
	R²: 0.9995411567206014
	MSE: 0.0012900574955793081
# GPA 5
	R²: 0.999985462461866
	MSE: 3.375637797570558e-05
# GPA 6
	R²: 0.9999950611126266
	MSE: 1.0852280196504517e-05

## Regularized Linear Regression
- 
- 
- 
# GPA 1
	R²: 0.9990251955155467
	MSE: 0.00024841210748556905
# GPA 2
	R²: 0.9963509058898095
	MSE: 0.0009307844696951081
# GPA 3
	R²: 0.9987690073023219
	MSE: 0.0031548742550982544
# GPA 4
	R²: 0.9999065439619752
	MSE: 0.00028929653012319125
# GPA 5
	R²: 0.999982269128283
	MSE: 3.704369180861497e-05
# GPA 6
	R²: 0.9999599913173479
	MSE: 8.218562585831716e-05

## Decision Tree Regression
- 
- 
- 
# GPA 1
	R²: 0.8962405774783978
	MSE: 0.026441298979591833
# GPA 2
	R²: 0.8273859084398976
	MSE: 0.0492096451388889
# GPA 3
	R²: 0.997211763363569
	MSE: 0.00839020833333332
# GPA 4
	R²: 0.9910701532446973
	MSE: 0.027642662105522714
# GPA 5
	R²: 0.9912135092547921
	MSE: 0.020402361111111073
# GPA 6
	R²: 0.9941098507711295
	MSE: 0.012942500000000006

![Linear Regression Graph](modelGraph/Linear-Regression.png)
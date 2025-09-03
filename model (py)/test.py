inputs = [
    ["thai", 1, 1.5, 3, 1.5, 1.5, 2.5],
    ["english_basic", 2, 1.5, 2, 2, 3.5, 3],
    ["english_add", 1, 0, 2.5, 3, 3, 3.5]
]

credits_studied = [[], [], [], [], []]
credits_earned = [[], [], [], [], []]
gpa = [[], [], [], [], []]
api = []

for i in range(len(inputs)):
    for j in range(len(credits_studied)):
        credits_studied[j].append(inputs[i][1])
        credits_earned[j].append(inputs[i][1])

for i in range(len(inputs)):
    for j in range(len(gpa)):
        gpa[j].append(inputs[i][j + 2])

for i in range(len(credits_earned)):
    for j in range(len(credits_earned[i])):
        credits_earned[i][j] = credits_earned[i][j] * (1 if gpa[i][j] > 0 else 0)
for i in range(len(credits_studied)):
    credits_studied[i] = sum(credits_studied[i])
    credits_earned[i] = sum(credits_earned[i])

for i in range(len(gpa)):
    api.append(gpa[i] + [credits_studied[i], credits_earned[i]])

print("api: ", api)
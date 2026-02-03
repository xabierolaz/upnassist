import random
import uuid


names = [
    "Aaron", "Abigail", "Adam", "Adrian", "Alex", "Alexa", "Alexander", "Alice", "Amanda", "Amber",
    "Amy", "Andrew", "Angela", "Anna", "Anthony", "Ashley", "Audrey", "Austin", "Ava", "Barbara",
    "Benjamin", "Blake", "Brianna", "Brian", "Brandon", "Brittany", "Caleb", "Cameron", "Caroline",
    "Carter", "Charles", "Charlotte", "Chloe", "Christian", "Christopher", "Claire", "Colin",
    "Connor", "Courtney", "Daniel", "David", "Deborah", "Diana", "Dylan", "Edward", "Elizabeth",
    "Ella", "Emily", "Emma", "Ethan", "Eva", "Evelyn", "Gabriel", "Grace", "Gregory", "Hannah",
    "Harper", "Heather", "Henry", "Isabella", "Isaac", "Jack", "Jackson", "Jacob", "James", "Jane",
    "Jason", "Jennifer", "Jessica", "Jonathan", "Jordan", "Joseph", "Julia", "Kaitlyn", "Katherine",
    "Kayla", "Kevin", "Kimberly", "Liam", "Lillian", "Lily", "Logan", "Lucas", "Madison", "Mason",
    "Matthew", "Megan", "Michael", "Natalie", "Nathan", "Noah", "Olivia", "Paul", "Rachel", "Rebecca",
    "Ryan", "Samantha", "Sarah", "Sophia", "Thomas", "Victoria", "William", "Zachary"
]
surnames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez"
]


student_names = list(((n + " " + s) for n in names for s in surnames))
random.shuffle(student_names)


college_classes = [
    "Introduction to Data Science",
    "Bioinformatics",
    "Machine Learning",
    "Big Data Analysis",
    "Statistical Methods in Biomedical Research"
]


class StudentGrading:
    def __init__(self, name, subject):
        self.name = name
        self.subject = subject
        self.uuid = str(uuid.uuid4())
        self.grades = [round(random.random()*10,1) for _ in range(0, len(subject)%5+2)]
        
        
lines = []
for student in student_names:
    subjects = random.sample(college_classes, 2+random.randint(0, 3))
    for subject in subjects:
        s = StudentGrading(student, subject)
        lines.append(",".join(map(str,[s.name, s.uuid, s.subject, *s.grades]))+"\n")


random.shuffle(lines)

with open("grades_small.csv", mode="w") as file:
    file.writelines(lines[0:100])

with open("grades.csv", mode="w") as file:
    file.writelines(lines)

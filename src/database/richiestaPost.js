var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/api/v1/workouts/", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send({
    
        "name": "Core Buster",
        "mode": "AMRAP 20",
        "equipment": [
            "rack",
            "barbell",
            "abmat"
        ],
        "exercises": [
            "15 toes to bars",
            "10 thrusters",
            "30 abmat sit-ups"
        ],
        "trainerTips": [
            "Split your toes to bars into two sets maximum",
            "Go unbroken on the thrusters",
            "Take the abmat sit-ups as a chance to normalize your breath"
        ]
    
});
var alunos9A;
var alunos7C;
var alunos7A;
var alunos7B;
var alunos8A;
var alunos8B;
var alunos9A;
var alunos9B;
var distribuicao = {
    // "9A": "a",
    "7C": "a",
    "7A": "a",
    "7B": "a",
    "8A": "a",
    "8B": "a",
    "9A": "a",
    "9B": "a",
};
var inseriuCorretamente = false;
var distribuiuCorretamente = false;
// var qtd9A = [];
var qtd7C = [];
var qtd7A = [];
var qtd7B = [];
var qtd8A = [];
var qtd8B = [];
var qtd9A = [];
var qtd9B = [];

var turmas = {};
var capacidades = {};
const salas = {};
function gerar() {
    if (!distribuiuCorretamente || !inseriuCorretamente) {
        alert("Insira os alunos e distribua antes de gerar distribuição");
    } else {
        // var res9A = document.getElementById("res9A");
        var res7C = document.getElementById("res7C");
        var res7A = document.getElementById("res7A");
        var res7B = document.getElementById("res7B");
        var res8A = document.getElementById("res8A");
        var res8B = document.getElementById("res8B");
        var res9A = document.getElementById("res9A");
        var res9B = document.getElementById("res9B");
        // res9A.innerHTML = "";
        res7C.innerHTML = "";
        res7A.innerHTML = "";
        res7B.innerHTML = "";
        res8A.innerHTML = "";
        res8B.innerHTML = "";
        res9A.innerHTML = "";
        res9B.innerHTML = "";

        var sala9A = [];
        var sala7C = [];
        var sala7A = [];
        var sala7B = [];
        var sala8A = [];
        var sala8B = [];
        var sala9A = [];
        var sala9B = [];

        var alunos9A9A = [];
        var alunos9A7C = []; // alunos 7C na sala 9a
        var alunos9A7A = [];
        var alunos9A7B = [];
        var alunos9A8A = [];
        var alunos9A8B = [];
        var alunos9A9A = [];
        var alunos9A9B = [];

        var alunos7C9A = [];
        var alunos7C7C = [];
        var alunos7C7A = [];
        var alunos7C7B = [];
        var alunos7C8A = [];
        var alunos7C8B = [];
        var alunos7C9A = [];
        var alunos7C9B = [];

        var alunos7A9A = [];
        var alunos7A7C = [];
        var alunos7A7A = [];
        var alunos7A7B = [];
        var alunos7A8A = [];
        var alunos7A8B = [];
        var alunos7A9A = [];
        var alunos7A9B = [];

        var alunos7B9A = [];
        var alunos7B7C = [];
        var alunos7B7A = [];
        var alunos7B7B = [];
        var alunos7B8A = [];
        var alunos7B8B = [];
        var alunos7B9A = [];
        var alunos7B9B = [];

        var alunos8A9A = [];
        var alunos8A7C = [];
        var alunos8A7A = [];
        var alunos8A7B = [];
        var alunos8A8A = [];
        var alunos8A8B = [];
        var alunos8A9A = [];
        var alunos8A9B = [];

        var alunos8B9A = [];
        var alunos8B7C = [];
        var alunos8B7A = [];
        var alunos8B7B = [];
        var alunos8B8A = [];
        var alunos8B8B = [];
        var alunos8B9A = [];
        var alunos8B9B = [];

        var alunos9A9A = [];
        var alunos9A7C = [];
        var alunos9A7A = [];
        var alunos9A7B = [];
        var alunos9A8A = [];
        var alunos9A8B = [];
        var alunos9A9A = [];
        var alunos9A9B = [];

        var alunos9B9A = [];
        var alunos9B7C = [];
        var alunos9B7A = [];
        var alunos9B7B = [];
        var alunos9B8A = [];
        var alunos9B8B = [];
        var alunos9B9A = [];
        var alunos9B9B = [];

        //   definindoAlunos();

        inserir();

        function randomArrayShuffle(array) {
            var currentIndex = array.length,
                temporaryValue,
                randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
        }

        // function randomArrayShuffle8(array) {
        //   array.sort(() => Math.random() - 0.5);
        // }

        // function randomArrayShuffle9(array) {
        //   for (let i = array.length - 7; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 7));
        //     [array[i], array[j]] = [array[j], array[i]];
        //   }
        // }

        function randomizingTheOrderOfTheStudents() {
            // randomArrayShuffle(alunos9A);

            randomArrayShuffle(alunos7C);

            randomArrayShuffle(alunos7A);

            randomArrayShuffle(alunos7B);

            randomArrayShuffle(alunos8B);

            randomArrayShuffle(alunos8A);

            randomArrayShuffle(alunos9A);

            randomArrayShuffle(alunos9B);
        }

        randomizingTheOrderOfTheStudents();

        function addStudentsAt9A(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala9A.push(room[i])
                // if (room == alunos9A) {
                //     alunos9A9A.push(room[i]);
                // } else if (room == alunos7C) {
                //     alunos9A7C.push(room[i]);
                // } else if (room == alunos7A) {
                //     alunos9A7A.push(room[i]);
                // } else if (room == alunos7B) {
                //     alunos9A7B.push(room[i]);
                // } else if (room == alunos8A) {
                //     alunos9A8A.push(room[i]);
                // } else if (room == alunos8B) {
                //     alunos9A8B.push(room[i]);
                // } else if (room == alunos9A) {
                //     alunos9A9A.push(room[i]);
                // } else if (room == alunos9B) {
                //     alunos9A9B.push(room[i]);
                // }
                // alunos9A9A.sort();
                // alunos9A7C.sort();
                // alunos9A7A.sort();
                // alunos9A7B.sort();
                // alunos9A8A.sort();
                // alunos9A8B.sort();
                // alunos9A9A.sort();
                // alunos9A9B.sort();
            }
            room.splice(0, numberOfStudents);
        }
        // addStudentsAt9A(alunos9A, qtd9A["9A"]);
        // addStudentsAt9A(alunos7C, qtd9A["7C"]);
        // addStudentsAt9A(alunos7A, qtd9A["7A"]);
        // addStudentsAt9A(alunos7B, qtd9A["7B"]);
        // addStudentsAt9A(alunos8A, qtd9A["8A"]);
        // addStudentsAt9A(alunos8B, qtd9A["8B"]);
        // addStudentsAt9A(alunos9A, qtd9A["9A"]);
        // addStudentsAt9A(alunos9B, qtd9A["9B"]);
        // randomizingTheOrderOfTheStudents();

        function addStudentsAt7C(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala7C.push(room[i])
                // if (room == alunos9A) {
                // alunos7C9A.push(room[i]);
                if (room == alunos7C) {
                    alunos7C7C.push(room[i]);
                } else if (room == alunos7A) {
                    alunos7C7A.push(room[i]);
                } else if (room == alunos7B) {
                    alunos7C7B.push(room[i]);
                } else if (room == alunos8A) {
                    alunos7C8A.push(room[i]);
                } else if (room == alunos8B) {
                    alunos7C8B.push(room[i]);
                } else if (room == alunos9A) {
                    alunos7C9A.push(room[i]);
                } else if (room == alunos9B) {
                    alunos7C9B.push(room[i]);
                }
                // alunos7C9A.sort();
                // alunos7C7C.sort();
                // alunos7C7A.sort();
                // alunos7C7B.sort();
                // alunos7C8A.sort();
                // alunos7C8B.sort();
                // alunos7C9A.sort();
                // alunos7C9B.sort();
            }
            room.splice(0, numberOfStudents);
        }

        // addStudentsAt7C(alunos9A, qtd7C["9A"]);
        addStudentsAt7C(alunos7C, qtd7C["7C"]);
        addStudentsAt7C(alunos7A, qtd7C["7A"]);
        addStudentsAt7C(alunos7B, qtd7C["7B"]);
        addStudentsAt7C(alunos8A, qtd7C["8A"]);
        addStudentsAt7C(alunos8B, qtd7C["8B"]);
        addStudentsAt7C(alunos9A, qtd7C["9A"]);
        addStudentsAt7C(alunos9B, qtd7C["9B"]);

        randomizingTheOrderOfTheStudents();

        function addStudentsAt7A(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala7A.push(room[i])
                // if (room == alunos9A) {
                // alunos7A9A.push(room[i]);
                if (room == alunos7C) {
                    alunos7A7C.push(room[i]);
                } else if (room == alunos7A) {
                    alunos7A7A.push(room[i]);
                } else if (room == alunos7B) {
                    alunos7A7B.push(room[i]);
                } else if (room == alunos8A) {
                    alunos7A8A.push(room[i]);
                } else if (room == alunos8B) {
                    alunos7A8B.push(room[i]);
                } else if (room == alunos9A) {
                    alunos7A9A.push(room[i]);
                } else if (room == alunos9B) {
                    alunos7A9B.push(room[i]);
                }
                // alunos7A9A.sort();
                // alunos7A7C.sort();
                // alunos7A7A.sort();
                // alunos7A7B.sort();
                // alunos7A8A.sort();
                // alunos7A8B.sort();
                // alunos7A9A.sort();
                // alunos7A9B.sort();
            }
            room.splice(0, numberOfStudents);
        }

        // addStudentsAt7A(alunos9A, qtd7A["9A"]);
        addStudentsAt7A(alunos7C, qtd7A["7C"]);
        addStudentsAt7A(alunos7A, qtd7A["7A"]);
        addStudentsAt7A(alunos7B, qtd7A["7B"]);
        addStudentsAt7A(alunos8A, qtd7A["8A"]);
        addStudentsAt7A(alunos8B, qtd7A["8B"]);
        addStudentsAt7A(alunos9A, qtd7A["9A"]);
        addStudentsAt7A(alunos9B, qtd7A["9B"]);

        randomizingTheOrderOfTheStudents();

        //SALA 7B:
        function addStudentsAt7B(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala7B.push(room[i])
                // if (room == alunos9A) {
                // alunos7B9A.push(room[i]);
                if (room == alunos7C) {
                    alunos7B7C.push(room[i]);
                } else if (room == alunos7A) {
                    alunos7B7A.push(room[i]);
                } else if (room == alunos7B) {
                    alunos7B7B.push(room[i]);
                } else if (room == alunos8A) {
                    alunos7B8A.push(room[i]);
                } else if (room == alunos8B) {
                    alunos7B8B.push(room[i]);
                } else if (room == alunos9A) {
                    alunos7B9A.push(room[i]);
                } else if (room == alunos9B) {
                    alunos7B9B.push(room[i]);
                }
                // alunos7B9A.sort();
                // alunos7B7C.sort();
                // alunos7B7A.sort();
                // alunos7B7B.sort();
                // alunos7B8A.sort();
                // alunos7B8B.sort();
                // alunos7B9A.sort();
                // alunos7B9B.sort();
            }
            room.splice(0, numberOfStudents);
        }

        // addStudentsAt7B(alunos9A, qtd7B["9A"]);
        addStudentsAt7B(alunos7C, qtd7B["7C"]);
        addStudentsAt7B(alunos7A, qtd7B["7A"]);
        addStudentsAt7B(alunos7B, qtd7B["7B"]);
        addStudentsAt7B(alunos8A, qtd7B["8A"]);
        addStudentsAt7B(alunos8B, qtd7B["8B"]);
        addStudentsAt7B(alunos9A, qtd7B["9A"]);
        addStudentsAt7B(alunos9B, qtd7B["9B"]);

        randomizingTheOrderOfTheStudents();

        //SALA 8A:
        function addStudentsAt8A(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala8A.push(room[i])
                // if (room == alunos9A) {
                // alunos8A9A.push(room[i]);
                if (room == alunos7C) {
                    alunos8A7C.push(room[i]);
                } else if (room == alunos7A) {
                    alunos8A7A.push(room[i]);
                } else if (room == alunos7B) {
                    alunos8A7B.push(room[i]);
                } else if (room == alunos8A) {
                    alunos8A8A.push(room[i]);
                } else if (room == alunos8B) {
                    alunos8A8B.push(room[i]);
                } else if (room == alunos9A) {
                    alunos8A9A.push(room[i]);
                } else if (room == alunos9B) {
                    alunos8A9B.push(room[i]);
                }
                // alunos8A9A.sort();
                // alunos8A7C.sort();
                // alunos8A7A.sort();
                // alunos8A7B.sort();
                // alunos8A8A.sort();
                // alunos8A8B.sort();
                // alunos8A9A.sort();
                // alunos8A9B.sort();
            }
            room.splice(0, numberOfStudents);
        }

        // addStudentsAt8A(alunos9A, qtd8A["9A"]);
        addStudentsAt8A(alunos7C, qtd8A["7C"]);
        addStudentsAt8A(alunos7A, qtd8A["7A"]);
        addStudentsAt8A(alunos7B, qtd8A["7B"]);
        addStudentsAt8A(alunos8A, qtd8A["8A"]);
        addStudentsAt8A(alunos8B, qtd8A["8B"]);
        addStudentsAt8A(alunos9A, qtd8A["9A"]);
        addStudentsAt8A(alunos9B, qtd8A["9B"]);

        randomizingTheOrderOfTheStudents();

        //SALA 8B:
        function addStudentsAt8B(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala8B.push(room[i])
                // if (room == alunos9A) {
                // alunos8B9A.push(room[i]);
                if (room == alunos7C) {
                    alunos8B7C.push(room[i]);
                } else if (room == alunos7A) {
                    alunos8B7A.push(room[i]);
                } else if (room == alunos7B) {
                    alunos8B7B.push(room[i]);
                } else if (room == alunos8A) {
                    alunos8B8A.push(room[i]);
                } else if (room == alunos8B) {
                    alunos8B8B.push(room[i]);
                } else if (room == alunos9A) {
                    alunos8B9A.push(room[i]);
                } else if (room == alunos9B) {
                    alunos8B9B.push(room[i]);
                }
                // alunos8B9A.sort();
                // alunos8B7C.sort();
                // alunos8B7A.sort();
                // alunos8B7B.sort();
                // alunos8B8A.sort();
                // alunos8B8B.sort();
                // alunos8B9A.sort();
                // alunos8B9B.sort();
            }
            room.splice(0, numberOfStudents);
        }

        // addStudentsAt8B(alunos9A, qtd8B["9A"]);
        addStudentsAt8B(alunos7C, qtd8B["7C"]);
        addStudentsAt8B(alunos7A, qtd8B["7A"]);
        addStudentsAt8B(alunos7B, qtd8B["7B"]);
        addStudentsAt8B(alunos8A, qtd8B["8A"]);
        addStudentsAt8B(alunos8B, qtd8B["8B"]);
        addStudentsAt8B(alunos9A, qtd8B["9A"]);
        addStudentsAt8B(alunos9B, qtd8B["9B"]);
        console.log("qtd de cada turma na 8b");
        // console.log(qtd8B["9A"]);
        console.log(qtd8B["7C"]);
        console.log(qtd8B["7A"]);
        console.log(qtd8B["7B"]);
        console.log(qtd8B["8A"]);
        console.log(qtd8B["8B"]);
        console.log(qtd8B["9A"]);
        console.log(qtd8B["9B"]);

        randomizingTheOrderOfTheStudents();

        //SALA 9A:
        function addStudentsAt9A(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala9A.push(room[i])
                // if (room == alunos9A) {
                // alunos9A9A.push(room[i]);
                if (room == alunos7C) {
                    alunos9A7C.push(room[i]);
                } else if (room == alunos7A) {
                    alunos9A7A.push(room[i]);
                } else if (room == alunos7B) {
                    alunos9A7B.push(room[i]);
                } else if (room == alunos8A) {
                    alunos9A8A.push(room[i]);
                } else if (room == alunos8B) {
                    alunos9A8B.push(room[i]);
                } else if (room == alunos9A) {
                    alunos9A9A.push(room[i]);
                } else if (room == alunos9B) {
                    alunos9A9B.push(room[i]);
                }
                // alunos9A9A.sort();
                // alunos9A7C.sort();
                // alunos9A7A.sort();
                // alunos9A7B.sort();
                // alunos9A8A.sort();
                // alunos9A8B.sort();
                // alunos9A9A.sort();
                // alunos9A9B.sort();
            }
            room.splice(0, numberOfStudents);
        }

        // addStudentsAt9A(alunos9A, qtd9A["9A"]);
        addStudentsAt9A(alunos7C, qtd9A["7C"]);
        addStudentsAt9A(alunos7A, qtd9A["7A"]);
        addStudentsAt9A(alunos7B, qtd9A["7B"]);
        addStudentsAt9A(alunos8A, qtd9A["8A"]);
        addStudentsAt9A(alunos8B, qtd9A["8B"]);
        addStudentsAt9A(alunos9A, qtd9A["9A"]);
        addStudentsAt9A(alunos9B, qtd9A["9B"]);

        randomizingTheOrderOfTheStudents();

        /*
                                    9A: 5 5 6 4 4 4 4 4
                                    7C: 5 6 6 5 4 4 4 5
                                    7A: 5 5 4 4 4 4 4 4
                                    7B: 5 5 4 5 9 9 9 4
                                    8A: 4 4 9 4 9 9 9 4
                                    8B: 4 4 4 9 9 9 9 9
                                    9A: 4 5 9 9 9 9 9 9
                                    9B: 4 5 4 4 4 9 9 5
                                    */

        //SALA 9B:
        function addStudentsAt9B(room, numberOfStudents) {
            for (var i = 0; i < numberOfStudents; i++) {
                // sala9B.push(room[i])
                // if (room == alunos9A) {
                // alunos9B9A.push(room[i]);
                if (room == alunos7C) {
                    alunos9B7C.push(room[i]);
                } else if (room == alunos7A) {
                    alunos9B7A.push(room[i]);
                } else if (room == alunos7B) {
                    alunos9B7B.push(room[i]);
                } else if (room == alunos8A) {
                    alunos9B8A.push(room[i]);
                } else if (room == alunos8B) {
                    alunos9B8B.push(room[i]);
                } else if (room == alunos9A) {
                    alunos9B9A.push(room[i]);
                } else if (room == alunos9B) {
                    alunos9B9B.push(room[i]);
                }
            }
            room.splice(0, numberOfStudents);
        }

        // addStudentsAt9B(alunos9A, qtd9B["9A"]);
        addStudentsAt9B(alunos7C, qtd9B["7C"]);
        addStudentsAt9B(alunos7A, qtd9B["7A"]);
        addStudentsAt9B(alunos7B, qtd9B["7B"]);
        addStudentsAt9B(alunos8A, qtd9B["8A"]);
        addStudentsAt9B(alunos8B, qtd9B["8B"]);
        addStudentsAt9B(alunos9A, qtd9B["9A"]);
        addStudentsAt9B(alunos9B, qtd9B["9B"]);

        randomizingTheOrderOfTheStudents();

        // sala9A.push(
        //     ...alunos9A9A,
        //     ...alunos9A7C,
        //     ...alunos9A7A,
        //     ...alunos9A7B,
        //     ...alunos9A8A,
        //     ...alunos9A8B,
        //     ...alunos9A9A,
        //     ...alunos9A9B
        // );

        sala7C.push(
            // ...alunos7C9A,
            ...alunos7C7C,
            ...alunos7C7A,
            ...alunos7C7B,
            ...alunos7C8A,
            ...alunos7C8B,
            ...alunos7C9A,
            ...alunos7C9B
        );

        sala7A.push(
            // ...alunos7A9A,
            ...alunos7A7C,
            ...alunos7A7A,
            ...alunos7A7B,
            ...alunos7A8A,
            ...alunos7A8B,
            ...alunos7A9A,
            ...alunos7A9B
        );

        sala7B.push(
            // ...alunos7B9A,
            ...alunos7B7C,
            ...alunos7B7A,
            ...alunos7B7B,
            ...alunos7B8A,
            ...alunos7B8B,
            ...alunos7B9A,
            ...alunos7B9B
        );

        sala8A.push(
            // ...alunos8A9A,
            ...alunos8A7C,
            ...alunos8A7A,
            ...alunos8A7B,
            ...alunos8A8A,
            ...alunos8A8B,
            ...alunos8A9A,
            ...alunos8A9B
        );

        sala8B.push(
            // ...alunos8B9A,
            ...alunos8B7C,
            ...alunos8B7A,
            ...alunos8B7B,
            ...alunos8B8A,
            ...alunos8B8B,
            ...alunos8B9A,
            ...alunos8B9B
        );

        sala9A.push(
            // ...alunos9A9A,
            ...alunos9A7C,
            ...alunos9A7A,
            ...alunos9A7B,
            ...alunos9A8A,
            ...alunos9A8B,
            ...alunos9A9A,
            ...alunos9A9B
        );

        sala9B.push(
            // ...alunos9B9A,
            ...alunos9B7C,
            ...alunos9B7A,
            ...alunos9B7B,
            ...alunos9B8A,
            ...alunos9B8B,
            ...alunos9B9A,
            ...alunos9B9B
        );

        // console.log(sala9A.length);
        console.log(sala7C.length);
        console.log(sala7A.length);
        console.log(sala7B.length);
        console.log(sala8A.length);
        console.log(sala8B.length);
        console.log(sala9A.length);
        console.log(sala9B.length);
        console.log(sala7C);

        // console.log(alunos9A9A);
        // for (var i = 0; i < sala9A.length; i++) {
        //     if (i == 0) {
        //         res9A.innerHTML += `<h2>SALA 9A</h2>`;
        //     }
        //     res9A.innerHTML += `${sala9A[i]} <br>`;
        // }

        for (var i = 0; i < sala7A.length; i++) {
            if (i == 0) {
                res7A.innerHTML += `<h2>SALA 7A</h2>`;
            }
            res7A.innerHTML += `${sala7A[i]} <br>`;
        }

        for (var i = 0; i < sala7B.length; i++) {
            if (i == 0) {
                res7B.innerHTML += `<h2>SALA 7B</h2>`;
            }
            res7B.innerHTML += `${sala7B[i]} <br>`;
        }

        for (var i = 0; i < sala7C.length; i++) {
            if (i == 0) {
                res7C.innerHTML += `<h2>SALA 7C</h2>`;
            }
            res7C.innerHTML += `${sala7C[i]} <br>`;
        }

        for (var i = 0; i < sala8A.length; i++) {
            if (i == 0) {
                res8A.innerHTML += `<h2>SALA 8A</h2>`;
            }
            res8A.innerHTML += `${sala8A[i]} <br>`;
        }

        for (var i = 0; i < sala8B.length; i++) {
            if (i == 0) {
                res8B.innerHTML += `<h2>SALA 8B</h2>`;
            }
            res8B.innerHTML += `${sala8B[i]} <br>`;
        }

        for (var i = 0; i < sala9A.length; i++) {
            if (i == 0) {
                res9A.innerHTML += `<h2>SALA 9A</h2>`;
            }
            res9A.innerHTML += `${sala9A[i]} <br>`;
        }

        for (var i = 0; i < sala9B.length; i++) {
            if (i == 0) {
                res9B.innerHTML += `<h2>SALA 9B</h2>`;
            }
            res9B.innerHTML += `${sala9B[i]} <br>`;
        }
        /*
      console.log(sala9A.length);
      console.log(sala7C.length);
      console.log(sala7A.length);
      console.log(sala7B.length);
      console.log(sala8A.length);
      console.log(sala8B.length);
      console.log(sala9A.length);
      console.log(sala9B.length);
      */
        function arrayParaStringComQuebrasDeLinha(arr) {
            // Use o método join() para juntar os elementos do array em uma única string
            // e adicione "\n" (quebra de linha) entre eles
            return arr.join("<br>");
        }
        // const a9A9A = arrayParaStringComQuebrasDeLinha(alunos9A9A);
        // const a9A7C = arrayParaStringComQuebrasDeLinha(alunos9A7C);
        // const a9A7A = arrayParaStringComQuebrasDeLinha(alunos9A7A);
        // const a9A7B = arrayParaStringComQuebrasDeLinha(alunos9A7B);
        // const a9A8A = arrayParaStringComQuebrasDeLinha(alunos9A8A);
        // const a9A8B = arrayParaStringComQuebrasDeLinha(alunos9A8B);
        // const a9A9A = arrayParaStringComQuebrasDeLinha(alunos9A9A);
        // const a9A9B = arrayParaStringComQuebrasDeLinha(alunos9A9B);

        // const a7C9A = arrayParaStringComQuebrasDeLinha(alunos7C9A);
        const a7C7C = arrayParaStringComQuebrasDeLinha(alunos7C7C);
        const a7C7A = arrayParaStringComQuebrasDeLinha(alunos7C7A);
        const a7C7B = arrayParaStringComQuebrasDeLinha(alunos7C7B);
        const a7C8A = arrayParaStringComQuebrasDeLinha(alunos7C8A);
        const a7C8B = arrayParaStringComQuebrasDeLinha(alunos7C8B);
        const a7C9A = arrayParaStringComQuebrasDeLinha(alunos7C9A);
        const a7C9B = arrayParaStringComQuebrasDeLinha(alunos7C9B);

        // const a7A9A = arrayParaStringComQuebrasDeLinha(alunos7A9A);
        const a7A7C = arrayParaStringComQuebrasDeLinha(alunos7A7C);
        const a7A7A = arrayParaStringComQuebrasDeLinha(alunos7A7A);
        const a7A7B = arrayParaStringComQuebrasDeLinha(alunos7A7B);
        const a7A8A = arrayParaStringComQuebrasDeLinha(alunos7A8A);
        const a7A8B = arrayParaStringComQuebrasDeLinha(alunos7A8B);
        const a7A9A = arrayParaStringComQuebrasDeLinha(alunos7A9A);
        const a7A9B = arrayParaStringComQuebrasDeLinha(alunos7A9B);

        // const a7B9A = arrayParaStringComQuebrasDeLinha(alunos7B9A);
        const a7B7C = arrayParaStringComQuebrasDeLinha(alunos7B7C);
        const a7B7A = arrayParaStringComQuebrasDeLinha(alunos7B7A);
        const a7B7B = arrayParaStringComQuebrasDeLinha(alunos7B7B);
        const a7B8A = arrayParaStringComQuebrasDeLinha(alunos7B8A);
        const a7B8B = arrayParaStringComQuebrasDeLinha(alunos7B8B);
        const a7B9A = arrayParaStringComQuebrasDeLinha(alunos7B9A);
        const a7B9B = arrayParaStringComQuebrasDeLinha(alunos7B9B);

        // const a8A9A = arrayParaStringComQuebrasDeLinha(alunos8A9A);
        const a8A7C = arrayParaStringComQuebrasDeLinha(alunos8A7C);
        const a8A7A = arrayParaStringComQuebrasDeLinha(alunos8A7A);
        const a8A7B = arrayParaStringComQuebrasDeLinha(alunos8A7B);
        const a8A8A = arrayParaStringComQuebrasDeLinha(alunos8A8A);
        const a8A8B = arrayParaStringComQuebrasDeLinha(alunos8A8B);
        const a8A9A = arrayParaStringComQuebrasDeLinha(alunos8A9A);
        const a8A9B = arrayParaStringComQuebrasDeLinha(alunos8A9B);

        // const a8B9A = arrayParaStringComQuebrasDeLinha(alunos8B9A);
        const a8B7C = arrayParaStringComQuebrasDeLinha(alunos8B7C);
        const a8B7A = arrayParaStringComQuebrasDeLinha(alunos8B7A);
        const a8B7B = arrayParaStringComQuebrasDeLinha(alunos8B7B);
        const a8B8A = arrayParaStringComQuebrasDeLinha(alunos8B8A);
        const a8B8B = arrayParaStringComQuebrasDeLinha(alunos8B8B);
        const a8B9A = arrayParaStringComQuebrasDeLinha(alunos8B9A);
        const a8B9B = arrayParaStringComQuebrasDeLinha(alunos8B9B);

        // const a9A9A = arrayParaStringComQuebrasDeLinha(alunos9A9A);
        const a9A7C = arrayParaStringComQuebrasDeLinha(alunos9A7C);
        const a9A7A = arrayParaStringComQuebrasDeLinha(alunos9A7A);
        const a9A7B = arrayParaStringComQuebrasDeLinha(alunos9A7B);
        const a9A8A = arrayParaStringComQuebrasDeLinha(alunos9A8A);
        const a9A8B = arrayParaStringComQuebrasDeLinha(alunos9A8B);
        const a9A9A = arrayParaStringComQuebrasDeLinha(alunos9A9A);
        const a9A9B = arrayParaStringComQuebrasDeLinha(alunos9A9B);

        // const a9B9A = arrayParaStringComQuebrasDeLinha(alunos9B9A);
        const a9B7C = arrayParaStringComQuebrasDeLinha(alunos9B7C);
        const a9B7A = arrayParaStringComQuebrasDeLinha(alunos9B7A);
        const a9B7B = arrayParaStringComQuebrasDeLinha(alunos9B7B);
        const a9B8A = arrayParaStringComQuebrasDeLinha(alunos9B8A);
        const a9B8B = arrayParaStringComQuebrasDeLinha(alunos9B8B);
        const a9B9A = arrayParaStringComQuebrasDeLinha(alunos9B9A);
        const a9B9B = arrayParaStringComQuebrasDeLinha(alunos9B9B);

        var res = document.getElementById("res");
        res.innerHTML = `<table border="1"> 
  <tr>
  <td></td> 
  <td><strong>Alunos do 7ºA</strong></td> 
  <td><strong>Alunos do 7ºB</strong></td>
  <td><strong>Alunos do 7ºC</strong></td>
  <td><strong>Alunos do 8ºA</strong></td>
  <td><strong>Alunos do 8ºB</strong></td>
  <td><strong>Alunos do 9ºA</strong></td>
  <td><strong>Alunos do 9ºB</strong></td>
  </tr>
  
  <tr>
  <td><strong>Local: <br> Sala 7A</strong></td>
  
  
  <td>
  ${a7A7A} <br>
  </td>
  <td> 
  ${a7A7B} <br>
  </td>
  <td> 
  ${a7A7C} <br>
  </td>
  <td> 
  ${a7A8A} <br>
  </td>
  
  <td> 
  ${a7A8B} <br>
  </td>
  <td> 
  ${a7A9A} <br>
  </td>
  <td> 
  ${a7A9B} <br>
  </td>
  </tr>
    
  <tr>
  <td><strong>Local: <br> Sala 7B</strong></td>
  
  <td> 
  ${a7B7A} <br>
  </td>
  <td> 
  ${a7B7B} <br>
  </td>
  <td> 
  ${a7B7C} <br>
  </td>
  <td> 
  ${a7B8A} <br>
  </td>
  
  <td> 
  ${a7B8B} <br>
  </td>
  <td> 
  ${a7B9A} <br>
  </td>
  <td> 
  ${a7B9B} <br>
  </td>
  </tr>

  <tr>
  <td><strong>Local: <br> Sala 7C</strong></td> 
  <td> 
  ${a7C7A} <br>
  </td>
  <td> 
  ${a7C7B} <br>
  </td>
  <td> 
  ${a7C7C} <br>
  </td>
  <td> 
  ${a7C8A} <br>
  </td>
 
  <td> 
  ${a7C8B} <br>
  </td>
  <td> 
  ${a7C9A} <br>
  </td>
  <td> 
  ${a7C9B} <br>
  </td>
  </tr>
  
  <tr>
  <td><strong>Local: <br> Sala 8A</strong></td>
  
  
  <td> 
  ${a8A7A} <br>
  </td>
  <td> 
  ${a8A7B} <br>
  </td>
  <td> 
  ${a8A7C} <br>
  </td>
  <td> 
  ${a8A8A} <br>
  </td>
  
  <td> 
  ${a8A8B} <br>
  </td>
  <td> 
  ${a8A9A} <br>
  </td>
  <td> 
  ${a8A9B} <br>
  </td>
  </tr>
  <tr>
  <td><strong>Local: <br> Sala 8B</strong></td>
  
 
  <td> 
  ${a8B7A} <br>
  </td>
  <td> 
  ${a8B7B} <br>
  </td>
  <td> 
  ${a8B7C} <br>
  </td>
  <td> 
  ${a8B8A} <br>
  </td>
  
  <td> 
  ${a8B8B} <br>
  </td>
  <td> 
  ${a8B9A} <br>
  </td>
  <td> 
  ${a8B9B} <br>
  </td>
  </tr>
  
  <tr>
  <td><strong>Local: <br> Sala 9A</strong></td>
  
  
  <td> 
  ${a9A7A} <br>
  </td>
  <td> 
  ${a9A7B} <br>
  </td>
  <td> 
  ${a9A7C} <br>
  </td>
  <td> 
  ${a9A8A} <br>
  </td>
  
  <td> 
  ${a9A8B} <br>
  </td>
  <td> 
  ${a9A9A} <br>
  </td>
  <td> 
  ${a9A9B} <br>
  </td>
  </tr>
  
  <tr>
  <td><strong>Local: <br> Sala 9B</strong></td>
  
  
  <td> 
  ${a9B7A} <br>
  </td>
  <td> 
  ${a9B7B} <br>
  </td>
  <td> 
  ${a9B7C} <br>
  </td>
  <td> 
  
  ${a9B8A} <br>
  </td>
  
  <td> 
  ${a9B8B} <br>
  </td>
  <td> 
  ${a9B9A} <br>
  </td>
  <td> 
  ${a9B9B} <br>
  </td>
  </tr>
  </table>`;
    }
}
function gerarPDF() {
    var dados = res.innerHTML;
    var janela = window.open("", "", "width=1200, height=1200");
    janela.document.write("<html><head><style>");
    janela.document.write(
        "table, tr, td { border: 1px solid black; border-collapse: collapse; font-size: 10px;} td {padding: 5px;} body {font-family: Helvetica;} "
    );
    janela.document.write("</style>");
    janela.document.write("</head>");
    janela.document.write("<body>");    
    janela.document.write(dados);
    janela.document.write("</body></html>");
    janela.document.close();
    janela.print();
}
function inserir() {
    inseriuCorretamente = true;
    const entrada = document.getElementById("names").value;
    const linhas = entrada.split("\n");

    let salaAtual = null;

    linhas.forEach((linha) => {
        if (linha.match(/^\d+[A-Z]$/)) {
            // Se a linha corresponder ao formato da sala (por exemplo, 9A), crie um novo array para a sala
            salaAtual = linha;
            salas[salaAtual] = [];
        } else if (salaAtual && linha.trim() !== "") {
            // Se a linha não estiver em branco e tiver uma sala atual, adicione o aluno ao array da sala
            salas[salaAtual].push(linha);
        }
    });

    // Exemplo de como acessar os arrays de alunos por sala
    //   console.log("Alunos da sala 9A:", salas["9A"]);
    console.log("Alunos da sala 7A:", salas["7A"]);
    console.log("Alunos da sala 7B:", salas["7B"]);
    console.log("Alunos da sala 7C:", salas["7C"]);
    console.log("Alunos da sala 8A:", salas["8A"]);
    console.log("Alunos da sala 8B:", salas["8B"]);
    console.log("Alunos da sala 9A:", salas["9A"]);
    console.log("Alunos da sala 9B:", salas["9B"]);

    alert(`
    Quantidade de alunos adicionados: 
    7A: ${salas["7A"].length} alunos.
    7B: ${salas["7B"].length} alunos.
    7C: ${salas["7C"].length} alunos.
    8A: ${salas["8A"].length} alunos.
    8B: ${salas["8B"].length} alunos.
    9A: ${salas["9A"].length} alunos.
    9B: ${salas["9B"].length} alunos.
  `);

    turmas = {
        "7A": salas["7A"].length,
        "7B": salas["7B"].length,
        "7C": salas["7C"].length,
        "8A": salas["8A"].length,
        "8B": salas["8B"].length,
        "9A": salas["9A"].length,
        "9B": salas["9B"].length,
    };

    capacidades = {
        "7A": salas["7A"].length,
        "7B": salas["7B"].length,
        "7C": salas["7C"].length,
        "8A": salas["8A"].length,
        "8B": salas["8B"].length,
        "9A": salas["9A"].length,
        "9B": salas["9B"].length,
    };

    alunos7A = salas["7A"];
    alunos7B = salas["7B"];
    alunos7C = salas["7C"];
    alunos8A = salas["8A"];
    alunos8B = salas["8B"];
    alunos9A = salas["9A"];
    alunos9B = salas["9B"];
}
function distribuir() {
    function distribuirAlunosUniformemente(turmas, capacidades) {
        const salas = {
            "7A": [],
            "7B": [],
            "7C": [],
            "8A": [],
            "8B": [],
            "9A": [],
            "9B": [],
        };

        // Transforma as capacidades em uma matriz de índices repetidos
        const capacidadeIndices = Object.keys(capacidades).reduce((arr, sala) => {
            for (let i = 0; i < capacidades[sala]; i++) {
                arr.push(sala);
            }
            return arr;
        }, []);

        // Distribuição aleatória de alunos
        Object.keys(turmas).forEach((turma) => {
            const quantidade = turmas[turma];
            for (let i = 0; i < quantidade; i++) {
                let sala = null;

                // Escolha aleatória de uma sala da matriz de capacidadeIndices
                const indice = Math.floor(Math.random() * capacidadeIndices.length);
                sala = capacidadeIndices.splice(indice, 1)[0];

                salas[sala].push(turma);
            }
        });

        console.log("Distribuição Aleatória:");
        console.log(salas);

        // Função para calcular a diferença de alunos entre duas salas
        function diferencaAlunos(sala1, sala2) {
            const diferenca = {};
            Object.keys(turmas).forEach((turma) => {
                const alunosSala1 = salas[sala1].filter(
                    (aluno) => aluno === turma
                ).length;
                const alunosSala2 = salas[sala2].filter(
                    (aluno) => aluno === turma
                ).length;
                diferenca[turma] = alunosSala1 - alunosSala2;
            });
            return diferenca;
        }

        // Trocas para equilibrar as salas
        let trocaRealizada = true;
        let iteracoes = 0;

        while (trocaRealizada && iteracoes < 1000) {
            trocaRealizada = false;

            Object.keys(salas).forEach((salaAtual) => {
                Object.keys(salas).forEach((salaAlvo) => {
                    if (salaAtual !== salaAlvo) {
                        const diferenca = diferencaAlunos(salaAtual, salaAlvo);

                        // Verifica se há turmas com excesso em salaAtual e falta em salaAlvo
                        const turmasExcesso = Object.keys(diferenca).filter(
                            (turma) => diferenca[turma] > 0
                        );
                        const turmasFalta = Object.keys(diferenca).filter(
                            (turma) => diferenca[turma] < 0
                        );

                        // Se houver turmas para trocar, faça a troca
                        if (turmasExcesso.length > 0 && turmasFalta.length > 0) {
                            for (let i = 0; i < turmasExcesso.length; i++) {
                                const turmaExcesso = turmasExcesso[i];
                                const turmaFalta = turmasFalta[i % turmasFalta.length];

                                const alunoTrocaSalaAtual = salas[salaAtual].findIndex(
                                    (aluno) => aluno === turmaExcesso
                                );
                                const alunoTrocaSalaAlvo = salas[salaAlvo].findIndex(
                                    (aluno) => aluno === turmaFalta
                                );

                                // Realiza a troca
                                if (
                                    alunoTrocaSalaAtual !== -1 &&
                                    alunoTrocaSalaAlvo !== -1 &&
                                    salas[salaAtual].length > 0 &&
                                    salas[salaAlvo].length > 0
                                ) {
                                    salas[salaAtual][alunoTrocaSalaAtual] = turmaFalta;
                                    salas[salaAlvo][alunoTrocaSalaAlvo] = turmaExcesso;
                                    trocaRealizada = true;
                                }
                            }
                        }
                    }
                });
            });

            iteracoes++;
        }

        console.log("Número de alunos de cada turma em cada sala após trocas:");

        Object.keys(salas).forEach((sala) => {
            const turmasNestaSala = {};

            Object.keys(turmas).forEach((turma) => {
                const numAlunos = salas[sala].filter((aluno) => aluno === turma).length;
                turmasNestaSala[turma] = numAlunos;
            });

            console.log(`${sala}: ${JSON.stringify(turmasNestaSala)}`);
            distribuicao[sala] = JSON.stringify(turmasNestaSala);
        });

        console.log(distribuicao);

        console.log(
            "Quantidade total de alunos presentes em cada sala após trocas:"
        );
        Object.keys(salas).forEach((sala) => {
            const totalAlunosSala = salas[sala].length;
            console.log(`${sala}: ${totalAlunosSala}`);
        });

        return salas;
    }

    if (inseriuCorretamente) {
        const resultado = distribuirAlunosUniformemente(turmas, capacidades);

        qtd7A = JSON.parse(distribuicao["7A"]);
        qtd7B = JSON.parse(distribuicao["7B"]);
        qtd7C = JSON.parse(distribuicao["7C"]);
        qtd8A = JSON.parse(distribuicao["8A"]);
        qtd8B = JSON.parse(distribuicao["8B"]);
        qtd9A = JSON.parse(distribuicao["9A"]);
        qtd9B = JSON.parse(distribuicao["9B"]);

        var total = 0;
        // document.getElementById("a9A9A").textContent = qtd9A["9A"];
        // document.getElementById("a9A7C").textContent = qtd9A["7C"];
        // document.getElementById("a9A7A").textContent = qtd9A["7A"];
        // document.getElementById("a9A7B").textContent = qtd9A["7B"];
        // document.getElementById("a9A8A").textContent = qtd9A["8A"];
        // document.getElementById("a9A8B").textContent = qtd9A["8B"];
        // document.getElementById("a9A9A").textContent = qtd9A["9A"];
        // document.getElementById("a9A9B").textContent = qtd9A["9B"];
        // total +=
        //     qtd9A["9A"] +
        //     qtd9A["7C"] +
        //     qtd9A["7A"] +
        //     qtd9A["7B"] +
        //     qtd9A["8A"] +
        //     qtd9A["8B"] +
        //     qtd9A["9A"] +
        //     qtd9A["9B"];
        // document.getElementById("a9A").textContent = total;
        // total = 0;

        // document.getElementById("a7C9A").textContent = qtd7C["9A"];
        document.getElementById("a7C7C").textContent = qtd7C["7C"];
        document.getElementById("a7C7A").textContent = qtd7C["7A"];
        document.getElementById("a7C7B").textContent = qtd7C["7B"];
        document.getElementById("a7C8A").textContent = qtd7C["8A"];
        document.getElementById("a7C8B").textContent = qtd7C["8B"];
        document.getElementById("a7C9A").textContent = qtd7C["9A"];
        document.getElementById("a7C9B").textContent = qtd7C["9B"];
        total +=
            // qtd7C["9A"] +
            qtd7C["7C"] +
            qtd7C["7A"] +
            qtd7C["7B"] +
            qtd7C["8A"] +
            qtd7C["8B"] +
            qtd7C["9A"] +
            qtd7C["9B"];
        document.getElementById("a7C").textContent = total;
        total = 0;

        // document.getElementById("a7A9A").textContent = qtd7A["9A"];
        document.getElementById("a7A7C").textContent = qtd7A["7C"];
        document.getElementById("a7A7A").textContent = qtd7A["7A"];
        document.getElementById("a7A7B").textContent = qtd7A["7B"];
        document.getElementById("a7A8A").textContent = qtd7A["8A"];
        document.getElementById("a7A8B").textContent = qtd7A["8B"];
        document.getElementById("a7A9A").textContent = qtd7A["9A"];
        document.getElementById("a7A9B").textContent = qtd7A["9B"];
        total +=
            // qtd7A["9A"] +
            qtd7A["7C"] +
            qtd7A["7A"] +
            qtd7A["7B"] +
            qtd7A["8A"] +
            qtd7A["8B"] +
            qtd7A["9A"] +
            qtd7A["9B"];
        document.getElementById("a7A").textContent = total;
        total = 0;

        // document.getElementById("a7B9A").textContent = qtd7B["9A"];
        document.getElementById("a7B7C").textContent = qtd7B["7C"];
        document.getElementById("a7B7A").textContent = qtd7B["7A"];
        document.getElementById("a7B7B").textContent = qtd7B["7B"];
        document.getElementById("a7B8A").textContent = qtd7B["8A"];
        document.getElementById("a7B8B").textContent = qtd7B["8B"];
        document.getElementById("a7B9A").textContent = qtd7B["9A"];
        document.getElementById("a7B9B").textContent = qtd7B["9B"];
        total +=
            // qtd7B["9A"] +
            qtd7B["7C"] +
            qtd7B["7A"] +
            qtd7B["7B"] +
            qtd7B["8A"] +
            qtd7B["8B"] +
            qtd7B["9A"] +
            qtd7B["9B"];
        document.getElementById("a7B").textContent = total;
        total = 0;

        // document.getElementById("a8A9A").textContent = qtd8A["9A"];
        document.getElementById("a8A7C").textContent = qtd8A["7C"];
        document.getElementById("a8A7A").textContent = qtd8A["7A"];
        document.getElementById("a8A7B").textContent = qtd8A["7B"];
        document.getElementById("a8A8A").textContent = qtd8A["8A"];
        document.getElementById("a8A8B").textContent = qtd8A["8B"];
        document.getElementById("a8A9A").textContent = qtd8A["9A"];
        document.getElementById("a8A9B").textContent = qtd8A["9B"];
        total +=
            // qtd8A["9A"] +
            qtd8A["7C"] +
            qtd8A["7A"] +
            qtd8A["7B"] +
            qtd8A["8A"] +
            qtd8A["8B"] +
            qtd8A["9A"] +
            qtd8A["9B"];
        document.getElementById("a8A").textContent = total;
        total = 0;

        // document.getElementById("a8B9A").textContent = qtd8B["9A"];
        document.getElementById("a8B7C").textContent = qtd8B["7C"];
        document.getElementById("a8B7A").textContent = qtd8B["7A"];
        document.getElementById("a8B7B").textContent = qtd8B["7B"];
        document.getElementById("a8B8A").textContent = qtd8B["8A"];
        document.getElementById("a8B8B").textContent = qtd8B["8B"];
        document.getElementById("a8B9A").textContent = qtd8B["9A"];
        document.getElementById("a8B9B").textContent = qtd8B["9B"];
        total +=
            // qtd8B["9A"] +
            qtd8B["7C"] +
            qtd8B["7A"] +
            qtd8B["7B"] +
            qtd8B["8A"] +
            qtd8B["8B"] +
            qtd8B["9A"] +
            qtd8B["9B"];
        document.getElementById("a8B").textContent = total;
        total = 0;

        // document.getElementById("a9A9A").textContent = qtd9A["9A"];
        document.getElementById("a9A7C").textContent = qtd9A["7C"];
        document.getElementById("a9A7A").textContent = qtd9A["7A"];
        document.getElementById("a9A7B").textContent = qtd9A["7B"];
        document.getElementById("a9A8A").textContent = qtd9A["8A"];
        document.getElementById("a9A8B").textContent = qtd9A["8B"];
        document.getElementById("a9A9A").textContent = qtd9A["9A"];
        document.getElementById("a9A9B").textContent = qtd9A["9B"];
        total +=
            // qtd9A["9A"] +
            qtd9A["7C"] +
            qtd9A["7A"] +
            qtd9A["7B"] +
            qtd9A["8A"] +
            qtd9A["8B"] +
            qtd9A["9A"] +
            qtd9A["9B"];
        document.getElementById("a9A").textContent = total;
        total = 0;

        // document.getElementById("a9B9A").textContent = qtd9B["9A"];
        document.getElementById("a9B7C").textContent = qtd9B["7C"];
        document.getElementById("a9B7A").textContent = qtd9B["7A"];
        document.getElementById("a9B7B").textContent = qtd9B["7B"];
        document.getElementById("a9B8A").textContent = qtd9B["8A"];
        document.getElementById("a9B8B").textContent = qtd9B["8B"];
        document.getElementById("a9B9A").textContent = qtd9B["9A"];
        document.getElementById("a9B9B").textContent = qtd9B["9B"];
        total +=
            // qtd9B["9A"] +
            qtd9B["7C"] +
            qtd9B["7A"] +
            qtd9B["7B"] +
            qtd9B["8A"] +
            qtd9B["8B"] +
            qtd9B["9A"] +
            qtd9B["9B"];
        document.getElementById("a9B").textContent = total;
        total = 0;  
        distribuiuCorretamente = true;
    } else {
        alert("Insira os alunos antes de gerar a distribuição");
    }
}



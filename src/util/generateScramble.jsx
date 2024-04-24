import convertAlg from "./convertAlg";
import min2phase from "./min2phase";

const generateScramble = (alg, useAUF, cn) => {
    let newAlg = convertAlg(alg);
    if (useAUF) {
        const AUF = Math.floor(Math.random() * 4);
        switch (AUF) {
            case 0:
                break;
            case 1:
                newAlg = "U " + newAlg;
                break;
            case 2:
                newAlg = "U' " + newAlg;
                break;
            case 3:
                newAlg = "U2 " + newAlg;
                break;
        }
        const postAUF = Math.floor(Math.random() * 4);
        switch (postAUF) {
            case 0:
                break;
            case 1:
                newAlg += " U";
                break;
            case 2:
                newAlg += " U'";
                break;
            case 3:
                newAlg += " U2";
                break;
        }
    }
    var cube = min2phase.fromScramble(newAlg);
    min2phase.initFull();
    var solution = min2phase.solve(cube);
    if (cn) {
        const xRotation = Math.floor(Math.random() * 4);
        const yRotation = Math.floor(Math.random() * 4);
        const order = Math.floor(Math.random() * 2);
        if (order === 0) {
            switch (xRotation) {
                case 0:
                    break;
                case 1:
                    solution = "x " + solution;
                    break;
                case 2:
                    solution = "x' " + solution;
                    break;
                case 3:
                    solution = "x2 " + solution;
                    break;
            }
            switch (yRotation) {
                case 0:
                    break;
                case 1:
                    solution = "y " + solution;
                    break;
                case 2:
                    solution = "y' " + solution;
                    break;
                case 3:
                    solution = "y2 " + solution;
                    break;
            }
        } else {
            switch (yRotation) {
                case 0:
                    break;
                case 1:
                    solution = "y " + solution;
                    break;
                case 2:
                    solution = "y' " + solution;
                    break;
                case 3:
                    solution = "y2 " + solution;
                    break;
            }
            switch (xRotation) {
                case 0:
                    break;
                case 1:
                    solution = "x " + solution;
                    break;
                case 2:
                    solution = "x' " + solution;
                    break;
                case 3:
                    solution = "x2 " + solution;
                    break;
            }
        }
    }
    return solution;
};

export default generateScramble;

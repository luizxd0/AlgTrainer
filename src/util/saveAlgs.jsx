const saveAlgs = (text) => {
    const names = [];
    const algs = [];
    let index = 0;
    let newLine = -1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === `\n`) {
            newLine = i;
        } else if (text[i] === ":") {
            names.push(text.substring(newLine + 1, i));
        } else if (text[i] === `"`) {
            if (index === 0) {
                index = i;
            } else {
                algs.push(text.substring(index + 1, i));
                index = 0;
            }
        }
    }
    const algData = [];
    for (let i = 0; i < names.length; i++) {
        const data = {
            name: names[i],
            alg: algs[i],
        };
        algData.push(data);
    }
    const algDataString = JSON.stringify(algData);
    localStorage.setItem("algText", text);
    localStorage.setItem("algData", algDataString);
};

export default saveAlgs;

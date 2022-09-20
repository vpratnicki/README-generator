const titleDataArgs = process.argv.slice(2, process.argv.length);

const printTitleData = titleDataArr => {
    for (let i = 0; i < titleDataArr.length; i++) {
        console.log(titleDataArr[i]);
    }

    console.log('=================');

    titleDataArr.forEach(titleItem => console.log(titleItem));
};

printTitleData(titleDataArgs);
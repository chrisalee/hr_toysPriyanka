/*
 * Complete the 'toys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY w as parameter.
 */

function toys(w) {
    let numContainers = 0;
    const weightLimit = 4;
    const sortW = w.sort((a, b) => a - b);
    
    for (let i = 0; i < sortW.length; i++) {
        numContainers++;
        
        let j = i + 1;
        while(sortW[j] <= sortW[i] + weightLimit) {
            j++;
        }
        i = j - 1;
    }
    
    return numContainers;
}

/**
 * Function which calculates the average of only odd positive numbers.
 */
export function averageOddPositiveIntegers(input: number[]): number {

  const oddPosNumberArray: number[] = input.filter(positivenumber =>(positivenumber > 0 && positivenumber % 2 != 0 ));
  
  if(oddPosNumberArray.length === 0){
        return 0; //if length is zero than no odd positive numbers in the array
  }else {
        const total: number = oddPosNumberArray.reduce((accumulator,currentValue) => accumulator + currentValue);
        return total/oddPosNumberArray.length; //calculates total

 }
  
}

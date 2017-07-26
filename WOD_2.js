var inputArray = [3, 6, -2, -5, 7, 3];


function largestProduct(arr) {
  var arrayX=[];
  var i;


 for(i=0;i<arr.length-1;i++){
   arrayX.push((arr[i]*arr[i+1]));
     }
//Push results to an array

   
   /*arrayX =arrayX.reduce(function(a,b){
   return Math.max(a,b);
   });*/
//Select the largest number only   
}
                     
console.log (largestProduct(inputArray));
//log out the results
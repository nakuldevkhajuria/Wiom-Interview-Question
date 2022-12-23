//Question 1
// const nums = [-1];
// const lower = -1;
// const upper = -1;
const nums = [0,1,3,50,75];
const lower = 0;
const upper = 99;
console.log(rangesRanges(nums, lower, upper));

document.querySelector('#first').innerText = `${rangesRanges(nums, lower, upper)}`;

function rangesRanges(nums, lower, upper) {
  const ranges = [];
  let start = lower;

  //add ranges numbers between lower and first element in nums array
  if (nums[0] > lower ) {
    ranges.push(start + (
        nums[0] - 1 > lower ? '->' + (nums[0] - 1) : '' //we have used the ternary operator
        )
        );
  }


  // add ranges numbers between elements in nums
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 2) {
      ranges.push((nums[i] + 1) + '->' + (nums[i + 1] - 1));
    }
    else if(nums[i + 1] - nums[i] == 2){
        ranges.push(`${nums[i]+1}`)//when there is only one element inbetween
    }
  }

  // Add ranges range between last element in nums and upper
  if (nums[nums.length - 1] < upper) {
    ranges.push((nums[nums.length - 1] + 1) + (upper > nums[nums.length - 1] + 1 ? '->' + upper : ''));
  }

  return ranges;
}


//Question2

let swap =0;
function minSwaps(nums){

let maxIndex =0;

 for(let i=0;i<nums.length-1;i++){

 maxIndex = nums.lastIndexOf(Math.max(...nums));

if(i===maxIndex)
 { let value1 = nums[i+1];
    nums[i+1] = nums[i];
     nums[i]=value1;
     swap++;
 }

 }
  let minIndex = nums.indexOf(Math.min(...nums));

 return minIndex ;
}
// console.log(minSwaps([3,4,5,5,3,1])+swap);
document.querySelector('#second').innerText = `${minSwaps([3,4,5,5,3,1])+swap}`;
// console.log(swap)
// console.log(minSwaps([6,4,5,5,3,1])+swap);
// console.log(minSwaps([9])+swap);

// Question 3:


function minMeetingRooms(intervals){
intervals.sort((a,b) => a[0] - b[0] )//a and b will be the array. and first element of both will be compared
//if - comes, no change happens,if + then change. 0 then do nothing

let heap =[];//we will use it to compare the second value of a meeting with the starting time of next meeting

let room =0;
for(let i=0;i<intervals.length;i++){
    if(heap.length && intervals[i][0] >= heap[0]){
heap.shift();//this will popout the outer element.
    }
    else{
        room+=1;
        heap.shift();
    }
    heap.push(intervals[i][1])

}
return room;
}
document.querySelector('#third').innerText = `${minMeetingRooms([[0,30], [5, 10],[15,20]])}`;
console.log(minMeetingRooms([[0,30], [5, 10],[15,20]])) 
// console.log(minMeetingRooms([[7, 10], [2, 4]])) 
// console.log(minMeetingRooms([[1, 2], [2,4],[4,5],[4,6]])) 



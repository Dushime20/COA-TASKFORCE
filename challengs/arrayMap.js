//check subarray and target sum.
function SubarrayWithSum(arr, target) {
  let left = 0;
  let currentSum = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    while (currentSum > target && left <= right) {
      currentSum -= arr[left];
      left++;
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// Function to get user input and execute the function.
function getUserInputAndExecute() {
  // Prompt user to input array elements separated by commas.
  let arrInput = prompt("Enter array elements separated by commas:");
  if (arrInput === null) return; // User pressed cancel.

  // Convert input string to an array of integers.
  let arr = arrInput.split(",").map(Number);

  // Prompt user to input target sum
  let targetInput = prompt("Enter the target sum:");
  if (targetInput === null) return; // User pressed cancel

  let target = parseInt(targetInput, 10);

  // Check if the subarray with the target sum exists.
  let result = SubarrayWithSum(arr, target);

  // Display the result on the console
  console.log(`Array: [${arr.join(", ")}]`);
  console.log(`Target Sum: ${target}`);
  console.log(`Subarray with target sum exists: ${result}`);
}

// Execute the function to get user input and check for subarray with target sum
getUserInputAndExecute();

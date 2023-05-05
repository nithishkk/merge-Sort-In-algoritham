import React,{ useState } from "react";

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

function App() {
  const [unsortedArray, setUnsortedArray] = useState([5, 2, 6, 1, 8, 9]);

  const handleSort = () => {
    const sortedArray = mergeSort(unsortedArray);
    setUnsortedArray(sortedArray);
  };

  return (
    <div>
      <h1>Merge Sort Example</h1>
      <button onClick={handleSort}>Sort Array</button>
      <p>Unsorted Array: {unsortedArray.join(", ")}</p>
      <p>Sorted Array: {unsortedArray.join(", ")}</p>
    </div>
  );
}

export default App;

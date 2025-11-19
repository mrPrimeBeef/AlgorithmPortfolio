# Cocktail Shaker Sort

Cocktail Sort is a variation of Bubble sort. The Bubble sort algorithm always traverses elements from left and moves the largest element to its correct position in the first iteration and second-largest in the second iteration and so on. Cocktail Sort traverses through a given array in both directions alternatively. Cocktail sort does not go through the unnecessary iteration making it efficient for large arrays.

## Pseudokode (needs real psudocode?)
we need to "shrink" the array so we need end, start and swappped variables, but:

### The first stage
 loops through the array from left to right, just like the Bubble Sort. During the loop, adjacent items are compared and if the value on the left is greater than the value on the right, then values are swapped. At the end of the first iteration, the largest number will reside at the end of the array.

### The second
 stage loops through the array in opposite direction- starting from the item just before the most recently sorted item, and moving back to the start of the array. Here also, adjacent items are compared and are swapped if required.

## Big O():
- Best Case: O(n)
- Average Case:  O(n^2)
- Worst Case:  O(n^2)

if the array is sorted, it doesn't move anything and only touchs n elements. In the average and worst cases, cocktail sort makes multiple passes through the array. On each pass, it compares adjacent elements and swaps them if they're out of order. You need roughly n passes, and each pass touches roughly n elements, giving you n × n = O(n²) comparisons and swaps. (the average case is properly a little less because doesn't travel all the way each time because we know with each pass that the ends are sorted).

## Links: 
link wiki - https://en.wikipedia.org/wiki/Cocktail_shaker_sort \
link gfg - https://www.geeksforgeeks.org/dsa/cocktail-sort/

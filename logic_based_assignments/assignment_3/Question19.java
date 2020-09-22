// Q.19 How to sort a Stack using a temporary Stack?
package assignment_3;

import java.util.Stack;

public class Question19 {
    public static void sortGivenStack(Stack<Integer> inputStack) {
        Stack<Integer> tempStack = new Stack<Integer>();
        Stack<Integer> duplicateStack = new Stack<Integer>();
        for (int number : inputStack) {
            duplicateStack.push(number);
        }

        int tempInt = 0;
        while (!inputStack.isEmpty()) {
            tempInt = inputStack.pop();

            while (!tempStack.isEmpty() && tempStack.peek() > tempInt) {
                inputStack.push(tempStack.pop());
            }
            tempStack.push(tempInt);
        }
        System.out.println("Given unsorted stack is : " + duplicateStack);
        System.out.println("Sorted stack is : " + tempStack);
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(10);
        stack.push(17);
        stack.push(9);
        stack.push(0);
        stack.push(14);
        stack.push(99);
        stack.push(2);
        stack.push(6);
        sortGivenStack(stack);
    }
}
// Output
// Given unsorted stack is : [10, 17, 9, 0, 14, 99, 2, 6]
// Sorted stack is : [0, 2, 6, 9, 10, 14, 17, 99]
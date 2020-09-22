// Q.1 Find the only repetitive element between 1 to n-1.
package assignment_3;

public class Question01 {
    public static void main(String[] args) {
        int arr[] = { 2, 5, 7, 1, 9, 5, 0 };
        int repeatedElement = 0;
        outer: for (int i = 0; i < 7; i++) {
            for (int j = i + 1; j < 7; j++) {
                if (arr[i] == arr[j]) {
                    repeatedElement = arr[i];
                    break outer;
                }
            }
        }
        System.out.println("Repeated element is : " + repeatedElement);
    }
}

/*
 * Output : Repeated element is : 5
 */
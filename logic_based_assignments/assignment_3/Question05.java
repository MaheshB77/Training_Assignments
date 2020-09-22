// Q.5 Wrie a program to find out duplicate characters in a string.
package assignment_3;

import java.util.HashSet;
import java.util.Set;

public class Question05 {
    public static void findDuplicates(String string) {
        Set<Character> duplicateChars = new HashSet<Character>();
        for (int i = 0; i < string.length(); i++) {
            for (int j = i + 1; j < string.length(); j++) {
                if (string.charAt(i) == string.charAt(j)) {
                    duplicateChars.add(string.charAt(i));
                }

            }
        }
        for (Character dupCharacter : duplicateChars) {
            System.out.println(dupCharacter + " is a duplicate character");
        }

    }

    public static void main(String[] args) {
        findDuplicates("Helloo");
    }

}

// Output
// l is a duplicate character
// o is a duplicate character
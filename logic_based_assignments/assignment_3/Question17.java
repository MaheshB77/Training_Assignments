// Q.17 Find longest substring without repeating characters.
package assignment_3;

import java.util.HashSet;

public class Question17 {
    static void longestSubstring(String str) {
        String longest = "";
        for (int start = 0; start < str.length(); start++) {
            HashSet<Character> unique = new HashSet<Character>();
            int end = start;
            for (; end < str.length(); end++) {
                char currChar = str.charAt(end);
                if (unique.contains(currChar)) {
                    break;
                } else {
                    unique.add(currChar);
                }
            }
            if (longest.length() < end - start + 1) {
                longest = str.substring(start, end);
            }
        }
        System.out.println("Longest substring is : " + longest);
    }

    public static void main(String[] args) {
        longestSubstring("maheshbansode");
    }
}

// Output
// Longest substring is : hbansode
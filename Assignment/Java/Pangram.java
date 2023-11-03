import java.util.*;
public class Pangram {
    public static boolean isPangram(String str) {
        // Create a boolean array to mark the presence of each letter in the alphabet.
        boolean[] present = new boolean[26];

        // Convert the string to lowercase.
        str = str.toLowerCase();

        // Iterate over the string and mark each letter as present.
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (Character.isLetter(c)) {
                present[c - 'a'] = true;
            }
        }

        // Check if all the letters are present in the alphabet.
        for (boolean b : present) {
            if (!b) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String str = sc.nextLine(); //The quick brown fox jumps over the lazy dog.

        if (isPangram(str)) {
            System.out.println("The string '" + str + "' is a pangram.");
        } else {
            System.out.println("The string '" + str + "' is not a pangram.");
        }
    }
}
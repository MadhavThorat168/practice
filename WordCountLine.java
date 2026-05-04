package com.sunbeam;
import java.util.*;

public class WordCountLine {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a line:");
        String line = sc.nextLine();

        line = line.toLowerCase().replaceAll("[^a-z0-9 ]", "");

        String words[] = line.split("\\s+");

        HashMap<String, Integer> map = new HashMap<>();

        for (String word : words) {
            if (word.isEmpty()) continue;

            map.put(word, map.getOrDefault(word, 0) + 1);
        }

        System.out.println("\nWord Frequencies:");
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }

        sc.close();
    }
}
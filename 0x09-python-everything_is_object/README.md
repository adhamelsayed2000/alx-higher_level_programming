# Python - Everything is an Object

In this engaging project, I, **Ahmed Mahmoud** (GitHub: [gwaez](https://github.com/gwaez)), explored the intricacies of object instantiation in Python. I delved into topics such as variable aliasing, object identifiers, types, and mutability. The project comprised a series of quiz-like questions, and I provided concise answers in single-line `.txt` files.

## Tests :heavy_check_mark:

* [tests](./tests): A dedicated folder containing test files thoughtfully provided by Holberton School.

## Tasks :page_with_curl:

* **0. Who am I?** 🤔
  * [0-answer.txt](./0-answer.txt): To unveil the type of an object, one should employ the function...

* **1. Where are you?** 🕵️
  * [1-answer.txt](./1-answer.txt): To discover a variable's identifier, revealing its memory address in CPython, one can use...

* **2. Right count** ✅
  * [2-answer.txt](./2-answer.txt): In a code snippet featuring `a` and `b`, do they point to the same object?

* **3. Right count =** 🔄
  * [3-answer.txt](./3-answer.txt): In a code snippet with `a` and `b`, are they pointing to the same object?

* **4. Right count =** 🔄
  * [4-answer.txt](./4-answer.txt): In a code snippet featuring `a` and `b`, do they share the same object?

* **5. Right count =+** ➕
  * [5-answer.txt](./5-answer.txt): In a code snippet with `a` and `b`, do they point to the same object?

* **6. Is equal** ✔️
  * [6-answer.txt](./6-answer.txt): What do these three lines print?
    ```
    s1 = "Holberton"
    s2 = s1
    print(s1 == s2)
    ```

* **7. Is the same** 🤝
  * [7-answer.txt](./7-answer.txt): What do these three lines print?
    ```
    s1 = "Holberton"
    s2 = s1
    print(s1 is s2)
    ```

* **8. Is really equal** ✨
  * [8-answer.txt](./1-answer.txt): What do these three lines print?
    ```
    s1 = "Holberton"
    s2 = "Holberton"
    print(s1 == s2)
    ```

* **9. Is really the same** 🌟
  * [9-answer.txt](./9-answer.txt): What do these three lines print?
    ```
    s1 = "Holberton"
    s2 = "Holberton"
    print(s1 is s2)
    ```

* **10. And with a list, is it equal** 🤷
  * [10-answer.txt](./10-answer.txt): What do these three lines print?
    ```
    l1 = [1, 2, 3]
    l2 = [1, 2, 3]
    print(l1 == l2)
    ```

* **11. And with a list, is it the same** 🤷
  * [11-answer.txt](./11-answer.txt): What do these three lines print?
    ```
    l1 = [1, 2, 3]
    l2 = [1, 2, 3]
    print(l1 is l2)
    ```

* **12. And with a list, is it really equal** 🤷
  * [12-answer.txt](./12-answer.txt): What do these three lines print?
    ```
    l1 = [1, 2, 3]
    l2 = l1
    print(l1 == l2)
    ```

* **13. And with a list, is it really the same** 🤷
  * [13-answer.txt](./13-answer.txt): What do these three lines print?
    ```
    l1 = [1, 2, 3]
    l2 = l1
    print(l1 is l2)
    ```

* **14. List append** 📝
  * [14-answer.txt](./14-answer.txt): What does this script print?
    ```python
    l1 = [1, 2, 3]
    l2 = l1
    l1.append(4)
    print(l2)
    ```

* **15. List add** ➕
  * [15-answer.txt](./15-answer.txt): What does this script print?
    ```python
    l1 = [1, 2, 3]
    l2 = l1
    l1 = l1 + [4]
    print(l2)
    ```

* **16. Integer incrementation** 🔢
  * [16-answer.txt](./16-answer.txt): What does this script print?
    ```python
    def increment(n):
        n += 1

    a = 1
    increment(a)
    print(a)
    ```

* **17. List incrementation** 🔢
  * [17-answer.txt](./17-answer.txt): What does this script print?
    ```python
    def increment(n):
        n.append(4)

    l = [1, 2, 3]
    increment(l)
    print(l)
    ```

* **18. List assignation** 🔠
  * [18-answer.txt](./18-answer.txt): What does this script print?
    ```python
    def assign_value(n, v):
        n = v

    l1 = [1, 2, 3]
    l2 = [4, 5, 6]
    assign_value(l1, l2)
    print(l1)
    ```

* **19. Copy a list object** 📋
  * [19-copy_list.py](./19-copy_list.py): A Python function `copy_list(l)` that gracefully returns a copy of a list.

* **20. Tuple or not?** 🤨
  * [20-answer.txt](./20-answer.txt): Is `a` truly a tuple?
    ```python
    a = ()
    ```

* **21. Tuple or not?** 🤔
  * [21-answer.txt](./21-answer.txt): Is `a` genuinely a tuple?
    ```python
    a = (1, 2)
    ```

* **22. Tuple or not?** 🤔
  * [22-answer.txt](./22-answer.txt): Is `a` indeed a tuple?
    ```python
    a = (1)
    ```

* **23. Tuple or not?** 🤔
  * [23-answer.txt](./23-answer.txt): Is `a` actually a tuple?
    ```python
    a = (1, )
    ```

* **24. Richard Sim's special #0** 🎭
  * [24-answer.txt](./24-answer.txt): What does this script print?
    ```python
    a = (1)
    b = (1)
    a is b
    ```

*...

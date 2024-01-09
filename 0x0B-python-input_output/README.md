# 🚀 Python - Input/Output Operations - Project by Adham EL-sayed (GitHub: [ADHAM](https://github.com/adhamelsayed2000)) 🐍

This project focuses on file handling in Python, utilizing built-in functions such as `with`, `open`, and `read`, along with the `json` module for reading and writing files, as well as serializing and deserializing objects using JSON.

## Tests :heavy_check_mark:

- [tests](./tests): Directory containing test files provided by Holberton School.

## Function Prototypes :floppy_disk:

Function prototypes for the implemented tasks in this project are as follows:

| File                  | Prototype                                       |
| --------------------- | ----------------------------------------------- |
| `0-read_file.py`      | `def read_file(filename=""):`
| `1-number_of_lines.py`| `def number_of_lines(filename=""):`
| `2-read_lines.py`     | `def read_lines(filename="", nb_lines=0):`
| `3-write_file.py`     | `def write_file(filename="", text=""):`
| `4-append_write.py`   | `def append_write(filename="", text=""):`
| `5-to_json_string.py` | `def to_json_string(my_obj):`
| `6-from_json_string.py`| `def from_json_string(my_str):`
| `7-save_to_json_file.py`| `def save_to_json_file(my_obj, filename):`
| `8-load_from_json_file.py`| `def load_from_json_file(filename):`
| `10-class_to_json.py` | `def class_to_json(obj):`
| `14-pascal_triangle.py`| `def pascal_triangle(n):`
| `100-append_after.py` | `def append_after(filename="", search_string="", new_string=""):`

## Tasks :page_with_curl:

### 0. Read file
- [0-read_file.py](./0-read_file.py): Python function that prints the contents of a UTF8 text file to standard output.

### 1. Number of lines
- [1-number_of_lines.py](./1-number_of_lines.py): Python function that returns the number of lines contained in a text file.

### 2. Read n lines
- [2-read_lines.py](./2-read_lines.py): Python function that prints `n` lines of a UTF8 text file to standard output.

### 3. Write to a file
- [3-write_file.py](./3-write_file.py): Python function that writes a string to a UTF8 text file and returns the number of characters written.

### 4. Append to a file
- [4-append_write.py](./4-append_write.py): Python function that appends a string to the end of a UTF8 text file and returns the number of characters appended.

### 5. To JSON string
- [5-to_json_string.py](./5-to_json_string.py): Python function that returns the JSON string representation of an object.

### 6. From JSON string to Object
- [6-from_json_string.py](./6-from_json_string.py): Python function that returns the Python object represented by a JSON string.

### 7. Save Object to a file
- [7-save_to_json_file.py](./7-save_to_json_file.py): Python function that writes an object to a text file using JSON representation.

### 8. Create object from a JSON file
- [8-load_from_json_file.py](./8-load_from_json_file.py): Python function that creates an object from a `.json` file.

### 9. Load, add, save
- [9-add_item.py](./9-add_item.py): Python script that stores all command line arguments to a Python list saved in the file `add_item.json`.

### 10. Class to JSON
- [10-class_to_json.py](./10-class_to_json.py): Python function that returns the dictionary description for simple Python data structures (lists, dictionaries, strings, integers, and booleans).

### 11. Student to JSON
- [11-student.py](./11-student.py): Python class `Student` that defines a student. Includes public instance attributes `first_name`, `last_name`, and `age`, and a method `to_json` that returns the dictionary representation of a `Student` instance.

### 12. Student to JSON with filter
- [12-student.py](./12-student.py): Python class `Student` that defines a student. Builds on [11-student.py](./11-student.py) with a method `to_json` that can take a list of attributes to include in the dictionary representation.

### 13. Student to disk and reload
- [13-student.py](./13-student.py): Python class `Student` that defines a student. Builds on [12-student.py](./12-student.py) with a method `reload_from_json` that replaces all attributes of the `Student` instance using key/value pairs from a provided JSON dictionary.

### 14. Pascal's Triangle
- [14-pascal_triangle.py](./14-pascal_triangle.py): Python function that returns a list of lists of integers representing Pascal's triangle of size `n`.

### 15. Search and update
- [100-append_after.py](./100-append_after.py): Python function that inserts a line of text into a file after each line containing a specified string.

### 16. Log parsing
- [101-stats.py](./101-stats.py): Python script that reads lines from standard input and computes file size and status code metrics after every 10 lines or on keyboard interruption (`CTRL + C`).

### 17. Hack the VM
- [read_write_heap.py](./read_write_heap.py): Python script that finds and replaces a string in the heap of a running process. Usage: `read_write_heap.py pid search_string replace_string`.

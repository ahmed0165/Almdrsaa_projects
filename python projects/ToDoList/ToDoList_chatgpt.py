def add_task(todo_list):
    """
    Function to add a task to the todo list.

    Parameters:
    - todo_list (list): The list containing tasks.

    Returns:
    None
    """
    task = input("Enter a Task: ")
    todo_list.append(task)
    print("Task added")

def view_tasks(todo_list):
    """
    Function to view tasks in the todo list.

    Parameters:
    - todo_list (list): The list containing tasks.

    Returns:
    None
    """
    if not todo_list:
        print("There is no task")
    else:
        for task in todo_list:
            print(task)

def remove_task(todo_list):
    """
    Function to remove a task from the todo list.

    Parameters:
    - todo_list (list): The list containing tasks.

    Returns:
    None
    """
    if not todo_list:
        print("There is no task")
    else:
        task = input("Enter a task: ")
        if task in todo_list:
            todo_list.remove(task)
            print("Task removed")
        else:
            print("Task not found")

def main():
    """
    Main function to control the flow of the program.

    Parameters:
    None

    Returns:
    None
    """
    todo_list = []

    while True:
        user_action = input("Enter a command (add, view, remove, exit): ")

        if user_action == "add":
            add_task(todo_list)
        elif user_action == "view":
            view_tasks(todo_list)
        elif user_action == "remove":
            remove_task(todo_list)
        elif user_action == "exit":
            break
        else:
            print("Invalid command")

if __name__ == "__main__":
    main()

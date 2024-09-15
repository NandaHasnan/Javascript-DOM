# Javascript DOM

## Overview
This project is a simple interactive web application where users can:
- Change the background color of the page.
- Open Google and YouTube with a button click.
- Manage a Todo List where users can add, edit, and delete tasks.

## Features
### 1. **Background Color Changer**
Users can switch the background color of the webpage to red, blue, or white by clicking the corresponding buttons:
- **Red Button**: Changes background to red.
- **Blue Button**: Changes background to blue.
- **White Button**: Changes background to white.

### 2. **Quick Links**
There are buttons to quickly open external websites:
- **Google Button**: Redirects to Google.
- **YouTube Button**: Redirects to YouTube.

### 3. **Todo List Management**
Users can add, edit, and delete tasks from a Todo list:
- **Add Task**: Users can input a task and a due date. Each new task is displayed in a table with an option to edit or delete the task.
- **Edit Task**: Click the edit button on an existing task to modify it.
- **Delete Task**: Click the delete button to remove a task from the list.

## How It Works
- The app tracks the total number of tasks using a counter (`todoCount`).
- Tasks are displayed in a table format with the task number, description, and due date.
- The `submitButton` is used to either add a new task or update an existing one, depending on the current action (add or edit).
- The application ensures that all input fields are filled before submission.
- After deleting a task, the task numbers are automatically updated.

## Usage
1. **Background Color**: Click any of the color buttons to change the background.
2. **Quick Links**: Use the Google and YouTube buttons to navigate to the respective websites.
3. **Todo List**:
   - Enter a task and due date, then click **Submit** to add it.
   - Use **Edit** to modify an existing task.
   - Use **Delete** to remove a task from the list.

## Project Structure
- **JavaScript Functions**: 
   - `addEventListener()` handles the button clicks for background color change and opening external websites.
   - Todo list management is handled through form submission and table row manipulation.
   - `updateTodoIds()` keeps the task numbering updated when a task is deleted.

## Contributors
- **NandaHasnan** - Developer

## Demo

Insert gif or link to demo


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


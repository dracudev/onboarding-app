# S5 React Onboarding App

## 📄 Description

This project involves building a digital onboarding application using React. The app will present a sequence of instructional messages or steps, accompanied by images, allowing users to navigate forward or backward through the onboarding screens. Each screen displays only one step at a time, enhancing the user experience by breaking down information into manageable parts.

### Objectives

- Apply foundational React concepts such as components, hooks, and props.
- Use Bootstrap 5 for responsive design.
- Style components using Styled Components for customizable and scoped styling.

<br>

## 📐 Project Structure

### Level 1

- **Exercise 1**: Initialize the project by setting up the main `Card` component:
  - Create a `Card` component to display each onboarding step.
  - Load `Card` within the main `App` component.
  - Define the `tutorialData` array in `App` to store instructional content for each step.
  - Implement `useState` in `App` to manage the current step.
  - Pass step data as props from `App` to `Card`, displaying the title and description in `Card`.

- **Exercise 2**: Enhance the `Card` component to navigate through the onboarding steps:
  - Implement a `nextStep` function in `App` to increment the current step.
  - Pass `nextStep` to `Card` and trigger it on button click to update the displayed step in `Card`.

- **Exercise 3**: Make the `Card` component responsive to ensure usability across devices.

- **Exercise 4**: Add backward navigation with a `prevStep` function:
  - Implement `prevStep` in `App` to decrement the current step.
  - Pass `prevStep` to `Card` and call it as needed.
  - Use conditional rendering to display the appropriate navigation buttons:
    - Step 1: Show "Next" button only.
    - Step 2: Show both "Next" and "Back" buttons.
    - Final Step: Show "Back" button only.

- **Exercise 5**: Create an `Indicator` component to display the current step visually:
  - Load `Indicator` within `Card` and pass the total steps and current step as props.
  - Use `.map` to render step indicators, highlighting the active step with styled components.

### Level 2

- **Exercise 6**: Enable clickable navigation on each indicator:
  - On clicking an indicator dot, display the corresponding step content in `Card`.

### Level 3

- **Exercise 7**: Add transition animations between steps:
  - Implement animations to slide the image out to the left and the next one in from the right.
  - Optionally, add animations to the step indicators for a smoother transition.

<br>

## 💻 Technologies Used

- React
- Vite
- Bootstrap 5
- React-Bootstrap
- ESLint
- Styled Components

<br>

## 📋 Requirements

- **Vite** for development and building
- **React** and **React-DOM** for component-based UI
- **Bootstrap 5** and **React-Bootstrap** for styling and responsive design
- **Node.js**
- **Styled Components**

<br>

## 🛠️ Installation

1. Clone this repository: 
  ```bash
  git clone https://github.com/dracudev/S5-Digital-Onboarding.git
  ```
2. Navigate to the project directory: 
  ```bash
  cd S5-Digital-Onboarding
  ```
3. Open the project in your text editor and start coding.
  ```bash
  code .
  ```

<br>

<br>

## ▶️ Execution

1. Install the dependencies and run the server.
  ```bash
  npm install
  npm run dev
  ```

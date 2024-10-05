# Gemini-MCQ

## Overview

A full-stack web application that dynamically generates multiple-choice questions (MCQs) based on user-selected or custom topics using the **Gemini API**. Built with **Spring Boot** for the backend and **Angular** for the frontend.

## Features

- **Dynamic MCQ Generation**: Fetches 10 MCQs based on predefined or user-defined topics.
- **User Interaction**: Allows users to select answers and submit them.
- **Timer Functionality**: Starts a countdown timer for quizzes and auto-submits after 5 minutes.
- **Feedback on Answers**: Displays correct answers after submission.
- **Responsive UI**: Built with Angular for a seamless user experience.

![image](https://github.com/user-attachments/assets/03b7323b-b76e-42d4-82d8-1a300fde65bf)
![image](https://github.com/user-attachments/assets/d9e36cb5-472a-4d9d-9fd5-7ce87ae89c21)
![image](https://github.com/user-attachments/assets/dc2b4385-5444-4681-b24c-0adbb16141a6)
![image](https://github.com/user-attachments/assets/b4d53764-cbc8-4963-b153-615e72f026f1)





## Tech Stack

- **Backend**: 
  - Java
  - Spring Boot
  - RestTemplate
  - Jackson (for JSON parsing)
  
- **Frontend**: 
  - Angular 18
  - TypeScript
  - HTML
  - SCSS

- **API**: Gemini API for question generation

## Installation

### Prerequisites

- JDK 11 or higher
- Node.js and npm
- Angular CLI

### Clone the Repository

```bash
git clone <repository-url>
cd mcq-generation-app
```

### Backend Setup

1. Navigate to the backend directory.
2. Update the `application.properties` file with the required API URL.
3. Run the Spring Boot application:

```bash
./mvnw spring-boot:run
```

### Frontend Setup

1. Navigate to the Angular frontend directory.
2. Install dependencies:

```bash
npm install
```

3. Start the Angular application:

```bash
ng serve
```

## Usage

1. Open your browser and navigate to `http://localhost:4200`.
2. Enter a topic or select one from the list to fetch MCQs.
3. Answer the questions and submit your responses.
4. Review the correct answers displayed after submission.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License.

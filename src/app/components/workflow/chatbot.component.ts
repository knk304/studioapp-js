import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  messages: string[] = [];
  userInput: string = '';

  chatHistory = [
    { received: "Hi AM123456, I am Core Operations Process Assist to assist you on building your workflow.\nWhat exciting process workflow are we building today and can you describe the process ?" },
    { send: "Lets create a Account Opening Workflow, the process is to help customers open their account?" },
    { received: "How Many stages will this process consist and can you please describe them ?" },
    { send: "Account Opening will consist of 3 stages, Stage\n1 - Customer intake form, Stage 2 - Checker where the Agent will validate customer inputs with their documents and Stage -3 Closure where the account gets created and the account opening letter will be emailed to the customer and there should be a print option." },
    { received: "I understand you want a 3 stage process, looks like the first stage is Customer Intake Form and would consists of intake questions, can you describe more on how many questions and what are the questions in the form ?" },
    { send: "The Intake Form would consists of below questions:\n1. First Name and Last Name\n2. Date Of Birth\n3. Address\n4. Income details which would be optional\n5. SSN" },
    { received: "l have rephrased the questions:\n1. Please enter your Frist Name and Last Name.\n2. Please enter your Date of Birth (MMODYYYY)\n3. What is your current address\n4. Please enter your gross income\n5. Enter your Social Security Number in the below section provided\n6. Attach Government issued ID and any other supporting documents\nIf everything looks correct, can you provide details of Stage 2 - Checker?" },
    { send: "Looks good, in checker stage the agent will review the input questionnaire and validated the attached documents and the physical copy of the customer and sends request to internal citi System to create a new account." },
    { received: "Based on your inputs seems like the stage 2 will consists of checklist stage, where the agents has to make sure they complete the checklist and send the request to Citi System, below is the check list;\n1. Validate Customer Input\n2. Validate the attached documents\n3. Validate the physical documents\nShould I also provide an edit option for customer questionnaire's for agent to make updates in case there was a type by customer ?" },
    { send: "The checklist has all the list items to be validated, and thanks for the suggestion on update input questionnaire by user.\nThe final state is Closure which will consists of the response of the citi internal system with Account details such as Account Number, Routing Number. Customer Name, SSN and one time login password and there will be a button with name generate Welcome Letter when once clicked the letter will be generated to be shared with the customer" },
    { received: "Got the details for the final stage - Closure, is there anything else you would like to add before I send you the summary of the workflow ?" },
    { send: "yes" }
  ];

  // Example YAML structure for workflow with form settings
  workflowYaml = `
  workflow:
    name: Account Opening Workflow
    description: Help customers open their account
    stages:
      - name: Customer Intake Form
        questions:
          - label: First Name and Last Name
            type: text
            required: true
          - label: Date Of Birth
            type: date
            required: true
          - label: Address
            type: textarea
            required: true
          - label: Income details
            type: number
            required: false
          - label: SSN
            type: password
            required: true
      - name: Checker
        description: Agent reviews input questionnaire, validates attached and physical documents, and sends request to internal Citi System to create a new account
        checklist:
          - label: Validate Customer Input
            type: checkbox
            required: true
          - label: Validate the attached documents
            type: checkbox
            required: true
          - label: Validate the physical documents
            type: checkbox
            required: true
          - label: Option to edit customer questionnaire if needed
            type: checkbox
            required: false
      - name: Closure
        description: Response from Citi internal system with account details and option to generate Welcome Letter
        outputs:
          - Account Number
          - Routing Number
          - Customer Name
          - SSN
          - One time login password
          - Welcome Letter (generated on button click)
  `;

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push(this.userInput);
      this.userInput = '';
    }
  }
}

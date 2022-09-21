import axios from "axios";

const baseUrl = "https://send.api.mailtrap.io";
const apiKey = "9b3d8175bcbeb7ee12dda651a042ca92"
const email = {
  "to": [
    {
      "email": "john_doe@example.com",
      "name": "John Doe"
    }
  ],
  "cc": [
    {
      "email": "jane_doe@example.com",
      "name": "Jane Doe"
    }
  ],
  "bcc": [
    {
      "email": "james_doe@example.com",
      "name": "Jim Doe"
    }
  ],
  "from": {
    "email": "sales@example.com",
    "name": "Example Sales Team"
  },
  "subject": "Your Example Order Confirmation",
  "html": "<p>Congratulations on your order no. <strong>1234</strong>.</p>",
}


export const sendEmail = (from, name, message) => {
  const endpoint = `${baseUrl}/api/send`
  const response = await = axios.post(endpoint,email,{"Api-Token": apiKey} )
  console.log(response)
} 
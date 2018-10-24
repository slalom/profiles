curl https://us-central1-sendpoints-220301.cloudfunctions.net/profile \
-H "Content-Type: application/json" \
--data @- << EOF
{
  "name": "Dan Siwiec",
  "title": "Solution Principal",
  "practice": "Technology Enablement",
  "avatar": "https://serving.photos.photobox.com/10598395aaaeb9e4741126af9892b96b4bfe6cf7d5a38f3cc7edec5c86773ecb7175c341.jpg",
  "years": 14,
  "architectedNumber": 9,
  "skills": [
    "API Design / Micro-services",
    "CI / CD best practices",
    "JavaScript / Node.js / React / Angular",
    "Java / Spring",
    "MongoDB / Oracle SQL",
    "AWS / Kubernetes / Heroku"
  ],
  "inMyWords": "I’m passionate about accelerating organizations by finding the right balance between pragmatism and best software practices, to deliver business value in a predictable, efficient and reproducible manner. What drives me is striving for alignment across teams and constant customer focus",
  "summary": "With over 14 years of professional experience Dan has been leading agile teams, designing and implementing large-scale enterprise systems involving complex integration with external services, driving implementation of modern software practices and bridging the gap between business and tech through lean software practices. Working on a high variety of projects has allowed him to develop skills across full application stack - from UI to database development, as well as understanding the mechanics propelling modern businesses.",
  "projects": [
    {
      "role":"Architect / Tech Lead",
      "field": "National Healthcare Provider - Microservices Platform Design and Implementation",
      "description": "Led a team designing and implementing a microservices platform written in Java, following a modern FHIR healthcare standard for data exchange. Responsible for driving modern CI/CD practices, identifying and managing risks and coaching developers."
    },
    {
      "role":"Principal Consultant",
      "field": "Global Bank, UK - High Impact Production Incident Rescue and Development Process Assessment",
      "description": "Part of a small, 3 person specialist team deployed in response to an urgent Severity 1 production incident in client’s payment processing gateway. Responsible for investigation and identifying the cause of the incident followed by preparing a holistic assessment of client’s software delivery process and producing a thorough report for the bank’s CTO."
    },
    {
      "role":"Tech Lead",
      "field": "National Healthcare Provider - Patient Engagement Portal replatforming",
      "description": "Led a team replatforming a Patient Engagement portal from a legacy monolithic, server-side application to a modern, SPA JavaScript stack with decoupled backend service. A secondary goal was to refresh CI practices and set standards for the rest of the organization to follow."
    }
  ]
}
EOF
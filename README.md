🏟️ FlowMatch Pro | Aegis Intelligence
The National Mesh for Stadium Bottleneck Management

FlowMatch Pro is a state-aware AI assistant designed to eliminate stadium bottlenecks. Powered by the Aegis Engine, it doesn't just show data; it dynamically manages the "Action Window" to keep fans moving safely and efficiently across India's largest venues.

✨ Core Capabilities
🎟️ Smart Sync: Enter a ticket ID (e.g., IPL-AMD-G05) and the system instantly reconfigures the UI for that specific venue and event type.

🏎️ Multi-Event Mesh: The interface "shape-shifts" its theme, icons, and safety logic to match the specific crowd dynamics of IPL, F1, or Concerts.

🏃‍♂️ Smart Escape: Generates a "Safe Corridor" using live density scanning to guide users to the optimal exit gate and transport hub.

🍔 Smart Token Kiosk: AI detects low-action phases (like timeouts) to issue digital tokens, allowing fans to skip food queues during peak moments.

🛡️ Security & Zero-Leak Architecture
Aegis is built with a Privacy-First mindset:

Session-Only Geolocation: Location data is used strictly for venue verification and precision logistics (walking distance calculations). Data is never stored on a server.

Zero-Secret Architecture: This repository uses a Placeholder Injection system. API keys are never hardcoded in the source; they are injected into the Docker container at build-time using ARG and sed to prevent credential leakage.

🚀 Google Cloud Infrastructure
The solution is fully integrated into the Google Cloud Platform (GCP) ecosystem:

Containerization: Uses a custom nginx:alpine Docker image to package the intelligence environment.

Deployment: Hosted on Google Cloud Run for serverless, high-concurrency scaling.

Database: Utilizes Google Firestore (via Firebase SDK) for real-time synchronization of Smart Tokens.

Reliability: Leverages Google's Global Edge Network to reduce latency for the National Mesh UI.

🧪 Testing & Quality Assurance
FlowMatch Pro includes a custom unit testing suite (js/tests.js) that validates system integrity:

State Integrity: Maps event types to UI themes correctly.

Logic Validation: Verifies ticket ID parsing and section assignment.

Data Accuracy: Validates coordinates for registered national venues (Narendra Modi Stadium, Wankhede, etc.).

To run tests: Open the browser console (F12) to view the Aegis Test Suite live output.

🛠️ Prompt War Engineering
This project was built by "steering" AI through complex architectural constraints:

Context Injection: Using a VENUE_REGISTRY to teach the AI about national infrastructure.

Visual Programming: Using negative constraints to "De-box" the UI and create a fluid, glassmorphism-based agent interface.

Logical States: Mapping natural language triggers (Ticket IDs) to deep CSS and JS state changes.

🚀 Quick Start
Launch: Open index.html in a browser.

Sync: Enter a "Magic Key" to activate the Mesh:

IPL-AMD-G05 (Ahmedabad Cricket)

F1-BIC-P02 (Noida Racing)

CON-BLR-A12 (Bengaluru Concert)

Verify: Check the console to see the Google Cloud Health Check signal.
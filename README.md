# Salesforce Subscription Manager

## Overview
The Salesforce Subscription Manager is an open-source project that demonstrates the implementation of an eCommerce subscription management system within the Salesforce platform. It showcases the use of Apex, Visualforce, and Lightning Web Components (LWC) to create a full-stack solution for managing customer subscriptions, applying coupons, and tracking loyalty points.

## Features
- Create, update, and cancel subscriptions
- Apply coupons to subscriptions
- Manage customer loyalty points
- Visualforce-based dashboard for subscription management
- Lightning Web Component for subscription creation

## Components
1. **Apex Class**: `SubscriptionManager.cls`
   - Handles core subscription management logic

2. **Visualforce Page**: `SubscriptionDashboard.page`
   - Provides a user interface for managing subscriptions
   - Utilizes Lightning Design System for styling

3. **Lightning Web Component**: `subscriptionManager`
   - Offers a modern, responsive interface for subscription creation

## Prerequisites
- Salesforce Developer Account or Sandbox
- Salesforce CLI
- Visual Studio Code with Salesforce Extension Pack (recommended)

## Setup Instructions
1. Clone this repository to your local machine:
   ```
   git clone https://github.com/yourusername/salesforce-subscription-manager.git
   ```

2. Navigate to the project directory:
   ```
   cd salesforce-subscription-manager
   ```

3. Authorize your Salesforce org:
   ```
   sfdx force:auth:web:login -a YourOrgAlias
   ```

4. Deploy the components to your org:
   ```
   sfdx force:source:deploy -p force-app/main/default
   ```

5. Assign the necessary permissions to your user to access the components.

## Usage
- Access the Visualforce page by navigating to `/apex/SubscriptionDashboard` in your Salesforce org.
- Add the `subscriptionManager` Lightning Web Component to your desired Lightning page.

## Customization
- Modify the `SubscriptionManager.cls` class to add or change subscription management logic.
- Update the Visualforce page and Lightning Web Component to adjust the user interface as needed.
- Create additional custom objects or fields in your org to extend the functionality.

## Contributing
Contributions to improve the Salesforce Subscription Manager are welcome. Please follow these steps:
1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Disclaimer
This project is for demonstration purposes and may require additional security measures and error handling for production use.

## Contact
For any questions or suggestions, please open an issue in the GitHub repository.

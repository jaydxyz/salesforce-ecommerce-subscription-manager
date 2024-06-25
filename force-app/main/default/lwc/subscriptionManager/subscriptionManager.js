import { LightningElement, track } from 'lwc';
import createSubscription from '@salesforce/apex/SubscriptionManager.createSubscription';

export default class SubscriptionManager extends LightningElement {
    @track customerId;
    @track planId;
    @track startDate;
    
    handleCustomerIdChange(event) {
        this.customerId = event.target.value;
    }
    
    handlePlanIdChange(event) {
        this.planId = event.target.value;
    }
    
    handleStartDateChange(event) {
        this.startDate = event.target.value;
    }
    
    handleCreateSubscription() {
        createSubscription({ customerId: this.customerId, planId: this.planId, startDate: this.startDate })
            .then(result => {
                // Handle success
                console.log('Subscription created successfully');
            })
            .catch(error => {
                // Handle error
                console.error('Error creating subscription', error);
            });
    }
}
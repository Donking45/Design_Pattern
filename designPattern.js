class Sub {
    notify(message) {
     // Notification Message
    }
}

class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.subscribers = [
            new Sub(),  // Sub instance
            new PhoneNumberSub(),  // PhoneNumberSub instance
            new DialingSub(),  // DialingSub instance
          ];
    }

    addSub(subscriber) {
        this.subscribers.push(subscriber);
    }

    removeSub(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    notifySub(message) {
        this.subscribers.forEach(subscriber => subscriber.notify(message));
    }

    AddPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
        this.notifySub(`${phoneNumber}`);
    }

    RemovePhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.phoneNumbers.delete(phoneNumber);
            this.notifySub(`Phone number removed: ${phoneNumber}`);
        } else {
            console.log(`Phone number ${phoneNumber} is not present. Cannot remove.`);
        }
    }

    DialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)){
            this.notifySub(`Now Dialling: ${phoneNumber}`);
        } else{
            console.log(`phone number ${phoneNumber} is not on contact list.`)
        }
    }
}


// PhoneNumberSub class
class PhoneNumberSub {
    notify(phoneNumber) {
      console.log(`Phone Number: ${phoneNumber}`);
    }
  }
  
  // DialingSub class
  class DialingSub{
    notify() {
      console.log(`Now Dialling: 2347023232`);
    }
  }
 

// Example:
const telephone = new Telephone();

telephone.AddPhoneNumber('2347023232');
// Notification: Now Dialling: 2347023232
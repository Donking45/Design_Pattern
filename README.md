## A simplified version of the Observer pattern to notify subscribers about events related to a Telephone class. 

### Class Definitions:

#### Sub Class:
    Sub class represents a generic subscriber with a notify method. The notify method is expected to handle notification messages.

#### Telephone Class:
    Telephone class represents a telephone system.
    It has a set (phoneNumbers) to store phone numbers and an array (subscribers) to store instances of different subscriber classes.

**Methods:**
- addSub(subscriber): Adds a subscriber to the subscribers array.

- removeSub(subscriber): Removes a subscriber from the subscribers array.

- notifySub(message): Notifies all subscribers by calling their notify methods with a given message.

- AddPhoneNumber(phoneNumber): Adds a phone number to the phoneNumbers set and notifies subscribers.

- RemovePhoneNumber(phoneNumber): Removes a phone number from the phoneNumbers set and notifies subscribers about the removal.

- DialPhoneNumber(phoneNumber): Notifies subscribers about dialing a phone number if it is present in the contact list.

#### PhoneNumberSub Class:
    PhoneNumberSub is a subscriber class that extends the generic Sub class.
    It overrides the notify method to print a message including the phone number.

#### DialingSub Class:
    DialingSub is another subscriber class that extends the Sub class.
    It overrides the notify method to print a fixed message indicating a dialing event.

#### Example:
    An instance of the Telephone class is created.
    The AddPhoneNumber method is called with the phone number '2347023232'.
    The notifySub method is called with the message '2347023232', and subscribers (including PhoneNumberSub) are notified.
    The DialPhoneNumber method is called with the phone number '2347023232'.
    The notifySub method is called with the message 'Now Dialling: 2347023232', and subscribers (including DialingSub) are notified.

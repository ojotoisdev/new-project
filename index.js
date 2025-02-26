class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Number ${number} is not in contact list.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

class Observer {
    update(number) {
        throw new Error("Method 'update' must be implemented.");
    }
}

class PrintNumberObserver extends Observer {
    update(number) {
        console.log(number);
    }
}

class DialingObserver extends Observer {
    update(number) {
        console.log(`Now Dialing ${number}`);
    }
}

// Usage
const telephone = new Telephone();



// Add phone numbers
telephone.addPhoneNumber("07066696123");
telephone.addPhoneNumber("09029150387");

// Create observers
const printObserver = new PrintNumberObserver();
const dialingObserver = new DialingObserver();

// Add observers to the telephone class
telephone.addObserver(printObserver);
telephone.addObserver(dialingObserver);

// Dial a number
telephone.dialPhoneNumber("07066696123");

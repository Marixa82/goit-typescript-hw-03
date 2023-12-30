class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(initialKey: Key) {
        this.key = initialKey;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = [];

    comeIn(tenant: Person) {
        if (this.door === true) {
            this.tenants.push(tenant);
           } 
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
    }

    openDoor(enteredKey: Key): void {
        if (enteredKey.getSignature() === this.key.getSignature()) {
            this.door = true;
           
        } 
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
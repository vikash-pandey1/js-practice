const person = {
    name: "John",
    greet: function(city, country) {
        console.log(`Hello, I am ${this.name} from ${city}, ${country}.`);
    }
};

const person2 = { name: "Alice" };

// Using `call()`
person.greet.call(person2, "New York", "USA"); // Hello, I am Alice from New York, USA.

// Using `apply()`
person.greet.apply(person2, ["London", "UK"]); // Hello, I am Alice from London, UK.

// Using `bind()`
const boundFunc = person.greet.bind(person2, "Tokyo", "Japan");
boundFunc(); // Hello, I am Alice from Tokyo, Japan.

# Opyytatain

# Opyytatain

An opinionated JavaScript utility library.

## Installation

You can install Opyytatain via npm:

```bash
npm install opyytatain
```

## Usage

```javascript
const Opyytatain = require('opyytatain');

console.log(Opyytatain.reverseString('hello')); // Output: 'olleh'
console.log(Opyytatain.isEven(5)); // Output: false
console.log(Opyytatain.isOdd(5)); // Output: true
console.log(Opyytatain.capitalize('javascript')); // Output: 'Javascript'
console.log(Opyytatain.randomIntInRange(1, 10)); // Output: Random integer between 1 and 10
```

## API

### reverseString(str)

Reverses a given string.

- `str` (String): The string to be reversed.

Returns the reversed string.

### isEven(num)

Checks if a given number is even.

- `num` (Number): The number to be checked.

Returns `true` if the number is even, `false` otherwise.

### isOdd(num)

Checks if a given number is odd.

- `num` (Number): The number to be checked.

Returns `true` if the number is odd, `false` otherwise.

### capitalize(str)

Capitalizes the first letter of a given string.

- `str` (String): The string to be capitalized.

Returns the capitalized string.

### randomIntInRange(min, max)

Generates a random integer within the specified range.

- `min` (Number): The minimum value of the range (inclusive).
- `max` (Number): The maximum value of the range (inclusive).

Returns a random integer between `min` and `max`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

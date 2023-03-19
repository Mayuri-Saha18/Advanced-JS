{/* <aside>
💡 There are only six ***falsey*** values in JavaScript: `undefined` , `null` , `NaN` , `0` , `""` (empty string), and `false`. Anything that is not falsey it truthy.

</aside>

The easiest way to verify: 

```jsx */}
let a = null;

if (a) {
  console.log(`${a} is Truthy.`)
} else {
  console.log(`${a} is Falsey.`)
}

//? null is Falsey.
// ```

// These kind of questions are very common for the entry level technical interviews. Try to answer if the following values are truthy or falsey:
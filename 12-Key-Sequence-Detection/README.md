# 12-Key-Sequence-Detection

Provide some action if the right key combination has been pressed

---

## Noteworthy points:

### Remove the first element from an array if its length exceeds a particular number and push a new element to its end:

```javascript
pressedArray.splice(0, pressedArray.length - secretCode.length);
if (pressedArray.join("").includes(secretCode)) {
  console.log(`YOU DID IT!`);
  cornify_add();
}
```

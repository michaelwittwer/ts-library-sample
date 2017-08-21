export function Model(): ClassDecorator {
  return (constructor: Function) => {
    // Make sure everything is valid
    console.log("model decorator")
  }
}

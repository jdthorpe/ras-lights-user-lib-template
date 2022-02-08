# Ras lights user library template

## How to use this library

### Initial setup

1. Clone it onto your own github rep (optional)
2. clone if from your repo to your raspberry pi, or directly to your pi
3. Open the admin page and add it to the list of libraries using the full path
4. Use `npm i` to install the dependencies.

### Adding an effect (function)

1. create a template for your function using the ras-lights app
2. copy the template from the app and save it in a new file in the `/src` directory of your repo.
3. Write the function body. I highly recommend using VS Code for this task.
4. Import your new function in the `src/index.ts` file
5. Compile the library using `npm run build`
6. Push the library to your pi

# tech notes

-   The name field for the remote module in the webpack plugin must match the name of the library in the ras-lights admin

```js
name: "user",
```

export const Button = (route) => {
  if(route === '/create') {
    return `
      <div class="Container">
        <a class="btn Back" href="/">Back</a>
        <a class="btn Send" id="send" href="/">Send</a>
      </div>
    `;
  } else if(route === '/') {
    return `
      <div class="Container">
        <a class="btn Add" href="#/create">Add Item</a>
      </div>
    `;
  } else {
    return `
      <div class="Container">
        <a class="btn Back" href="/">Back</a>
        <a class="btn Edit" id="edit" href="/">Edit</a>
        <a class="btn Delete" id="delete" href="/">Delete</a>
      </div>
    `;
  }
}
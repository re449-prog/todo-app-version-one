
function TodoItem() {
    let todoName = "Buy Milk";
    let todoDate = "4/10/2023";
  
    return (
      <div class="container">
        <div class="row kg-row">
          <div class="col-3">{todoName}</div>
          <div class="col-2">{todoDate}</div>
          <div class="col-1">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
  
const deleteBtn = document.querySelectorAll('.fa-trash') //Storing all elements with a class of .fa-trash in a variable
const item = document.querySelectorAll('.item span') //storing all span tags within a parent element with the class of item to a variable
const itemCompleted = document.querySelectorAll('.item span.completed') // Selecting all span tags with a class of completed which are within a parent element with the class of item and storing them in a variable

Array.from(deleteBtn).forEach((element)=>{ //Creating an array from our selection and starting a loop 
    element.addEventListener('click', deleteItem) //Add an event listener to the current item that waits for a click and then calls a function called deleteItem 
}) //Close the loop

Array.from(item).forEach((element)=>{ //Creating an array from our selection and starting a loop 
    element.addEventListener('click', markComplete)//Add an event listener to the current item that waits for a click and then calls a function called markComplete 
}) //Close the loop

Array.from(itemCompleted).forEach((element)=>{ //Creating an array from our selection and starting a loop 
    element.addEventListener('click', markUnComplete) //Add an event listener to only completes items
}) // Close the loop

async function deleteItem(){ //declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item and grabs only the inner text within the list span
    try{ //starting a try block
        const response = await fetch('deleteItem', { // creating a response variable that waits on a fetch to get data from the result of the delete route
            method: 'delete', //sets the crud method for the route
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected which is json
            body: JSON.stringify({ //declare the message content being passed and stringify that content
              'itemFromJS': itemText //setting the content of the body to the inner text of the list item and naming it itemFromJs
            }) //closing the body
          }) //closing the object
        const data = await response.json() //waiting on json from the response to be converted
        console.log(data) //log the result to the console
        location.reload() //reloads the page to update what is displayed

    }catch(err){ //if an error occurs pass the error into the catch block
        console.log(err) //log the error to the console
    } //close the catch block
} //end the function

async function markComplete(){ //declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item and grabs only the inner text within the list span
    try{ // starting a try block
        const response = await fetch('markComplete', { // creates a response variable that waits on a fetch to get data from the result of markComplete route
            method: 'put', //setting the crud method to "update" for the route 
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected, which is json
            body: JSON.stringify({ //declare the message content being passed and stringify that content
                'itemFromJS': itemText //setting the content of the body to the inner text of the list item and naming it itemFromJs
            }) //closing the body
        }) //closing the object
        const data = await response.json() //waiting on json from the response to be converted
        console.log(data) //log the result to the console
        location.reload() //reloads the page to update what is displayed

    }catch(err){ //if an error occurs pass the error into the catch block
        console.log(err) //log the error to the console
    } //close the catch block
} //end the function

async function markUnComplete(){ //declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item and grabs only the inner text within the list span
    try{ // starting a try block
        const response = await fetch('markUnComplete', { // creates a response variable that waits on a fetch to get data from the result of markUnComplete route
            method: 'put', //setting the crud method to "update" for the route 
            headers: {'Content-Type': 'application/json'},  //specifying the type of content expected, which is json
            body: JSON.stringify({ //declare the message content being passed and stringify that content
                'itemFromJS': itemText //setting the content of the body to the inner text of the list item and naming it itemFromJs
            }) //closing the body
        }) //closing the object
        const data = await response.json() //waiting on json from the response to be converted
        console.log(data) //log the result to the console
        location.reload() //reloads the page to update what is displayed

    }catch(err){ //if an error occurs pass the error into the catch block
        console.log(err) //log the error to the console
    } //close the catch block
} //end the function
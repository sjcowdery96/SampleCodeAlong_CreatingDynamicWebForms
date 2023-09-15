//define the header and append it to the body
const header1 = document.createElement("h1")
header1.textContent = "Waranty Information"
document.body.append(header1)

//create the array of strings to pass into the function to create the identical elements of the form
const arrayForForms = ["First Name","Last Name","Email", "Phone Number", "Fax Number", "Address", "City","State", "Zip","Country","Model","Waranty","Serial Number"]


//define a function to keep from repeating ourselves when creating identical pieces of the form
function generateForm(items){
    items.forEach(item => {
        //build our two elements to append
        const newElementLabel = document.createElement("label")
        const newElementInput = document.createElement("input")
        //make display style block to prevent it from wrapping like a <span> element
        newElementLabel.style.display = "block"
        newElementInput.style.display = "block"
        //set the text content from the array of strings
        newElementLabel.textContent = item
        newElementInput.textContent = item
        //append those items to the document
        document.body.append(newElementLabel,newElementInput)
    });
}
//runs the function for the first section up to the last three items reserved for "Device Information"
generateForm(arrayForForms.slice(0,(arrayForForms.length-3)))

//adds another header for "Device Information"
const header2 = document.createElement("h1")
header2.textContent = "Device Information"
document.body.append(header2)

//runs the function for the last section (last three components from the end) for Device Information
generateForm(arrayForForms.slice((arrayForForms.length-3)))

//creates the last few buttons for save and close
const buttonSave = document.createElement("button")
const buttonClose = document.createElement("button")
buttonClose.textContent = "Close"
buttonSave.textContent = "Save"
document.body.append(buttonSave, buttonClose)

//just to check it worked
console.log("we did it!")

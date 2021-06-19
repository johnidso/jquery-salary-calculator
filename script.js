$( document ).ready(onReady);

let totalMonthlySalary = 0;

function onReady(){
    $("#submitButton").on("click", createRecord);
    $(document).on("click", '.delete', function(){
        $(this).closest('tr').remove();
    })
}

/* 
listeners needed - 
submit button press 
delete button press
*/ 

// get inputs, place them in DOM, clear inputs
function createRecord(){
    let firstName = $("#firstNameIn").val();
    let lastName = $("#lastNameIn").val();
    let employeeID = $("#idIn").val();
    let employeeTitle = $("#titleIn").val();
    let annualSalary = $("#annualSalaryIn").val();
    $("#tableRows").append(
        `<tr id="row${employeeID}">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeID}</td>
            <td>${employeeTitle}</td>
            <td>${annualSalary}</td>
            <td class="delete"><button type="button" class="btn btn-danger" id="delete${employeeID}">Delete</button></td>
        </tr>`
        )
    adjustMonthly(annualSalary);
    clearInputs();
} // using employee ID for delete ID as value should be unique

function clearInputs(){
    $("#firstNameIn").val('');
    $("#lastNameIn").val('');
    $("#idIn").val('');
    $("#titleIn").val('');
    $("#annualSalaryIn").val('');
}

// adjust monthly cost 
function adjustMonthly(salaryValue){
    totalMonthlySalary += parseInt(salaryValue);
    $("#totalMonthly").text(`$${totalMonthlySalary}`);
}

// add function to delete user 

// handle total monthly cost > $20,000 (.addClass Danger)





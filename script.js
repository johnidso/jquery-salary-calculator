$( document ).ready(onReady);

let totalMonthlySalary = 0;

function onReady(){
    $("#submitButton").on("click", createRecord);
    $(document).on("click", '.delete', function(){
        $(this).closest('tr').remove();
        totalMonthlySalary -= $(this).data();
        console.log($(this).data());
        setMonthly(totalMonthlySalary);
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
            <td class="salary">${annualSalary}</td>
            <td class="delete"><button type="button" class="btn btn-danger" id="delete${employeeID}">Delete</button></td>
        </tr>`
        )
    $(`#delete${employeeID}`).data(annualSalary);
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
    if(totalMonthlySalary > 20000){
        $("#totalMonthly").addClass('bg-danger')
    }
}

// handle removing monthly cost 

function setMonthly(totalMonthlySalary){
    $("#totalMonthly").text(`$${totalMonthlySalary}`);
}





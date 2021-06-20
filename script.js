$( document ).ready(onReady);

let totalMonthlySalary = 0;

function onReady(){
    // listener that creates records on input submission
    $("#submitButton").on("click", createRecord);
    // listener that removes record, adjusts total monthly, and reassesses the totalmonthly background.
    $(document).on("click", '.delete', function(){  
        console.log($(this).closest('tr').data( "salary" ));
        totalMonthlySalary -= $(this).closest('tr').data( "salary" );
        setMonthly(totalMonthlySalary);
        $(this).closest('tr').remove();
        if(totalMonthlySalary < 20000){
            $("#totalMonthly").addClass('bg-white');
        }
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
    if(!firstName || !lastName || !employeeID || !employeeTitle || !annualSalary){   // throw error if user does not include all inputs
        alert("Please fill all employee input cells.");
    } else {
        console.log(annualSalary);
        $("#tableRows").append(
            `<tr id="row${employeeID}">
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${employeeID}</td>
                <td>${employeeTitle}</td>
                <td class="salary">${annualSalary}</td>
                <td class="delete"><button type="button" class="btn btn-danger" id="${employeeID}Delete">Delete Record</button></td>
            </tr>`
            )
        $(`#row${employeeID}`).data("salary", annualSalary); // assign salary amount into table row metadata
        adjustMonthly(annualSalary);
        clearInputs();
    }
} // using employee ID for delete ID as value should be unique

function clearInputs(){
    $("#firstNameIn").val('');
    $("#lastNameIn").val('');
    $("#idIn").val('');
    $("#titleIn").val('');
    $("#annualSalaryIn").val('');
}

// adjust monthly cost only if EXCEEDS (>) $20,000
function adjustMonthly(salaryValue){
    totalMonthlySalary += parseInt(salaryValue);
    $("#totalMonthly").text(`$${totalMonthlySalary}`);
    if(totalMonthlySalary > 20000){
        $("#totalMonthly").addClass('bg-danger')
    }
}

// set monthly cost element to current totalMonthlySalary value 
function setMonthly(totalMonthlySalary){
    $("#totalMonthly").text(`$${totalMonthlySalary}`);
}





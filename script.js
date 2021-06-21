$( document ).ready(onReady);

let totalMonthlySalary = 0;

function onReady(){
    setMonthly(totalMonthlySalary);
    // listener that creates records on input submission
    $("#submitButton").on("click", createRecord);
    // listener that removes record, adjusts total monthly, and reassesses the totalmonthly background.
    $(document).on("click", '.delete', function(){  
        console.log($(this).closest('tr').data( "salary" ));
        totalMonthlySalary -= $(this).closest('tr').data( "salary" );
        setMonthly(totalMonthlySalary);
        $(this).closest('tr').remove();
        if(totalMonthlySalary <= 20000){
            $("#totalMonthly").removeClass();
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
                <td class="salary">$${annualSalary}</td>
                <td class="delete"><button type="button" class="btn btn-danger" id="${employeeID}Delete">Delete Record</button></td>
            </tr>`
            ) // *** For the purposes of this assignment I am assuming that employee IDs are UNIQUE ***
        $(`#row${employeeID}`).data("salary", parseInt(annualSalary/12)); // assign salary amount into table row metadata
        adjustMonthly(annualSalary);
        clearInputs();
    }
} 

function clearInputs(){
    $("#firstNameIn").val('');
    $("#lastNameIn").val('');
    $("#idIn").val('');
    $("#titleIn").val('');
    $("#annualSalaryIn").val('');
}

// adjust monthly cost only if EXCEEDS (>) $20,000
function adjustMonthly(salaryValue){
    totalMonthlySalary += parseInt(salaryValue/12);
    $("#totalMonthly").text(`$${totalMonthlySalary}`);
    if(totalMonthlySalary > 20000){
        $("#totalMonthly").removeClass();
        $("#totalMonthly").addClass('bg-danger')
    }
}

// set monthly cost element to current totalMonthlySalary value 
function setMonthly(totalMonthlySalary){
    $("#totalMonthly").text(`$${totalMonthlySalary}`);
}





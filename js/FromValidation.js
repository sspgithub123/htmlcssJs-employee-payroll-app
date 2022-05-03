window.addEventListener('DOMContentLoaded', (event) => {
    validName();
    salaryRange();
})
function validName(){
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.ariaValueMax.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            let empData=new EmployeePayrollData();
            empData.name=name.value;
            textError.textContent = "";
        }
        catch (e) {
            textError.textContent = e;
        }
    });
}
/** set event listener on salary range*/

function salaryRange(){
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}
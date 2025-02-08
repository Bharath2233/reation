function Validate()
{
const name=document.getElementById("name").value;
const address=document.getElementById("address").value;
const email=document.getElementById("email").value;
const pwd=document.getElementById("pwd").value;
const nameError=document.getElementById("name-error");
const addressError=document.getElementById("address-error");
const emailError=document.getElementById("email-error");
const pwdError=document.getElementById("pwd-error");
const moblienumber=document.getElementById("mobile number-error");
nameError.textContent="";
addressError.textContent="";
emailError.textContent="";
pwdError.textContent="";
moblienumber.textContent="";
    let nameregex = /^[a-zA-Z0-9_]{5,19}$/;
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let moblienumb=/^\d{10}$/;
if(name=="" || (!nameregex.test(name)))
{
    nameError.textContent="please  enter username is between 6 to 20 characters long and can contain letters, numbers, and underscores";
    return false;
}
if(address=="")
    {
        addressError.textContent="please enter your address properly";
        return false;
    }
    if(email=="" || (!emailregex.test(email)))
        {
            emailError.textContent="please enter your email matches @symbol can include letters, numbers, and certain special characters like ., %, +, -.";
            return false;
        }if(pwd=="" || (!passwordregex.test(pwd)))
            {
                pwdError.textContent="please enter your  pasword atleast one lowercase,uppercase digit  8 characters properly";
                return false;
            }
            if (moblienumber=="")
            {
                moblienumber.textContent= " please enter mathes exatly 10 digital";
                return false ;
            }
return true;
}
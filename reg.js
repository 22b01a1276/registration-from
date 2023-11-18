function formValidation()
{
var uid = document.registration.name;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;

{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
}
}
}
return false;
}
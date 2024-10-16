var x = document.getElementById("openh");
var y= document.getElementById("openus");
var z = document.getElementById("opens");
function dropdown(){

if (x.style.display!=='block'){
    x.style.display='block';
    // x.style.position='absoluate';
    y.style.display='none'
    z.style.display='none'
} 
else{
    x.style.display='none'
}
}
function dropdownus(){
   
    if (y.style.display!=='block'){
        y.style.display='block';
        x.style.display='none'
        z.style.display='none'
    } else{
        y.style.display='none'
   }
}
function dds(){
        
        if (z.style.display!=='block'){
            z.style.display='block';
            x.style.display='none'
            y.style.display='none'
        } else{
            z.style.display='none'
        }
}
var l = document.getElementById('logino')
var p = document.getElementById('main')
function pagelogin(){
        l.style.display='block';
        p.style.opacity =0.5;
}

function closelogin(){
    l.style.display='none';
    p.style.opacity =1;
}

var a = document.getElementById('tr')
var b = document.getElementById('ri')
var c = document.getElementById('ma')

function showimg(){
    if(a.style.display!=='block'){
        a.style.display='block';
        b.style.display='none'
        c.style.display='none'
    }
}
function showimg2(){
    if(b.style.display!=='block'){
        b.style.display='block';
        a.style.display='none'
        c.style.display='none'
    } else{
        b.style.display='none'
    }
}
function showimg3(){
    if(c.style.display!=='block'){
        c.style.display='block';
        b.style.display='none'
        a.style.display='none'
    } else{
        c.style.display='none'
    }
}

var cof = document.getElementById('cf')
var cold = document.getElementById('cd')
var faf = document.getElementById('fafo')
var tea = document.getElementById('te')
var all = document.getElementById('te','fafo','cd','cf')

function showall(){
    tea.style.display='flex';
    cold.style.display='flex';
    faf.style.display='flex';
    cof.style.display='flex';
    // flex-flow: WebTransport;
}

function coff(){
    if(cof.style.display!=='flex'){
        cof.style.display='flex';
        cold.style.display='none'
        faf.style.display='none'
        tea.style.display='none'
    }
    // if(showall()){
    //     cold.style.display='none'
    //     faf.style.display='none'
    //     tea.style.display='none'
    // }
}

function colddrink(){
    if(cold.style.display!=='flex'){
        cold.style.display='flex';
        cof.style.display='none'
        faf.style.display='none'
        tea.style.display='none'
    }
}

function fastfo(){
    if(faf.style.display!=='flex'){
        faf.style.display='flex';
        cold.style.display='none'
        cof.style.display='none'
        tea.style.display='none'
    }
}

function te(){
    if(tea.style.display!=='flex'){
        tea.style.display='flex';
        cold.style.display='none'
        faf.style.display='none'
        cof.style.display='none'
    }
}

const image = document.querySelectorAll(".chngimg img");
let i = 0;
let j = image.length;

function next(){
    document.getElementById("i"+(i+1)).style.display="none"

    i= (j+i+1)%j;

    document.getElementById("i"+(i+1)).style.display="block"
}
function prev(){
    document.getElementById("i" + (i+1)).style.display="none"
    i = (j + i - 1) % j;
     
    document.getElementById("i" + (i+1)).style.display="block"
}

// Side Login Validation

function sidemail(){
    var email = document.getElementById('em').value;
    var password = document.getElementById('pas').value;
    var pat = /\s/g;

    if(email==""){
        document.getElementById("mailerr").innerHTML="Please enter E-mail ID";
        return false;
    }
    if((email.length<=2)||(email.length>25)){
        document.getElementById("mailerr").innerHTML="Email not valid";
        return false;
    }
    if(email.match(pat)){
        document.getElementById("mailerr").innerHTML="Whitespace not allowed";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById("mailerr").innerHTML="Email id is not Ok";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("mailerr").innerHTML="** emailid is not Ok";
        return false;
    }
    if(password==""){
        document.getElementById("paser").innerHTML="Password can not be blank";
        return false;
    }
    if(password.length<8){
        document.getElementById("paser").innerHTML="Password should have atleast 8 characters";
        return false;
    }
    if(password.match(pat)){
        document.getElementById("paser").innerHTML="Password cannot have blanks";
        return false;
    }
}

function msgerror(){
    var email = document.getElementById('ema').value;
    var pat = /\s/g;
    
    if(email==""){
        document.getElementById("merr").innerHTML="Please enter E-mail ID";
        return false;
    }
    if((email.length<=2)||(email.length>25)){
        document.getElementById("merr").innerHTML="Email not valid";
        return false;
    }
    if(email.match(pat)){
        document.getElementById("merr").innerHTML="Whitespace not allowed";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById("merr").innerHTML="Email id is not Ok";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("merr").innerHTML="** emailid is not Ok";
        return false;
    }
    
}

function nameerr(){
    
    var name = document.getElementById('name').value;
    var pat = /\s/g;

    if(name.match(pat)){
        document.getElementById("naerr").innerHTML="Name is cannot have whitespace";
        return false;
    }
    if(name==""){
        document.getElementById("naerr").innerHTML="Name is empty";
        return false;
    }
}

function meser(){
    
    var mess = document.getElementById('msg').value;
    
    if(mess.length>50){
        document.getElementById("msgerr").innerHTML="Message is too long";
        return false;
    }
    if(mess=""){
        document.getElementById("msgerr").innerHTML="Message is Empty";
        return false;
    }
}
function psserr(){
    
    var password = document.getElementById('ps').value;
    var pat = /\s/g;

    if(password==""){
        document.getElementById("pserr").innerHTML="Password can not be blank";
        return false;
    }
    
    if(password.length<8){
        document.getElementById("pserr").innerHTML="Password should have atleast 8 characters";
        return false;
    }

    if(password.match(pat)){
        document.getElementById("pserr").innerHTML="Password cannot have blanks";
        return false;
    }

}

function validateForm() {
    if (!msgerror() || !nameerr() || !meser() || !psserr()) {
    document.getElementById("alertp").innerHTML = "*please fill all details"
    return false;
    }
}
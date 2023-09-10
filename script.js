const airline='Jim Airways Kenya';
const plane='MBURU';
//retriving the strings in a string
console.log(`${plane[0]} 1 plane`);//plane at position 0=m
console.log(`${plane[1]} 2 plane`);//plane at position 1=b
console.log(`${plane[2]} 3 plane`);//plane at position 2=u
console.log(`${plane[3]} 4 plane`);//plane at position 3=r
console.log(`${plane[4]} 5 plane`);//plane at position 4=u

//i can compute a string and retirieve it on one single line.
console.log('JAMES'[0]);//used when we want to retrieve a single key in a string
//checks length
console.log(airline.length);//inserting the key of a string
console.log('MBURU'.length);//inserting string directly
//string element retrieving
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('Kenya'));

//slice method
console.log(airline.slice(4));
console.log(airline.slice(4,7));
 
//first string extraction
console.log(airline.slice(0,airline.indexOf(' ')));
//last string extraction
console.log(airline.slice(airline.lastIndexOf(' ')+1));//Kenya


console.log(airline.slice(-2 ));
console.log(airline.slice(-3 ));//nya

console.log(airline.slice(1,-1 ));//im Airways Keny

console.log(`....................................................................`)
/*


*/
console.log(`............BOOKING A SEAT IN PLANE.............`);

//BOOK FUNCTION
const BOOKSEAT=function(seat){
    const checker=seat.slice(-1);
    if(checker==='A'){
        console.log(`You secured yourself a Window seat\n East-seat number ${seat}`);
    }
if(checker==='B'){
    console.log(`You secured yourself a middleseat seat\n East-seat number ${seat}`);
}
else if (checker==='C'){
    console.log(`You secured yourself a path way seat\n East-seat number ${seat}`)
}

else if (checker==='D'){
    console.log(`You secured yourself a path way seat\n West-seat number ${seat}`)
}
else if (checker==='E'){
    console.log(`You secured yourself a middle seat\n West-seat number ${seat}`)
}
else if (checker==='F'){
    console.log(`You secured yourself a Window seat\n West-seat number ${seat}`)
}
else{
    console.log(`invalid entry.check and Tryagain`)
}
    
};
BOOKSEAT('11B');
BOOKSEAT('11C');
BOOKSEAT('11D');
BOOKSEAT('11c');




console.log(`....................................................................`)

console.log(`............CORRECTING NAMES,LETTERS EMAIL.............`);
//fixing user errors in a string
//capital letters and small letters in a string
const L=airline.toLowerCase();
const U=airline.toUpperCase();
console.log(L,U);

//fixing the name of the passeger
//MAY VARY DIFFERENT

//family names
const planePassenger='GRACE WAMAITHA';
//const planePassenger='MBURU MBUGUA';='PETER KIMANI';='MBURU WANJIRU';='MOSES MBUGUA';

const PassLower=planePassenger.toLowerCase();
console.log(PassLower);

const correctName=PassLower[0].toUpperCase() 
+ PassLower.slice(1,6) +PassLower[6]
.toUpperCase() + PassLower.slice(7);
console.log(correctName);

// correction of ONE NAME
const onename='JIMNA';
    const corr=onename.toLowerCase();
    const correctname=corr[0].toUpperCase() + corr.slice(1);
    console.log(correctname);


console.log(`..................................EMAILS........................`);

//comparison of strings
//comparing of emails
const email=`jameswanjiru5299@gmail.com`;
const loginemail='JAMESwaNJIRU5299@GMAil.cOM  \n';
const lowerloginemail=loginemail.toLowerCase();
console.log(lowerloginemail);

//TRIM METHOD==>removes extra spaces and operands
const trimmedEmail=lowerloginemail.trim();
console.log(trimmedEmail);
//also you can use `trimend()`'trimstart()'

//chaining both
const nolmalEmail=loginemail.toLowerCase().trim();
console.log(nolmalEmail);

//comparing function
const success=email===nolmalEmail;













console.log(`.................................. ........................`);





console.log(`.................................. ........................`);

//string replacing
//changing currency to another currency
const BritainPricing=`2888.78£`;

const kenyansign=BritainPricing.replace('£','Ksh');
console.log(kenyansign);
//convertion function
const bs=kenyansign.slice(0,7);
console.log(bs);
const converterfunction=function(){
    const ksh=130;
    let esh=bs*ksh;
     kenyan=`${esh}`;
    const KenyanShilling=kenyan.slice(0,10)
    + kenyansign.slice(-3);
    console.log(KenyanShilling);
    
}

converterfunction(bs);
///////////
const anouce=`James Mburu , Purity Mugwimi,Pouline wanjiru`;
const app=anouce.replace(',','friends include')
.replaceAll('P','-')
.replace(/i/g,'***').replaceAll('u','^^^')
.replaceAll('w','@@@').replace(/m/g,'***')
.replaceAll('r','^^^').replaceAll('j','$$$')
.replaceAll('e','£££').replaceAll('a','$$$')
.replaceAll('l','$$$').replaceAll('M','$$$')
.replaceAll('n','---')
/*console.log(anouce.replaceAll('P','-'));
//implementing the same with regular expression
console.log(anouce.replace(/i/g,'***'));*/
console.log(app);






console.log(`....................booleans.................................`);
//boolean in strings
const newmodel=`jim new generation 5299JM`;
const incl=newmodel.includes(5299);
if(incl) console.log(`${correctname.slice(0,10)} Private Jets!`)

const end=newmodel.endsWith('JM');
if(end)console.log(`it is a NEW GENERATION Plane`)

const star=newmodel.startsWith('j');
if(star)console.log(` Private Jets owned by
  \n${correctname.slice(0,10)}`);



console.log(`...............ELIBILITY OF PASS BY CHECKING BUGGAGE.........................`);
//checking items of passangers
const BuggageMachine=function(items){
const roller=items.toLowerCase();
if(roller.includes(`knife`)  ){
    console.log(`You are NOT allowed to Board.\n
     posession of knife is illegal`);
}
else if(roller.includes('gun')){
    console.log(`You are NOT allowed to Board.\n
     posession of gun is illegal`);
}
else{
    console.log(`Welcome Onboard.`);
}
} 
BuggageMachine(`i have a gun,laptop,clothes`);
BuggageMachine(`i have a KNIFE,laptop,clothes`);
BuggageMachine(`i have a COMPUTER,laptop,clothes`);


console.log(`....................................................`);

//split and join methods in strings
const cars=`mazda+toyota+fielder+mitsubishi`.split('+');
//puts elements  in array.
console.log(cars);
const jimn=`james mburu wanjiru`.split(' ');
console.log(jimn);
//destructuring the array.
const[firstName,middleName,lastname]=jimn;
console.log(firstName,middleName,lastname);

const jimName=['Mr.',firstName[0].toUpperCase()
 + firstName.slice(1,10),middleName[0].toUpperCase() 
  + middleName.slice(1,10),lastname[0].toUpperCase()
   + lastname.slice(1,10)].join(' ');
   console.log(typeof jimName);

   console.log(typeof jimName);
   const arr=jimName.split(' ');
   console.log(arr);
console.log(`,,,,,,,,,,formatting names,,,,,,,,,,,,`)
//capitalization
const newpass=function(name){
const A=name.toLowerCase();
const B=A.split(' ');//array
const D=[];
//loop array
for(const C of B){
   //D.push(C[0].toUpperCase()+C.slice(1));
   D.push(C.replace(C[0],C[0].toUpperCase()));
}
console.log(D.join(' '));
}
newpass(`JAMES MBURU WANJIRU`);
newpass('MOSES MBUGUA WANJIRU');
newpass('PETER KIMANI WANJIRU');
console.log(`,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`)

//padding in a sring
const mess=`I will be succesful`;
const newmess=mess.padStart(30,'*');
console.log(newmess);
const newagain=newmess.padEnd(40,'^');
console.log(newagain);


console.log(`............masking strings.....................`)

const maskAccountNumber=function(number){
    const str=number +'';
    const fourDigit=str.slice(-4);
    return fourDigit.padStart(str.length,'*')
}
console.log(maskAccountNumber(254625485264126));


//repeat method
const message=`bad weather...allDepartures Delayed`;
console.log(message.repeat(5));


















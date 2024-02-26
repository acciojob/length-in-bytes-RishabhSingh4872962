const byteSize = (str) => {
  // write your code here
	
	return(  new Blob(["안녕하세요"]).size);
}; 
// Do not change the code below
const str = prompt("Enter some string."); 
alert(byteSize(str));

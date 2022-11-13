function readNames(input){
    let index = 0;
    let names = input[index];
    index++;
    while(names !== "Stop"){
        
        console.log(names);
        names = input[index];
        index++;
    }
}
readNames(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);

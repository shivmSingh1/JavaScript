let a={
    name:"shivam",
    lang:"javascript",
    // run:()=>{
    //     alert("self run")
    // }

}

let p={
    run:()=>{
        alert("run")
    }
}

a.__proto__ = p;

a.run()
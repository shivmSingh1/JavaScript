class railwayForm{
    constructor(givenName){
this.name= givenName
    }

    submit(){
        alert(`${this.name} your form is submited`)
    }

    cancel(){
        alert(`${this.name} your form is canceled`)
    }
}

let shivamForm = new railwayForm("shivam")
shivamForm.submit()
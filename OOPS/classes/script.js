class railwayForm{
    submit(){
        alert(`${this.name} your form is submitted`)
    }

    cancel(){
        alert(`${this.name} your form is cancled`)
    }

    fillData(givenName){
        this.name=givenName
    }
}

let shivamForm = new railwayForm()
shivamForm.fillData("shivam")
shivamForm.submit()

let akashForm = new railwayForm()
akashForm.fillData("akash")
akashForm.cancel()
class animal{
    constructor(givenName){
        this.name= givenName
    }

    run(){
        console.log(`${this.name} is running`)
    }

    eat(){
        console.log(`${this.name} is eatting`)
    }
}

class monkey extends animal{
    hide(){
        console.log(`${this.name} is hiding`)
    }

    run(){
        super.run()
        // console.log(`${this.name} is not running`)
        console.log("and jumping")
    }
}

let ani= new animal("Animal")
ani.run()

let mon= new monkey("monkey")
mon.hide()
mon.eat()
mon.run()
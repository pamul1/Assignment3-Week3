import { Car, Motorcycle } from "./class.js"; 
let datacar = []
let datamotorcycle = []

function vehicleInfo() {

    event.preventDefault();

    console.log("enter function")

    let make = inputMake.value
    let model = inputModel.value
    let year = parseInt(inputYear.value)
    let doors = parseInt(inputDoors.value)
    let type = inputType.value
    let vehicle = inputVehicle.value


    if (vehicle === "Car") {
        if(doors > 0){
            let tmp = new Car(make, model, year, doors)
            datacar.push(tmp)
            tableLayout()
        }
    } else if (vehicle === "Motorcycle") {

        if (type.length > 0) {
            let tmp = new Motorcycle(make, model, year, type);
            datamotorcycle.push(tmp);
            tableLayout2()
        }
    }
    if (vehicle === "") {
        errorVehicle.innerHTML = "Select type of vehicle"
    }
    if (vehicle === "Car" && doors <=0){
        errorDoors.innerHTML = "More than 0 door"
    }

    if (vehicle === "Motorcycle" && type === ""){
        errorType.innerHTML = "Select type of Motorcycle required"
}
}

function tableLayout(){
    if (datacar.length > 0){
        let carLayout = `<tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Doors</th>
        </tr>`

        for (let i=0; i < datacar.length; i++){
            carLayout += `<tr>
            <td>${datacar[i].make}</td>
            <td>${datacar[i].model}</td>
            <td>${datacar[i].year}</td>
            <td>${datacar[i].doors}</td>
            </tr>`
            console.log (datacar[i])
        }
        outputCar.innerHTML = carLayout
    }

}

function tableLayout2(){
    if (datamotorcycle.length > 0){
        let carLayout = `<tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Type</th>
        </tr>`

        for (let i=0; i < datamotorcycle.length; i++){
            carLayout += `<tr>
            <td>${datamotorcycle[i].make}</td>
            <td>${datamotorcycle[i].model}</td>
            <td>${datamotorcycle[i].year}</td>
            <td>${datamotorcycle[i].type}</td>
            </tr>`
        }
        outputMotorcycle.innerHTML = carLayout
    }

}
window.vehicleInfo = vehicleInfo
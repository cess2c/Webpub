const tableBody =  document.querySelector("tbody")
const get = fetch('/dishes').then(response => response.json())
function loadDishes(){
    get.then(dishes => {
        dishes.forEach(dish=> {
            const row = 
            `<tr>
                <td>${dish.id}</td>
                <td>${dish.type}</td>
                <td>${dish.province}</td>
                <td>₱${dish.price}</td>
                <td>${dish.size}</td>
                <td><img src='${dish.img}' style='width:100px; height:50px;'></td>
            </tr>
            `
            tableBody.innerHTML += row;
        })
    })
    .catch(error => console.log('Error reading dishes', error))
}

function loadDish(id){
    get.then(dishes => {
        const dishSelected = dishes.find((h) => h.id == id)
            const row = 
            `<tr>
                <td>${dishSelected.id}</td>
                <td>${dishSelected.type}</td>
                <td>${dishSelected.province}</td>
                <td>₱${dishSelected.price}</td>
                <td>${dishSelected.size}</td>
                <td><img src='${dishSelected.img}' style='width:100px; height:50px;'></td>
            </tr>
            `
            tableBody.innerHTML = row;
    })
    .catch(error => console.log('Error reading dishes', error))
}

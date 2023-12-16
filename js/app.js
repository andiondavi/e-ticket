function buy() {
    let type = document.getElementById('ticket-type').value;
    let quantity = parseInt(document.getElementById('qtty').value);
    
    if (quantity > 0) {
        buyTickets(quantity, type)
    }
}

function buyTickets(qtty, type) {
    let qttyTickets = parseInt(document.getElementById(`qtty-${type}`).textContent);

    if (qtty > qttyTickets) {
        alert(`Unavailable quantity for the ${type}`);
        document.getElementById('qtty').value = ''
    } else {
        qttyTickets = qttyTickets - qtty;
        document.getElementById(`qtty-${type}`).textContent = qttyTickets;
        alert('Purchase made successfully');
        document.getElementById('qtty').value = ''
    }
}
document.querySelectorAll('.essential-btn').forEach(button => {
    button.addEventListener('click', () => {
        const count = button.querySelector('.count');
        count.textContent = parseInt(count.textContent) + 1;
        button.classList.add('selected');
    });
});

document.getElementById('reliefForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedButtons = document.querySelectorAll('.btn.selected');
    const needs = Array.from(selectedButtons).map(button => button.dataset.value);
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const message = `Needs: ${needs.join(', ')}. Contact: ${contact}. Address: ${address}`;
    // Send message using a messaging app
    console.log('Message sent:', message);
    document.getElementById('thankYouMessage').style.display = 'block';
});



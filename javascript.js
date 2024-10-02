const totalUsersInput = document.getElementById('totalUsersInput');
const totalSalesInput = document.getElementById('totalSalesInput');

const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', () => {

    const totalUsers = totalUsersInput.value;
    const totalSales = totalSalesInput.value;

    alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
});
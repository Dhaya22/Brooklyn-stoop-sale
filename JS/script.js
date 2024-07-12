function initMap() {
    const stoopSaleLocation = { lat: 40.680635, lng: -73.994872 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: stoopSaleLocation
    });

    new google.maps.Marker({
        position: stoopSaleLocation,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('shareBtn').addEventListener('click', () => {
        const shareData = {
            title: 'Brooklyn Stoop Sale',
            text: 'Come to our Brooklyn Stoop Sale on July 20, 2024! Clothes, home goods, shoes, and tchotchkes await you!',
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing', error));
        } else {
            alert('Web Share API not supported in this browser.');
        }
    });
});

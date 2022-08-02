import renderMustache from '../../utils/render-mustache';
import setChangeLang from '../../utils/change-lang';
import contactHtml from './contact.html';
import './contact.scss';
import pin from './vcn-pin.png';
import contactTranslations from './contact-translations';

let gmapsScriptPresent = false;
let contactContainer, initialHTML;

const renderHtml = function () {
    renderMustache(initialHTML, { content: contactTranslations[language] }, contactContainer);
}

// Need to make initMap globally available, for the maps callback
window.initMap = function() {
    const infoWarehouse = '<h4>VCN Office & warehouse</h4><p>бул. "Шипченски проход" 63</p>';
    const vcnWarehouseLocation = { lat: 42.678762, lng: 23.367724 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: vcnWarehouseLocation
    });
    const infoWarehouseWindow = new google.maps.InfoWindow({
        content: infoWarehouse
    });
    const marker = new google.maps.Marker({
        position: vcnWarehouseLocation,
        map: map,
        icon: pin
    });
    marker.addListener('click', function() {
        infoWarehouseWindow.open(map, marker);
    });
};

function appendScriptToDom(src) {
    const script = document.createElement('script');
    script.setAttribute('src', src);
    document.body.appendChild(script);
}

document.addEventListener('changeRoute', function(e) {
    if (e.detail !== 'contact') {
        return;
    }
    if (gmapsScriptPresent) {
        initMap();
    } else {
        gmapsScriptPresent = true;
        appendScriptToDom(
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyBy7Zpp8CMm-i_HKcb7XavqFF41xizjlz0&callback=initMap'
        );
    }
    contactContainer = document.querySelector('.contact-info');
    initialHTML = contactContainer.innerHTML;
    renderHtml();
    setChangeLang(renderHtml, 'contact');
});

export default contactHtml;

import ComponentFun from '../../componentFun.js';

export default PhoneCatalog;

PhoneCatalog.prototype = Object.create( ComponentFun.prototype );
PhoneCatalog.prototype.constructor = PhoneCatalog;

function PhoneCatalog(){
  
  ComponentFun.apply(this, arguments);

  this._phones = [];
  this._render();

  this.on('click', '[data-element="details-link"]', (event) => {

    let phoneElement = event.delegateTarget.closest('[data-element="phone"]');
    this.trigger('phone-selected', phoneElement.dataset.phoneId);
  });

  this.on('click', '[data-element="add-button"]', (event) => {
    
    let phoneElement = event.delegateTarget.closest('[data-element="phone"]');
    this.trigger('add', phoneElement.dataset.phoneId);
  });
}

PhoneCatalog.prototype.showPhones = function (phones) {
    
  this._phones = phones;
  this._render();
}

PhoneCatalog.prototype._render = function() {

  this._element.innerHTML = `
      <ul class="phones">
        ${this._phones.map(phone => `
          
          <li class="thumbnail"
              data-element="phone"
              data-phone-id="${ phone.id }">
              
            <a
              data-element="details-link"
              href="#!/phones/${ phone.id }"
              class="thumb"
            >
              <img
                alt="${ phone.name }"
                src="${ phone.imageUrl }"
              >
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a
                data-element="add-button"
                class="btn btn-success"
              >
                ADD
              </a>
            </div>
  
            <a
              href="#!/phones/${ phone.id }"
              data-element="details-link"
            >
              ${ phone.name }
            </a>
            
            <p>${ phone.snippet }</p>
          </li>
        
        `).join('')}
      </ul>
    `;
}